const colors = require('colors/safe');
// 提取报错或警告信息
const errorMsgReg = RegExp(String.fromCharCode(27) + /\[0m[\s\S]*/.source + String.fromCharCode(27) + /\[0m/.source)
class MyPlugin {
    apply(compiler) {

        compiler.hooks.compile.tap('myPlugin', () => {
            console.clear()
            console.log(colors.blue('compiling...'));
        });

        compiler.hooks.afterEmit.tapAsync('myPlugin', (compilation, call) => {
            call()
        });
        compiler.hooks.done.tapAsync('myPlugin', (
            stats, callback
        ) => {
            debugger
            console.clear()
            const info = stats.toJson()
            if (stats.hasErrors()) {
                console.log(colors.red('\ncompile failed!\n'));
                const errMsg = info.errors[0].match(errorMsgReg)
                if (errMsg) {
                    console.error(errMsg[0])
                }
                else {
                    console.error(info.errors[0])
                }

            } else if (stats.hasWarnings()) {
                console.log(colors.green('Project is running at http://192.168.50.2:8080'));
                console.log(colors.yellow('\ncompiled with warning!\n'));
                const warnMsg = info.warnings[0].match(errorMsgReg)
                if (warnMsg) {
                    console.warn(warnMsg[0])
                } else {
                    console.warn(info.warnings[0])
                }
            } else {
                console.log(colors.green('Project is running at http://192.168.50.2:8080'));
                console.log(colors.green('compile successful!\n'));
            }
            callback()
        });
    }
}

module.exports = MyPlugin;