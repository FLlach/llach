const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require( "gulp-plumber" );
const webp = require("gulp-webp");

function css(done){
    src("src/scss/**/*.scss")//Identificar archivo
        .pipe(plumber())
        .pipe(sass())//compilar
        .pipe(dest("build/css"));//guardar

    done() //callback
}

function dev(done){
    watch("src/scss/**/*.scss", css)

    done()
}

function cimg(done){
    src("")
    done()
}
exports.css= css
exports.dev= dev