var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

browserify('./public/js/main.js', { debug: true })
.transform(babelify)
.bundle()
.on('error', function (err) { console.log('Error : ' + err.message); })
.pipe(fs.createWriteStream('./dist/js/dist.js'));