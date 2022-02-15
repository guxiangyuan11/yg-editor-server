// status: 1200x
// 登录校验失败
export const loginCheckFailInfo = {
  status: 12001,
  message: '登录校验失败',
};

// 发送短信验证码过于频繁
export const sendVeriCodeFrequentlyFailInfo = {
  status: 12002,
  message: '请勿频繁获取短信验证码',
};

// 发送短信验证码错误
export const sendVeriCodeErrorFailInfo = {
  status: 12003,
  message: '发送短信失败，请稍后重试',
};

// 登录时，验证码不正确
export const loginVeriCodeIncorrectFailInfo = {
  status: 12004,
  message: '验证码不正确',
};

// 创建用户，写入数据库，失败
export const createUserDbErrorFailInfo = {
  status: 12005,
  message: '创建用户失败 db error',
};

// 修改用户信息，写入数据库，失败
export const updateUserInfoDbErrorFailInfo = {
  status: 12006,
  message: '修改用户信息失败 db error',
};

// 修改用户信息，失败（数据库操作没问题）
export const updateUserInfoFailInfo = {
  status: 12007,
  message: '修改用户信息失败',
};

// 用户被冻结
export const userFrozenFailInfo = {
  status: 12008,
  message: '你的账户已被冻结，请联系管理员',
};
