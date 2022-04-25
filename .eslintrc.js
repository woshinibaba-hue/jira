module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
      }
    ],
    // Missing file extension "ts" for "./reportWebVitals"eslintimport/extensions
    // 缺少文件扩展名"ts"
    // 解决上述报错
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ]
  },
  // Unable to resolve path to module './reportWebVitals'.eslintimport/no-unresolved
  // 无法解析模块....
  // 解决上述报错
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
