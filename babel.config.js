module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./js'],
          alias: {
            '@theme': './js/common/theme',
            '@state': './js/common/stateManagement',
            '@pages': './js/pages',
            '@components': './js/components',
          },
        },
      ],
    ],
  };
};
