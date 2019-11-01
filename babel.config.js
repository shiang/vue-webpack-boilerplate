module.exports = api => {
  const isTest = api.env('test')
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: ['last 2 versions', 'not dead', 'not < 2%', 'not ie 11'],
          modules: isTest ? 'commonjs' : false
        }
      ]
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      isTest ? 'dynamic-import-node' : '@babel/plugin-syntax-dynamic-import'
    ]
  }
}
