const {task, src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require( "gulp-plumber");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const cache = require( "gulp-cache");
const avif = require ("gulp-avif");

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

function versionWebp(done){

    const opciones = {
        quility: 50
    };

    src("src/img/**/*.{png,jpg}")
        .pipe(webp(opciones))
        .pipe(dest("build/img"))
    done()
}

function versionAvif(done){

    const opciones = {
        quality: 50
    };

    src("src/img/**/*.{png,jpg}")
        .pipe(avif(opciones))
        .pipe(dest("build/img"))
    done()
}

function imagenes(done){

    const opciones = {
        optimizationLevel: 3
    }
    src("src/img/**/*.{png,jpg}")
        .pipe(cache(imagemin(opciones)))
        .pipe(dest( "build/img" ));
    done()
}


exports.versionWebp = versionWebp
exports.versionAvif = versionAvif
exports.css= css
exports.dev= parallel (dev, versionWebp, imagenes)
exports.imagenes = imagenes;