var gulp = require("gulp"),  
  deploy = require("gulp-gh-pages");

  gulp.task('publish', function () {  
        return gulp.src("./_book/**/*")
          .pipe(deploy({
              remoteUrl: "http://git.gitlore.com/darren/jin_gang_jing.git"
                  }))
          .on("error", function(err){
                    console.log(err)
                  })
  });

  gulp.task('default', ['publish']);
