const ErrorHandler = require("../utils/errorHandelr");
const jwt = require("jsonwebtoken");
const CatchAsyncError = require("./CatchAsyncError");
const user = require("../model/User");


exports.isAuthenticatedUser = CatchAsyncError(async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await user.findById(decoded.id);
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();

})


exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.Role)) {
            return next(
                new ErrorHandler(
                    `Role: ${req.user.Role} is not allowed to access this resouce `,
                    403
                )
            );
        }

        next();
    };
};