const mongoose = require("mongoose");
// module.exports = mongoose.connect('mongodb://localhost:27017/db-dev', {
//     useNewUrlParser: true,
//     user: 'mongoDB',
//     pass: 'password',
//     dbName:'db-dev',
// });

module.exports = mongoose.connect('mongodb://localhost:27017/db-dev');

// module.exports = mongoose.connect("mongodb://localhost:27017/db-dev", //mongodb://mongodb:27017/mydb
//     {
//         user: "mongoDB", //testroot
//         pass: "password", //password
//         auth: {
//             authdb: "admin" //admin
//         },
//         autoIndex: NODE_ENV === 'dev',
//         useNewUrlParser: true,
//        // reconnectTries: Number.MAX_VALUE,
//         reconnectInterval: 500, // Reconnect every 500ms
//         poolSize: 10 // Maintain up to 10 socket connections
//     }
// );
//
// /// #- ~/var/lib/mongodb:/data/db
