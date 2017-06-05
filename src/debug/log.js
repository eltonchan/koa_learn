/**
 * Created by mac on 2017/4/30.
 */
"use strict";
var path = require('path')
    , log4js = require('log4js');

log4js.configure(
    {
        appenders: [
            // {
            //     type: "file",
            //     filename: "log/important-things.log",
            //     maxLogSize: 10*1024*1024, // = 10Mb
            //     numBackups: 5, // keep five backup files
            //     compress: true, // compress the backups
            //     encoding: 'utf-8',
            //     mode: parseInt('0640', 8),
            //     flags: 'w+'
            // },
            {
                type: "dateFile",
                filename: "log/Sequelize_data.log",
                pattern: "yyyy-MM-dd-hh",
                compress: true
            },
            {
                type: "stdout"
            }
        ]
    }
);

var logger = log4js.getLogger('Sequelize');
// logger.debug("This little thing went to market");
// logger.info("This little thing stayed at home");
// logger.error("This little thing had roast beef");
// logger.fatal("This little thing had none");
// logger.trace("and this little thing went wee, wee, wee, all the way home.");
export default logger;