const path = require('path');
const process = require('process');

module.exports = {
    toLocalStorage: path.join(process.env.HOME,'textClassify','result.csv'),
    toLocalStorageContent: path.join(process.env.HOME,'textClassify','toClassify')
}