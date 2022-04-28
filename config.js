const dbSetting = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  dateStrings: process.env.dateStrings
};

exports.dbSetting = dbSetting;
