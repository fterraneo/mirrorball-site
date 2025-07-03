require("dotenv").config()
const FtpDeploy = require("ftp-deploy")
const ftpDeploy = new FtpDeploy()

const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    localRoot: __dirname + "/dist",
    remoteRoot: process.env.REMOTE_DIR,
    include: ["*", "**/*"],
    exclude: [],
    deleteRemote: true,
    forcePasv: true,
    sftp: false,
}

console.log("Starting deployment to: ", process.env.FTP_HOST)

ftpDeploy
    .deploy(config)
    .then((res) => console.log("Deployment finished."))
    .catch((err) => console.log("Deployment failed!", err))
