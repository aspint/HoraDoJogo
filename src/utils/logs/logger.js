const log4js = require('log4js');
const logging = log4js.getLogger();
logging.level= "debug";

function loggerDebug(texto, msg = ""){
    logging.debug(msg+" "+texto);
}

function loggerInfo(texto, msg = ""){
    logging.info(msg+" "+texto);
}

function loggerError(texto, msg = ""){
    logging.error(msg+" "+texto);
}


module.exports.loggerDebug = loggerDebug;
module.exports.loggerInfo = loggerInfo;
module.exports.loggerError = loggerError;