const bcrypt = require('bcryptjs');

const tools = {
  // 加密密码
  enbcrypt(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  },
};

module.exports = tools;
