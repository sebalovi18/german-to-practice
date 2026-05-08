import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  skipFormatting,

  {
    rules: {
      'tailwindcss/no-custom-classname': 'off',
      'no-debugger': 'warn',
      'no-console': 'off',
      'no-else-return': 'error',
      'no-param-reassign': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'below',
        multiline: 'below'
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }],
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/v-on-event-hyphenation': ['error', 'always', {
        autofix: true
      }],
      'vue/comma-dangle': ['error', 'never'],
      // '@typescript-eslint/no-unused-vars': 'off',
      // '@typescript-eslint/array-type': ['error', {
      //   default: 'generic',
      //   readonly: 'generic'
      // }],
      // '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // '@typescript-eslint/consistent-type-imports': ['error', {
      //   prefer: 'type-imports',
      //   disallowTypeAnnotations: false
      // }],
      // '@typescript-eslint/dot-notation': ['error'],
      // '@typescript-eslint/naming-convention': ['error', {
      //   format: ['camelCase'],
      //   selector: 'variable'
      // },
      // {
      //   selector: 'typeLike',
      //   format: ['PascalCase']
      // }
      // ],
      // '@typescript-eslint/no-confusing-void-expression': ['error'],
      // '@typescript-eslint/no-floating-promises': ['error'],
      // '@typescript-eslint/no-misused-promises': ['error'],
      // '@typescript-eslint/no-shadow': ['error'],
      // '@typescript-eslint/no-this-alias': ['error'],
      // '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
      // '@typescript-eslint/no-unnecessary-condition': ['off'],
      // '@typescript-eslint/prefer-includes': ['error'],
      // '@typescript-eslint/prefer-nullish-coalescing': ['warn'],
      // '@typescript-eslint/prefer-optional-chain': ['error'],
      // '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
      // '@typescript-eslint/promise-function-async': ['error'],
      // '@typescript-eslint/require-await': ['error'],
      // '@typescript-eslint/return-await': ['error'],
      '@typescript-eslint/unified-signatures': 'off',
      // '@typescript-eslint/no-dynamic-delete': 'off',
      // '@typescript-eslint/no-invalid-void-type': 'off',
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/brace-style': 'off',
      '@stylistic/indent': ['error', 2],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/key-spacing': ['error', {
        'beforeColon': false,
        'afterColon': true
      }],
      '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: false
      }],
      '@stylistic/object-curly-newline': ['error', {
        ObjectExpression: {
          minProperties: 1,
          multiline: true
        },
        ObjectPattern: {
          minProperties: 1,
          multiline: true
        },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true
        },
        TSTypeLiteral: {
          minProperties: 1,
          multiline: true
        },
        TSInterfaceBody: {
          minProperties: 1,
          multiline: true
        }
      }],
      'vue/html-indent': ['error', 2],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      // 'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/html-comment-content-spacing': ['error', 'always'],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'always'
      }],
      'vue/html-closing-bracket-spacing': ['error', {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }],
      'vue/no-unused-refs': 'error'
    }
  }
)
