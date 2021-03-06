module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@intlify/vue-i18n/recommended',
  ],
  plugins: ['import'],
  parser: 'vue-eslint-parser',
  parserOptions: { ecmaVersion: 2020 },
  ignorePatterns: ['node_modules/'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'padded-blocks': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    'keyword-spacing': ['error', {
      after: false,
      overrides: {
        finally: { after: true },
        return: { after: true },
        else: { after: true },
        do: { after: true },
        from: { after: true },
        import: { after: true },
        export: { after: true },
        try: { after: true },
        const: { after: true },
        let: { after: true },
        default: { after: true },
        case: { after: true },
      },
    }],
    'max-len': ['error', { code: 100, ignorePattern: '^\\s*<path' }],
    'no-param-reassign': [2, { props: false }],
    'object-curly-newline': ['error', {
      consistent: true,
      multiline: true,
    }],
    'no-extra-boolean-cast': 'error',
    'import/extensions': [
      'error',
      {
        ts: 'never',
        js: 'never',
        vue: 'always',
        json: 'always',
        png: 'always',
        jpg: 'always',
        mp3: 'always',
        mp4: 'always',
      },
    ],
    indent: ['error', 2, { SwitchCase: 0 }],
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/order-in-components': ['error', {
      'order': [
        'name',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'emits',
        ['props', 'propsData'],
        'setup',
      ],
    }],
    'vue/html-indent': ['error', 2, { baseIndent: 0 }],
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
    }],
    'vue/no-v-html': 'off',
    '@intlify/vue-i18n/no-v-html': 'off',
    '@intlify/vue-i18n/no-unused-keys': ['error', {
      src: './src',
      extensions: ['.js', '.vue'],
    }],
    '@intlify/vue-i18n/no-raw-text': 'error',
  },
  settings: {
    'vue-i18n': {
      localeDir: './src/translations/*.json',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.vue', '.json'],
      },
    },
  },
};
