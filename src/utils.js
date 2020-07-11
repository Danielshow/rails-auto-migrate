const vscode = require("vscode");
const cp = require("child_process");
const fs = require("fs");

function fileAdded(path) {
  vscode.window.showInformationMessage(
    "A new migration has been added! Run migration"
  );
}

function runMigration(workspace) {
  cp.exec(
    `cd ${workspace} | bundle exec rake db migrate`,
    (err, stdout, stderr) => {
      if (err) {
        console.log(stderr);
        vscode.window.showErrorMessage(stdout);
        return;
      }
      vscode.window.showInformationMessage("Migration run successfully!");
    }
  );
}

function openLatestMigration(workspace) {
  fs.readdir(`${workspace}/db/migrate`, (err, files) => {
    if (err) {
      console.log("Unable to read workspace files");
      return;
    }
    if (files.length && files[files.length - 1]){
        const lastFile = files[files.length - 1];
        const path = vscode.Uri.file(`${workspace}/db/migrate/${lastFile}`);
        vscode.workspace.openTextDocument(path).then(doc => {
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
