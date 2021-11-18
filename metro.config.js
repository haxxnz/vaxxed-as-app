module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true
      }
    })
  },
  resolver: {
    extraNodeModules: {
      stream: require.resolve("stream-browserify")
    }
  }
};
