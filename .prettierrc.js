module.exports = {
  arrowParens: "avoid",
  bracketSpacing: false,
  endOfLine: "auto",
  htmlWhitespaceSensitivity: "css",
  // jsxBracketSameLine: false,
  // jsxSingleQuote: true,
  printWidth: 100,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  parser: "",
  filepath: "",
  rangeStart: 0,
  rangeEnd: Infinity,
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
};
