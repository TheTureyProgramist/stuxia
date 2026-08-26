require("dotenv").config();
const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + "/dist",
  remoteRoot: "public_html/",
  include: ["*"],
  exclude: ["**/node_modules/**", ".git/**", ".env"],
  deleteRemote: true,
  forcePasv: true,
  sftp: false,
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log(" Успішно завантажено на хостинг!", res))
  .catch((err) => console.log(" Помилка деплою: ", err));
