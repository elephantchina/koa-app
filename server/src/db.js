import mongoose from 'mongoose';
import { keys } from './config/keys';

//链接数据库
const connect = () => {
  mongoose
    .connect(keys.mongoURL, { useNewUrlParser: true })
    .then(() => {
      console.log('🔗 Mongodb Connected Success...');
    })
    .catch(err => {
      console.log('Mongodb Connected Fail...');
      console.log(err);
    });
};

export default connect;
