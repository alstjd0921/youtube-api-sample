module.exports = {
    "env": {
        "browser": true,
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
        "comma-dangle": ["error", "never"],
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}]
    }
};
