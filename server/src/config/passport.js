import mongoose from 'mongoose';
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
import { keys } from '../config/keys';
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

// 引入数据模型
import User from '../models/User';

// const User = mongoose.model('users');

const passportFun =  passport => {
  passport.use(
    new JwtStrategy(opts, async function(jwt_payload, done) {
      // console.log(jwt_payload);
      const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }),
  );
};

export default passportFun;
