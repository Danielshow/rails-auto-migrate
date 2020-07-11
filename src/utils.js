const vscode = require('vscode');

function fileAdded(path){
    vscode.window.showInformationMessage("A new migration has been added! Run migration");
}

module.exports = {
    fileAdded
}