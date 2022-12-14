const catchAsync = require("./../utils/catchAsync");
const runCommand = require("../utils/shellCommand")
const util = require('util');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE_LOCAL;

async function createBackupFn(db, destination) {
    // const command = `mongodump -d ${db} --archive=D:\\attendence/tailor.gz --gzip`
    const command = `mongodump -d ${db} --archive=${destination} --gzip`
    console.log(destination);
    await runCommand(command);
}

exports.createBackup = catchAsync(async (req, res, next) => {
    const time = new Date().getTime();
    const db = req.query.db;
    const name = req.query.name || db;
    const destination = req.query.destination + "\\" + name + "" + time + ".gz";

    await createBackupFn(db, destination);
    res.json({
        status: 'sucess',
        message: `sucessfully backed up in ${destination}`,
        // result: result,
    })

});

exports.restore = catchAsync(async (req, res, next) => {
    const destination = req.query.destination;
    // --nsFrom='schoolAPI*' --nsTo='schoolAPI*'
    const command = `mongorestore --archive=${destination}`
    const result = await runCommand(command);
    res.json({
        status: 'sucess',
        message: `restored from ${destination}`
    })
});

exports.getListOfDatabases = catchAsync(async (req, res, next) => {
    var mongoose = require('mongoose')
        , Admin = mongoose.mongo.Admin;

    /// create a connection to the DB    
    var connection = mongoose.createConnection(DB);
    connection.on('open', function () {
        // connection established
        new Admin(connection.db).listDatabases(function (err, result) {
            console.log('listDatabases succeeded');
            // database list stored in result.databases

            var listOfDatabases = result.databases.filter(database => database.name != 'config' && database.name != 'admin' && database.name != 'local');
            res.json({
                status: 'sucess',
                databases: listOfDatabases
            })
        });
    });



})




