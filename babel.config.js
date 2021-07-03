'use strict'
module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env", {
        "useBuiltIns": "usage",
        "corejs": 3.6,
        "targets": {
          "esmodules": true,
          "node": true
        }
      }
    ],
    ['@babel/preset-react', { targets: { node: 'current' } }]
  ];
  const plugins = [
    ['@babel/plugin-transform-modules-commonjs'],
    ['@babel/plugin-transform-destructuring'],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-export-default-from'],
    ['@babel/plugin-proposal-export-namespace-from'],
    ['@babel/plugin-proposal-object-rest-spread'],
    ['@babel/plugin-transform-template-literals'],
    ['@babel/plugin-transform-runtime'],
    ['@babel/plugin-transform-classes']
  ];

  return {
    presets,
    plugins
  }
}