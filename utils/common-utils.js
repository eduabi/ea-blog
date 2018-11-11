const chalk = require('chalk');
exports._log = (content, logType = 'error') => {
    switch (logType) {
        case 'info':
            console.log.call(chalk, chalk.gray(content))
            break;
        case 'error':
            console.log.call(chalk, chalk.red(content))
            break;
        case 'warn':
            console.log.call(chalk, chalk.yellow(content))
            break;
        case 'success':
            console.log.call(chalk, chalk.green(content))
            break;
    }
}