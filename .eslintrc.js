module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "comma-dangle": ["error", "never"],
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
    }
};