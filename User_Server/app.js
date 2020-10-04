var express = require('express'),
session = require('express-session'),
MongoStore = require('connect-mongo')(session),
mongoose = require('mongoose'),
bodyParser  = require("body-parser"),
app = express();

const passport = require('./passport/setup');
const auth = require('./routes/auth');
const addition = require('./routes/addition');

//MongoDB local database
//db name : test
const URI = "mongodb://localhost/test";

mongoose
  .connect(URI, {useNewUrlParser : true})
  .then(console.log(`MongoDB connected ${URI}`))
  .catch(err => console.log(err));

app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(
  session({
    secret : "Very Secret Changes",
    resave : false,
    saveUninititalized : true,
    store : new MongoStore({ mongooseConnection : mongoose.connection })
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.use("/api/auth", auth);
app.use("/addCoordinates", addition);

//Add your own ipv4 address, port number for doctor server is 3001
app.listen(3000,'192.168.43.43' || 'localhost',function() {
    console.log('Application worker ' + process.pid + ' started...');
  }
  );
