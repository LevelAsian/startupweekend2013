var path     = require('path')
    , express  = require('express')
    , app      = module.exports = express()
    , api      = require('./routes/api')
    , mongoose = require('mongoose')
    , cors = require('cors');

var User = require('./model/db');


// Apparently needs to be used in such that req.body automatically gets parsed
// properly.
app.set('views', __dirname + '/app');
app.set('view engine', 'ejs');
app.use(express.logger("dev"));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(cors());
app.use(app.router);

// First looks for a static file: index.html, css, images, etc.
app.use("/app", express.compress());
app.use("/app", express.static(path.resolve(__dirname, "./app")));
app.use("/app", function(req, res, next) {
    res.send(404);
});
app.use(express.logger('dev')); // Log requests to the console

// This is the route that sends the base index.html file all other routes are
// for data only, no server-side views here.
app.all('/', function(req, res) { // Dette går til angular
    res.sendfile('index.html', { root: "app" });
});

// POST /login
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
//
//   curl -v -d "username=bob&password=secret" http://127.0.0.1:3000/login
//
/***** This version has a problem with flash messages
 app.post('/login',
 passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
 function(req, res) {
    res.redirect('/');
  });
 */

// POST /login
//   This is an alternative implementation that uses a custom callback to
//   acheive the same functionality.

var port = process.env.PORT || 3001;
app.listen(port);

console.log('Server listening on port ' + port);
