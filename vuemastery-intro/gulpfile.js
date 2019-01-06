const {src, watch, dest} = require('gulp');
const pug = require('gulp-pug');
function defaultTask(cb) {
src('src/views/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(dest('./dist'))
    cb();
}

exports.default = defaultTask;
watch('src/views/*.pug', defaultTask)
