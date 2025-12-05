const StyleDictionary = require('style-dictionary');

StyleDictionary.extend({
  source: ['tokens/raw/tokens.json'],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/css'],
      buildPath: 'tokens/css/',
      files: [{ destination: 'variables.css', format: 'css/variables' }]
    }
  }
}).buildAllPlatforms();