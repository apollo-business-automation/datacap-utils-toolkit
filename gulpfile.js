const gulp = require(`gulp`);
const rimraf = require(`rimraf`);
const sequenceStream = require(`sequence-stream`);
const generateCodeAssistance = require(`code-assistance-generator`);

const config = {
  destination: `dist`,
};

gulp.task(`clean`, (cb) => {
  rimraf(config.destination, cb);
});

gulp.task(`build`, [`clean`], () => {
  return sequenceStream(generateCodeAssistance(`./jsdoc-conf.json`, config.destination));
});
