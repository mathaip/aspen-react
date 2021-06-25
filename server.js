var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    // enable ssl redirect
    app.use(sslRedirect());
    app.get('/*', (req, res) => {
        res.sendFile(path.join('build', 'index.html'));
    });
}
module.exports = function(environments, status) {
    environments = environments || ['production'];
    status = status || 302;
    return function(req, res, next) {
        if (environments.indexOf(process.env.NODE_ENV) >= 0) {
            if (req.headers['x-forwarded-proto'] != 'https') {
                res.redirect(status, 'https://' + req.hostname + req.originalUrl);
            } else {
                next();
            }
        } else {
            next();
        }
    };
};