const vscode = require("vscode");
const fs = require("fs");
const rubySpawn = require('./ruby-spawn')

function fileAdded(path) {
  vscode.window.showInformationMessage(
    "A new migration has been added! Run migration"
  );
}

function runMigration(workspace) {
  const child = rubySpawn.rubySpawn('bundle', ['exec', 'rake db:migrate'], { cwd: workspace});
  child.stdout.on('data', (data) => {
    vscode.window.showInformationMessage("Migration run successfully!"); 
  });

  child.stderr.on('error', (err) => {
    vscode.window.showErrorMessage(err.message);
  })

  child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
                `code ${code} and signal ${signal}`);
  });

  child. on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

function openLatestMigration(workspace) {
  fs.readdir(`${workspace}/db/migrate`, (err, files) => {
    if (err) {
      vscode.window.showErrorMessage("Unable to read workspace files");
      return;
    }
    if (files.length && files[files.length - 1]) {
      const lastFile = files[files.length - 1];
      const path = vscode.Uri.file(`${workspace}/db/migrate/${lastFile}`);
      vscode.workspace.openTextDocument(path).then((doc) => {
        vscode.window.showTextDocument(doc);
      });
    }
  });
}

module.exports = {
  fileAdded,
  runMigration,
  openLatestMigration,
};
