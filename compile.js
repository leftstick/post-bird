const packager = require('electron-packager');

const platforms = ['darwin', 'win32', 'linux'];
const icons = {
    darwin: './main/images/postbird.icns',
    win32: './main/images/postbird.ico'
};

platforms.forEach(function(platform) {
    packager({
        dir: __dirname,
        name: 'Postbird',
        platform: platform,
        arch: 'x64',
        icon: icons[platform],
        out: './dist',
        asar: true,
        appVersion: require('./package.json').version,
        ignore: /^\/(dist|docs|render|node_modules|\.[\w\.]+|compile\.js|LICENSE|README\.md|\w+\.config\.\w*)/
    }, function(err, appPaths) {
        if (err) {
            console.error(err);
            return process.exit(-1);
        }
        console.log(appPaths[0] + ' generated!!!');
    });
});
