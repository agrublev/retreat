module.exports = {
	globals: {
		importScripts: true
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	"ecmaFeatures": {
		"jsx": true
	},
	rules: {
		"no-mixed-operators": ["off"],
		"no-console": ["off"],
		"react/jsx-indent": ["off"],
		"react/destructuring-assignment": ["off"],
		"import/no-named-as-default-member": ["off"],
		"import/named": ["off"],
		"import/order": ["off"],
		"import/no-extraneous-dependencies": ["off"],
		"import/no-named-as-default": ["off"],
		"react/jsx-indent-props": ["off"],
		"flowtype/require-return-type": ["off"],
		camelcase: [
			1,
			{
				properties: "always"
			}
		],
		"react/jsx-one-expression-per-line": [
			"warn",
			{
				allow: "none"
			}
		],
		"react/prop-types": "off",
		complexity: ["warn", 4],
		"max-nested-callbacks": ["warn", 5],
		"no-unused-vars": "warn",
		"max-statements": [
			"warn",
			{
				max: 3
			}
		],
		"max-statements-per-line": [
			"warn",
			{
				max: 1
			}
		],
		"getter-return": "warn",
		"jsx-quotes": ["warn", "prefer-double"]
	},
	extends: ["prettier", "eslint:recommended"]
};
