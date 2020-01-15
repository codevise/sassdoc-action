const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const args = [];

    const input = core.getInput('input');
    const output = core.getInput('output');

    args.push(input)
    args.push('--dest')
    args.push(output)

    let theme = core.getInput('theme');
    const themePackage = core.getInput('themePackage') || theme;

    if (theme) {
      await exec.exec('npm', ['install', themePackage], {cwd: __dirname});

      args.push('--theme')
      args.push(theme)
    }

    const script = `${__dirname}/node_modules/sassdoc/bin/sassdoc`;
    await exec.exec(script, args);
  }
  catch(error) {
    core.setFailed(error.message);
  }
}

run();
