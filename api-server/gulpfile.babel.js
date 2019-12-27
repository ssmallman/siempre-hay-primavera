// This file has a .babel.js extension as a signal to Gulp to run *this* file through the Babel
// transpiler before executing it. In turn, Gulp will use @babel/register to perform transpilation
// at runtime. This lets us write our Gulpfile with the same fancy JavaScript features that our
// feature code benefits from.

import babel from "gulp-babel";
import gulp from "gulp";

gulp.task("prepare", () => {
	return gulp.src("./src/**/*.js")
		.pipe(babel())
		.pipe(gulp.dest("./target"));
});