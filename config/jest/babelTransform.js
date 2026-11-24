'use strict';

const babelJest = require('babel-jest').default;

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false;
  }

  try {
    require.resolve('react/jsx-runtime');
    return true;
  } catch (e) {
    return false;
  }
})();

module.exports = babelJest.createTransformer({
  plugins: [({ template }) => ({
    visitor: {
      ImportDeclaration(path) {
        const request = path.node.source.value;
        if (!request.endsWith('.tsx?source')) return;
        // Read the same file Webpack exposes as asset/source, even on a warm Jest run.
        path.replaceWith(template.statement.ast(
          `const ${path.node.specifiers[0].local.name} = require('fs').readFileSync(require.resolve(${JSON.stringify(request.slice(0, -7))}), 'utf8');`
        ));
      },
    },
  })],
  presets: [
    [
      require.resolve('babel-preset-react-app'),
      {
        runtime: hasJsxRuntime ? 'automatic' : 'classic',
      },
    ],
  ],
  babelrc: false,
  configFile: false,
});
