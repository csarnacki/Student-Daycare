//Middleware: responsible for checking if a user is logged in before allowing them to access certain routes

//return next()= calls the next middleware in the stack, which allows the request to proceed to the intended route
module.exports = function(req, res, next) {
    // If the user is logged in, continue with the request to the intended route
    if (req.session.logged_in) {
        return next();
    }

    //If the user isn't logged in, redirect them into the login page
    return res.redirect('/login');
};   