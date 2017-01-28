

var mysql = require('mysql');

var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "password",
        database: "stop_thief_db"
    },
    jawsDB: {

        // TODO: Add your JawsDB connection info here
        port: 3306,
        host: 'ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'lxc0omv0zh7vwbbv',
        password: "xo0hv29fp56y5w4l",
        database: "igbrdxs9wqtwcg3p"
    }
}


// TODO: connect your jawsDB connection witht he mysql connection.
var connection = mysql.createConnection(source.localhost);



connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
