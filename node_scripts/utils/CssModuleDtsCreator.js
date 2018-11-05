var glob = require('glob');
var DtsCreator = require('typed-css-modules');
var watch = require('watch');

function CssModuleDtsCreator(globs, ignorePaths) {
  this.globs = globs;
  this.ignorePaths = ignorePaths;
}

CssModuleDtsCreator.prototype.create = function(file) {
    if (!file.endsWith('.css') && !file.endsWith('.less') && !file.endsWith('.scss'))
        return;
    for(var i = 0; i < this.ignorePaths.length; ++i){
        if (file.includes(this.ignorePaths[i]))
            return;
    }

    var creator = new DtsCreator({ camelCase: true });
    creator.create(file).then(content => {
        //console.log(content.tokens);
        //console.log(content.formatted);
        content.writeFile();
    });
    
    console.log('Creating CSS Module TypeScript Definition ' + file + '.d.ts');
}

CssModuleDtsCreator.prototype.createAll = function() {
    this.globs.forEach((globPattern) => {
        glob(globPattern, {}, (err, files) => {
            files.forEach((file) => {
                this.create(file);
            })
        });
    });
}

CssModuleDtsCreator.prototype.watch = function(rootPath) {
    watch.watchTree(rootPath, {}, (file, curr, prev) => {
        if (typeof file == "object" && prev === null && curr === null) {
            // Finished walking tree
        } else if (prev === null) {
            // File created
            this.create(file);
        } else if (curr.nlink === 0) {
            // File removed
        } else {
            // File changed
            this.create(file);
        }
    });
}

module.exports = CssModuleDtsCreator;
