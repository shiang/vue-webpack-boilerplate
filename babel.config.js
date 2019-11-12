module.exports = api => {
  const isTest = api.env('test')
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: ['last 2 versions', 'not dead', 'not < 2%', 'not ie 11'],
          modules: isTest ? 'commonjs' : false,
          useBuiltIns: 'entry',
          corejs: '3'
        }
      ]
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      isTest ? 'dynamic-import-node' : '@babel/plugin-syntax-dynamic-import'
    ]
  }
}
