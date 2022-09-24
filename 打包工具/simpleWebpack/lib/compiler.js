const { getAST, getDependencies, transform } = require('./parser');
const path = require('path')
module.export = class Compiler {
  constructor(options) {
    const { entry, output } = options;
    
    this.entry = entry
    this.output = output
  }
  run() {
    const entryModule = this.buildModule(this.entry, true);
    console.log(entryModule)
  }
  buildModule(filename,isENtry) {
    let ast;
    if (isENtry) {
      ast = getAST(filename)
    } else {
      const absolutePath = path.join(process.cwd(), './src', filename);
      ast = getAST(absolutePath)
    }
    return {
      filename,
      dependencies: getDependencies(ast),
      source: transform(ast)
    }
  }
  emitFiles() {
    
  }
}
