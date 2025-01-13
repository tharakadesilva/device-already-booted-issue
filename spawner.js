const { spawn } = require('node:child_process');

function spawnAndPrintOutput(process, args) {
  const child = spawn(process, args);

  child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

spawnAndPrintOutput('node', ['printer.js']);

spawnAndPrintOutput('xcrun', ['simctl', 'boot', '82170374-AAAC-4E77-A1FF-6C7675EC9E05']);
