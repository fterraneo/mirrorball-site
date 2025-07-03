## Mirrorball website

### Install
```shell
npm install
```

### Launch locally
```shell
npm run dev
```

### Build
```shell
npm run build
```

### Deploy via Surge
```shell
npm run deploy:surge
```

### Deploy via FTP
Provide a .env file with the following variables:
```plaintext
FTP_HOST=your-ftp-host
FTP_USER=your-ftp-username
FTP_PASSWORD=your-ftp-password
FTP_PORT=ftp-port
REMOTE_DIR=target folder on the server
```
Then run:
```

```shell
npm run deploy
```
