const checkUsername = (username) => {
    let usernameChecker = /^\D\w{2,}$/;
    return usernameChecker.test(username);
};

const checkPassword = (password) => {
    var num = /[0-9]/;
    var uppercase = /[A-Z]/;
    var special = /[/*-+!@#$^&*]/;

    if (password.length < 8) {
        return false;
    } else if (!num.test(password)) {
        return false;
    } else if (!uppercase.test(password)) {
        return false;
    } else if (!special.test(password)) {
        return false;
    } else {
        return true;
    }
};

const checkEmail = (email) => {
    return (email.includes("@"));
};

const registerValidator = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    if(!checkUsername(username)){
        req.flash('error', "Invalid username!");
        req.session.save(err => {
            res.redirect("/registration");
        });
    }else if(!checkPassword(password)){
        req.flash('error', "Invalid password!");
        req.session.save(err => {
            res.redirect("/registration");
        });
    }else if(!checkEmail(email)){
        req.flash('error', "Invalid email!");
        req.session.save(err => {
            res.redirect("/registration");
        });
    }else{
        next();
    }
}

const loginValidator = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    if(!checkUsername(username)){
        req.flash('error', "Invalid username!");
        req.session.save(err => {
            res.redirect("/registration");
        });
    }else if(!checkPassword(password)){
        req.flash('error', "Invalid password!");
        req.session.save(err => {
            res.redirect("/registration");
        });
    }else{
        next();
    }
}

// POST CHECKERS NOT WORKING
const checkTitle = (title) => {
    return (title && title.length === 0);
}

const checkDesc = (desc) => {
    return (desc && desc.length === 0)
}

const checkImage = (image) => {
    return (image && image.length == 0)
}

const postValidator = (req, res, next) => {
    let title = req.body.title;
    let description = req.body.description;
    let image = req.body.uploadImage;

    if(!checkTitle(title)){
        req.flash('error', "Invalid title!");
        req.session.save(err => {
            res.redirect("/posts");
        });
    }else if(!checkDesc(description)){
        req.flash('error', "Invalid description!");
        req.session.save(err => {
            res.redirect("/posts");
        });
    }else if(!checkImage(image)){
        req.flash('error', "Invalid image!");
        req.session.save(err => {
            res.redirect("/posts");
        });
    }else{
        next();
    }
}

module.exports = { registerValidator, loginValidator};