module.exports = {
	'extends': 'react-app',
	'plugins': [
		'react-hooks'
	],
    'parser': '@typescript-eslint/parser',
    'plugins': [
      '@typescript-eslint'
    ],
    'parserOptions': {
      'sourceType': 'module',
      'ecmaVersion': 2018,
      'useJSXTextNode': true,
      'ecmaFeatures': {
        'jsx': true
      }
    },
	'rules': {
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'arrow-parens': 1,
		'arrow-spacing': 1,
		'key-spacing': [
			1,
			{
				'mode': 'strict'
			}
		],
		'keyword-spacing': [
			1,
			{}
		],
		'no-multi-spaces': 1,
		'no-irregular-whitespace': 1,
		'no-mixed-spaces-and-tabs': 1,
		'jsx-quotes': [
			'error',
			'prefer-single'
		],
		'react/jsx-closing-bracket-location': 1,
		'react/jsx-equals-spacing': 1,
		'react/jsx-no-undef': 1,
		'react/jsx-indent': [
			1,
			'tab'
		],
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		'space-in-parens': [
			'error',
			'never'
		],
		'indent': [
			'error',
			'tab'
		],
		'eol-last': [
			1,
			'always'
		],
		'no-multiple-empty-lines': 'error',
		'react/jsx-indent-props': [
			1,
			'tab'
		],
		'react/jsx-tag-spacing': [
			1,
			{
				'beforeSelfClosing': 'always'
			}
		],
		'quotes': [
			1,
			'single',
			{
				'allowTemplateLiterals': true
			}
		],
		'object-curly-spacing': [
			'error',
			'never'
		],
		'no-duplicate-imports': [
			'error'
		],
		'space-infix-ops': [
			'error'
		]
	}

}
