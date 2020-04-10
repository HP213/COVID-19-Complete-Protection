var bcrypt = require('bcryptjs'),
User = require('../models/User'),
passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) =>{
  done(null, user.id);
});

passport.deserializeUser((id, done) =>{
  User.findById(id, (err, user)=>{
    done(err, user);
  });
});

passport.use(
  new LocalStrategy({usernameField : "email"}, (email, password, done) =>{
    User.findOne({email : email})
      .then(user => {
        ////The below commented part is used to register new doctor, right now we are using a single id
        ////and it is stored in our database. If you are using first time please uncomment it register and then comment it again

        // if(!user){
        //   const newUser = new User({email, password});
        //   bcrypt.genSalt(10, (err, salt) => {
        //     bcrypt.hash(newUser.password, salt, (err, hash) =>{
        //       if(err) throw err;
        //       newUser.password = hash;
        //       newUser.save().then(user => {
        //         return done(null, user);
        //       })
        //       .catch(err => {
        //         return done(null, false, {message : err});
        //       });
        //     });
        //   });
        // }
        // else{


          bcrypt.compare(password, user.password, (err, isMatch) =>{
            if(err) throw err;

            if(isMatch){
              return done(null, user);
            }else{
              return done(null, false, {message : "Wrong password"});
            }
          });

        // }

      })
      .catch(err => {
        return done(null, false, {message : err});
      });
  })
);

module.exports = passport;
