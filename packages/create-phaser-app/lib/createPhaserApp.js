module.exports = function createPhaserApp() {
  console.log('hehe creating app...');
}


// log(chalk`Running {green ${package.name} ${package.version}}`);
// log();

// if (!projectName) {
//   log(chalk`{red You have to specify project name}`);
//   log(chalk`Example usage: {cyan create-phaser-app ping-pong}`);
//   log();
//   process.exit(1);
// }

// log();
// log(chalk`Welcome to Phaser app creator.`);

// const QUESTIONS = [
//   {
//     name: 'language',
//     type: 'list',
//     message: 'What language are you going to use?',
//     choices: ['JavaScript', 'Typescript', 'CoffeeScript']
//   }
// ];

// inquirer.prompt(QUESTIONS)
//   .then(answers => {
//     const { language } = answers;
//     const newProjectPath = `${currDir}/${projectName}`;
//     const templatePath = `${__dirname}/templates/${language.toLowerCase()}`;

//     log();
//     log(chalk`Creating a new Phaser app in {green ${newProjectPath} } with {cyan ${language}} settings.`);

//     fs.mkdirSync(newProjectPath);
//     createDirectoryContents(templatePath, newProjectPath);
//   });

// function createDirectoryContents(templatePath, newProjectPath) {
//   const filesToCreate = fs.readdirSync(templatePath);

//   filesToCreate.forEach(file => {
//     const origFilePath = `${templatePath}/${file}`;
//     const stats = fs.statSync(origFilePath);

//     if (stats.isFile()) {
//       const contents = fs.readFileSync(origFilePath, 'utf8');

//       const writePath = `${newProjectPath}/${file}`;
//       fs.writeFileSync(writePath, contents, 'utf8');
//     } else if (stats.isDirectory()) {
//       fs.mkdirSync(`${currDir}/${newProjectPath}/${file}`);

//       createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
//     }
//   });
// }