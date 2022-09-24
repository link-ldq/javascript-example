const fs = require('fs');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const { tansformFormAst } = require('babel-core');

// 转换成 AST
module.exports = {
  getAST: (path) => {
    const source = fs.readFileSync(path, 'utf-8');
    return babylon.parse(source, {
      sourceType: 'module'
    })
  },
  getDependencies: (ast) => {
    const dependencies = [];
    traverse(ast, {
      ImportDeclaration: ({ node }) => {
        dependencies.push(node.source.value);
      }
    })
    return dependencies;
  },
  transform: (ast) => {
    const code = tansformFormAst(ast, null, {
      presets:['env']
    })
    return code
  }
}