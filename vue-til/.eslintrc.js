module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 뷰 CLI 설치 했을떄  eslint와 prettier도 같이 설치.
    // 다만 eslint설정과 prettier 설정 파일이 충돌 날수도 있음.(eslint설정 파일이 우선되게 .eslintrc에 prettier설정해주기)
    //'prettier/prettier': ["off, warning, error" ] // 프리티어 eslint의 로그 레벨 종류정함. 두번째 인자로 객체가 들어가고 그 안에는 프리티어의 속성이 들어가게됨.
    // 만약 정해진 속성에 맞지 않다면 터미널에서 에러가 보여짐.
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: "all",
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: "avoid",
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
