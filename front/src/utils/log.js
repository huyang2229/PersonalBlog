import log4js_dev from '../config/log4-dev.js'
import log4js_prod from '../config/log4-prod.js'
const log4js = require('log4js')

log4js.configure()
module.exports = log4js