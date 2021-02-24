const express=require('express');
const path=require('path');
const compression=require('compression');
const cors=require('cors');
const db = require('./db')
const passport = require('passport')
const passportConfig = require('./passport')
const morgan = require('morgan')
require('dotenv').config();

const app=express();

app.use(express.static(path.join(__dirname,'public')));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan("dev"))
app.use(passport.initialize());
passportConfig();


require('./src/routers/chatRouter')(app);
require('./src/routers/commentRouter')(app);
require('./src/routers/hashtagRouter')(app);
require('./src/routers/photoRouter')(app);
require('./src/routers/postRouter')(app);
require('./src/routers/userRouter')(app);



app.get('/',(req,res)=>{
    return res.send("hello developers");
});

app.use((err,req,res,next)=>{
    if(!err.status){
       return res.json({
           code:500,
           success:false,
           message:'서버에러'
        });
    }
 });

app.listen(process.env.PORT||3000);