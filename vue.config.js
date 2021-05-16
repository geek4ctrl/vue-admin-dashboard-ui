module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "./src/global-styles/color.scss";
          @import "./src/global-styles/typography.scss";
        `
      }
    }
  }
}
