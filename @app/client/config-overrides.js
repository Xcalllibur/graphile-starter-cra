const { override, fixBabelImports, addLessLoader } = require("customize-cra");

const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");
// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, "assets/antd-custom.less"),
    "utf8"
  )
);

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  }),
);
