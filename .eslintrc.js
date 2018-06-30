module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": ["react"],
    "rules": {
        "eqeqeq": ["error", "always"],
        "indent": ["error", "tab"],
        "semi": ["error", "never"],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error"
    }
};