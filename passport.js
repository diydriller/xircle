var passport = require('passport')
var User = require('./src/models/User')
var dotenv = require('dotenv')
var bcrypt = require('bcrypt')
const {Strategy : LocalStrategy} = require('passport-local')
const {ExtractJwt, Strategy: JWTStrategy} = require('passport-jwt')
dotenv.config();


const passportConfig = { usernameField: 'email', passwordField: 'email' };


const JWTConfig = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: 'jwt-secret-key',
}

const JWTVerify = async (jwtPayload, done) => {
    try {

      const user = await User.findOne({ _id: jwtPayload.id });
      if (user) {
        done(null, user);
        
        return;
      }
      done(null, false, { reason: '올바르지 않은 인증정보 입니다.' });
    } catch (error) {
      console.error(error);
      done(error);
    }
  };

const passportVerify = async (nickname, password, done) => {
  try {
    const user = await User.findOne({nickname});
    if (!user) {
      done(null, false, { message: '존재하지 않는 사용자 입니다.' });
      return;
    }
    const compareResult = await bcrypt.compare(password, user.password);

    if (compareResult) {
      done(null, user);
      return;
    }

    done(null, false, { reason: '올바르지 않은 비밀번호 입니다.' });
  } catch (error) {
    console.error(error);
    done(error);
  }
};

module.exports = () => {
  passport.use('local', new LocalStrategy(passportConfig, passportVerify));
  passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));
};



passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());