/*import express from 'express';

//need passport 
import passport from'passport';

import User from '../modles./user.js';

import {UserDisplatName } from '../utils/app.js';

//Display functions

export function DisplayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {titles: 'Login', page: 'login', messages: req.flash('loginMEssage')});
    }
    return res.redireect ('/list');
}

export function DisplayRegistrationPage(req, res, next){
    if(!req.user){
        return res.render('index', {titles: 'Register', page: 'register', messages: req.flash('loginMessage')});
    }
    return res.redireect ('/register');
}

//processing function
export function ProcessLoginPage(req, res, next){
    passport.authenticate('local', function(err, user, info)
    {
        if(err){
            console.error(err);
            res.end(err);
        }
        if(user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.login(user, funciton(err){
            if(err){
                console.error(err);
                res.end(err);
            }
            return res.end(err);
        })
        })(req, res, next);
}

*/