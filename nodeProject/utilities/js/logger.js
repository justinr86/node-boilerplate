//Provides logging functionality
import winston from 'winston'
import 'winston-daily-rotate-file'
import path from 'path'
import config from '../../config/logConfig.json'

const ENV = process.env.NODE_ENV || 'development'
const transport = winston.transports
const format = winston.format
const createLogger = winston.createLogger

/**
 * Instaniates a logger using information from the configuration file.
 * @param {*} env 
 */
const getLogger = (env) => {
    
    const logTransports = []

    if (env === 'development') {
        logTransports.push(new transport.Console())
    } 

    logTransports.push(new transport.DailyRotateFile({
        filename: config.logFileName,
        dirname: config.logDirectory
    }))

    const logger = createLogger({
        transports: logTransports,
        format: format.combine(
            format.label({ label: path.basename(process.mainModule.filename) }),
            format.timestamp({
              format: config.logFormat.timestamp
            }),
            format.printf(
                info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
            )
          )
    })

    return logger
}

const logger = getLogger(ENV)

export default logger

