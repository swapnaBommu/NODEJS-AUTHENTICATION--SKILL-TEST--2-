//import external libraries in top
import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import session from 'express-session';
import dotenv from "dotenv";


//import our files from here
import userRouter from './src/user.routes.js';
import { connectToDB } from './src/config/mongoose.config.js';
const app = express();

// load all the environment variables in application
dotenv.config();

//use the static js file in public folder for delete 
app.use(express.static(path.resolve("src/public")));

//create an instance of controller classes
// const usersController = new UserController();


//setup ejs layouts
app.use(ejsLayouts);
app.use(express.json());

//parse form data
app.use(express.urlencoded({extended : true}));


//setup view engine settings
app.set("view engine","ejs");
app.set("views",path.join(path.resolve(),"src","views"));
app.use(express.static('src/views'));

//creating session
app.use(session({
    secret:'SecretKey',
    resave:false,
    saveUninitialized:true,
    
}))
//routers
app.use('/api/users', userRouter);// app.use(userRouter);




app.listen(3200,() =>{
    console.log('app is listening on 3200');
    connectToDB();
});
