module.exports = {
    env: {
        browser: true,
        node: true,
        jasmine: true
    },
    plugins: [],
    extends: ['airbnb'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            experimentalDecorators: true,
            jsx: true
        }
    },
    rules: {
        'arrow-parens': [0],
        'class-methods-use-this': [0, { exceptMethods: ['render'] }],
        'comma-dangle': [2, 'never'],
        'generator-star-spacing': 'off',
        indent: [2, 4],
        'import/no-extraneous-dependencies': [0],
        'import/no-unresolved': [0],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.vue', '.es6']
            }
        },
        'linebreak-style': [2, 'unix'],
        'no-bitwise': [1, { allow: ['~', '>>>', '>>', '<<', '|', '&'], int32Hint: true }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-underscore-dangle': [0],
        quotes: [2, 'single'],
        semi: [2, 'always'],
        'space-before-function-paren': 'off',
        'react/prefer-stateless-function': 'off',
        'react/no-unescaped-entities': 0,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx']
            }
        ],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-closing-bracket-location': 0,
        'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }]
    },
    globals: {
        document: false,
        window: true,
        Image: true
    }
};
