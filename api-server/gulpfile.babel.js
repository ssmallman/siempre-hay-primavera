// This file has a .babel.js extension as a signal to Gulp to run *this* file through the Babel
// transpiler before executing it. In turn, Gulp will use @babel/register to perform transpilation
// at runtime. This lets us write our Gulpfile with the same fancy JavaScript features that our
// feature code benefits from.

import babel from "gulp-babel";
import del from "del";
import { src, dest, series } from "gulp";
import webpack from "webpack-stream";

function clean() {
	return del("./target");
}

function transpileJs() {
	return src("./src/**/*.js")
		.pipe(babel())
		.pipe(dest("./target"));
}

function bundleJs() {
	return src("./target/entrypoint.js")
		.pipe(webpack({
			output: {
				filename: "bundle.js",
			},
		}))
		.pipe(dest("./target/browser"));
}

export { clean };
export default series(clean, transpileJs, bundleJs);