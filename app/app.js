// Third-Party Modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES Modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuration Module
import { Secret } from '../config/config.js';

// Import Routes
import indexRouter from './routes/index.route.server.js'

// Instantiate Express Application
const app = express();

// Set Up Middlewares

// Setup ViewEngine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname,'../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));

// Use Routes
app.use('/', indexRouter);
//App routers
//app.use('/', authRouter)
//app.use('/', listRouter)

/*
// PASSPORT
//Step 1 
import passport from 'passport';
//prompt npm install passport 
import passportLocal from 'passport-ls';
//promp npm install passport-local
import flash from 'connect-flash';
//promt  npm install connect-flash

//AUTH Step 2 - define our auth strategy
let localStrategy = passportLocal.Strategy;

//Auth Step 3 - import the user model
import User from './modules/user.js';

//Step 4 - 
import authRouter from './routres/auth.route.server.js';

//Auth Step 4 - setup Express Session
//app.use(session({
   // secret: Secret,
   //// saveUninitialized: false, 
    //resave: false
//}));
//Auth 5
app.use(flash());

//Auth Step 6 - Initialize PAssport and session
app.use(passport.initialize());
app.use(passport.session());

//Auth Step 7 - impliment the Auth Stragety
passport.use(User.createStrategy());

//Auth Step 8 - setup serializtion and deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/
export default app;


