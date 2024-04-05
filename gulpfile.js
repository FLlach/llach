const {task, src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require( "gulp-plumber");
//const webp = require("gulp-webp");
const git = require("gulp-git");

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

function gitinit(done){
    task('init', function(){
        git.init(function (err) {
        if (err) throw err;
        });
    });
    done()
    }

function gitpull(done){
    // Task to pull changes from the remote repository
    task('git-pull', function() {
        return git.pull('origin', 'master', function(err) {
            if (err) throw err;
        });
    });
    done()
}

function addremote(done){
    git.addRemote('origin', 'https://github.com/FLlach/llach')
    done()

}

function gitpush(done){
    // Task to push changes to the remote repository
    src('./*')
        .pipe(git.add())
        .pipe(git.commit("auto commit"))
        .pipe(git.push('origin', 'master'));

    done()
}

exports.gitinit = gitinit
exports.gitpush =  gitpush
exports.gitpull =  gitpull
exports.css= css
exports.dev= dev