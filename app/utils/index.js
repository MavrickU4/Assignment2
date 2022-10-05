export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

//Won't allow list view without login
export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}