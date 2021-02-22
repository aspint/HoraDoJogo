const log4js = require('log4js');
const logging = log4js.getLogger();
logging.level= "debug";

function loggerDebug(texto, msg = ""){
    if(msg === ""){
        logging.debug(texto)    
    }else{
        logging.debug(msg+" "+texto);
    }
}

function loggerInfo(texto, msg = ""){
    if(msg === ""){
        logging.info(texto);
    }else{
        logging.info(msg+" "+texto);
    }
}

function loggerError(texto, msg = ""){
    if(msg === ""){
        logging.error(texto);
    }else{
        logging.error(msg+" "+texto);
    }
}


module.exports.loggerDebug = loggerDebug;
module.exports.loggerInfo = loggerInfo;
module.exports.loggerError = loggerError;