const { spawn } = require('node:child_process');

const spawnAndPrintOutput = (process, args) => {
  const child = spawn(process, args);

  child.stdout.on('data', (data) => {
    console.log(`(${process}): stdout: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`(${process}): stderr: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`(${process}): child process exited with code ${code}`);
  });

  return child;
}

spawnAndPrintOutput('node', ['printer.js']);
spawnAndPrintOutput('xcrun', ['simctl', 'boot', '82170374-AAAC-4E77-A1FF-6C7675EC9E05']);

