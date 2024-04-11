const {task, src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require( "gulp-plumber");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const cache = require( "gulp-cache");
const avif = require ("gulp-avif");
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const postcss = require("gulp-postcss")
const sourcemaps = require("gulp-sourcemaps")
const terser = require("gulp-terser-js")

function css(done){
    src("src/scss/**/*.scss")//Identificar archivo
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())//compilar
        .pipe(postcss([ autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write("."))
        .pipe(dest("build/css"));//guardar

    done() //callback
}

function javascript(done){
    src("src/js/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest("build/js"))
    
    done()
}

function dev(done){
    watch("src/scss/**/*.scss", css)
    watch("src/js/**/*.js", javascript)

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
exports.javascript = javascript