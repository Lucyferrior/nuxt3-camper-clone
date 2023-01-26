import sql from "mssql";
var server = "192.168.1.148";
var database = "CAMPER";
var username = "odev";
var password = "odevOdev123";

var config = {
  user: username,
  password: password,
  server: server,
  database: database,
  options: {
    encrypt: false,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
  pool: {
    max: 10,
  },
};

function connect() {
  try {
    var connection = sql
      .connect(config)
      .then(() => {
        console.log(`Database Connected: ${server}:${database}`);
      })
      .catch(()=>{
        console.log(`Veritabanına bağlanılamadı HOCAAAAAAMMM: ${server}:${database}`);
      });
    return connection;
  } catch (error) {
    console.dir(error);
  }
  return;
}
export default connect;
