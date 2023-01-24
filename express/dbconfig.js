const  config = {
    user:  'odev', // sql user
    password:  'odevOdev123', //sql user password
    server:  '78.189.55.194', // if it does not work try- localhost
    database:  'CAMPER',
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port:  5000
  }
  
  module.exports = config;