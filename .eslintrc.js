module.exports = {
    'env': {
        'browser': true,
        'meteor': true,
        'node': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': ['react'],
    'rules': {
        'indent': [2, 4],
        'linebreak-style': [0, 'unix'],
        'quotes': [2, 'single'],
        'semi': [0, 'never'],
        'brace-style': [2, '1tbs'],
        'array-bracket-spacing': [2, 'never'],
        'camelcase': [2, {'properties': 'always'}],
        'no-console': [0],
        'keyword-spacing': [2],
        'eol-last': [0],
        'no-trailing-spaces': [2],
        'extends': ['airbnb']
    },
    'globals': {
        // Collections
        'Persons': true,
        'Modules': true,
        
        // More stuff
        

        // Packages
        'lodash': true,
        'i18n': true,
        'moment': true,
        'Messenger': true
    }
}