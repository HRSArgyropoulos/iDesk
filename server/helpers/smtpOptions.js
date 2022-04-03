const smtpOptions = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,
    refreshToken: process.env.EMAIL_REFRESH_TOKEN,
  },
};

module.exports = { smtpOptions };
