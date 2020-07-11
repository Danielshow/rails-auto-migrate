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

  // Add event listeners.
  watcher
    .on('add', path => utils.fileAdded(path))

  let disposable = vscode.commands.registerCommand(
    "rails-migrate.helloWorld",
    function () {
      console.log(projectWorkspace, editor)
      vscode.window.showInformationMessage("Hello World from rails-migrate!");
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(watcher);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
