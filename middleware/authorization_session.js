/* Autorización */

var authorizationSession = (req, res, next) => {
    if (process.env.ALL_GRANTED.includes(req.session.role)) {
        req.access = true;
        return next()
    } else if (process.env.PAGE_USER.includes(req.session.role)) {
        return next()
    }
    else {
        return res.redirect("/")
    }
}

module.exports = authorizationSession;