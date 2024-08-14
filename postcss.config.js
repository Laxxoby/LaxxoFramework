console.log('Running postcss.config.js');

const isMinified = process.env.MINIFY === 'true';

module.exports = {
  plugins: [
    require('postcss-import'),
    isMinified
      ? require('cssnano')({
          preset: ['default', {
            discardComments: { removeAll: true },
          }],
        })
      : null,
  ].filter(Boolean),
};
