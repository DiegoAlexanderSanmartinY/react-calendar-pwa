module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{json,ico,html,png,txt,css,js}"],
  swDest: "build/sw.js",
  swSrc: "src/sw-tempplate.js", //generate sw no funciona con esta propiedad
  //   ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
