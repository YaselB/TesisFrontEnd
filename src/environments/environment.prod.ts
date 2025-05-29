export const environment = {
  production: true,
  apiUrl: 'http://10.128.60.56:5000',
  loginUrl: 'http://10.128.60.56:5000/auth/login',
  sentryUrl: 'http://65ba5ead87524c59bb583bc2a3cdd9c6@sentry.akademos.prod.uci.cu/3',
  openmap_server: 'http://map.akademos.prod.uci.cu/',
  storage_server: 'http://storage.akademos.prod.uci.cu/',
  forgot_password_url: 'http://server.akademos.prod.uci.cu/user/password/reset/',
  minioConnection: {
    accessKey: 'minio',
    secretKey: 'minio1234',
    endPoint: 'storage.akademos.prod.uci.cu',
    useSSL: false,
  },
};
