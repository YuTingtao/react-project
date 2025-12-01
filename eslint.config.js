import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    {
      rules: {
        // 缩进2个空格
        indent: ['error', 2, { SwitchCase: 1 }],
        // 结尾加分号
        semi: ['error', 'always'],
        // 字符串使用单引号
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        // 驼峰命名
        camelcase: 'error',
        // 一行最大160长度
        'max-len': ['error', { code: 120, tabWidth: 2 }],
        // 多行允许使用末尾逗号
        'comma-dangle': ['error', 'only-multiline'],
        // 逗号后面带一个空格
        'comma-spacing': ['error', { before: false, after: true }],
        // 逗号放置在当前行末尾
        'comma-style': ['error', 'last'],
        // 函数调用时括号前不带空格
        'func-call-spacing': ['error', 'never'],
        // 使用函数声明定义函数
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
        // 构造函数
        'new-cap': ['error', { capIsNew: false }],
        // 注释斜杠后面加空格
        'spaced-comment': ['error', 'always'],
        // 对象括号内带空格
        'object-curly-spacing': ['error', 'always'],
        // 最大2空行
        'no-multiple-empty-lines': ['error', { max: 2 }],
        // 禁用未声明的变量
        'no-undef': ['error', { typeof: true }],
        // 未使用变量
        'no-unused-vars': ['warn', { vars: 'all', args: 'none', varsIgnorePattern: '^_' }],
        // 禁止在对象上调用 Object.prototype 方法
        'no-prototype-builtins': 'error',
        // 圈复杂度
        complexity: ['error', { max: 12 }],
        // 文件的最大行数
        'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],
        // console
        'no-console': 'warn',
        // ts禁止使用 any
        '@typescript-eslint/no-explicit-any': 'warn',
        // ts禁止使用 require
        '@typescript-eslint/no-var-requires': 'warn',
        // ts未使用变量
        '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'none', varsIgnorePattern: '^_' }],
      }
    },
  },
])
