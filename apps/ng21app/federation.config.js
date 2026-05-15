const { withNativeFederation, shareAll } = require("@angular-architects/native-federation/config");

const rootNFLaunch = process.env.NF_SCOPE === "root";
const componentPath = rootNFLaunch ? "./apps/ng21app/src/app/app.ts" : "./src/app/app.ts";
console.log(`Launching with component path: ${componentPath}`);

module.exports = withNativeFederation({
  name: "angular-test-proj",

  exposes: {
    "./Component": componentPath,
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true,
  },
});
