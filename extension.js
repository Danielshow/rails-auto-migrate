const vscode = require("vscode");
const chokidar = require('chokidar');
const utils = require('./src/utils');

const editor = vscode.window.activeTextEditor;
const projectWorkspace = vscode.workspace.workspaceFolders[0].uri.toString().split(':')[1];

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const watcher = chokidar.watch(`${projectWorkspace}/db/migrate/`, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true
  });

  watcher
    .on('add', path => utils.fileAdded(path))

  let railsMigration = vscode.commands.registerCommand(
    "rails-migrate.runMigration",
    function () {
      utils.runMigration(projectWorkspace);
    }
  );


  let openMigration = vscode.commands.registerCommand(
    "rails-migrate.openLatestMigration",
    function () {
      console.log('goss')
      utils.openLatestMigration(projectWorkspace);
    }
  );

  context.subscriptions.push(railsMigration);
  context.subscriptions.push(openMigration);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
