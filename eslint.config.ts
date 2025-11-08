import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import pluginRenorari from "./eslint/index.js";

export default defineConfig([
    {
        "files": ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
        "plugins": {
            js
        },
        "extends": ["js/recommended"],
        "languageOptions": {
            "globals": globals.browser
        }
    },
    tseslint.configs.recommended,
    pluginVue.configs["flat/essential"],
    {
        "files": ["**/*.vue", "**/*.ts", "**/*.mts", "**/*.cts", "**/*.js", "**/*.mjs", "**/*.cjs", "**/*.json"],
        "languageOptions": {
            "parserOptions": {
                "parser": tseslint.parser
            }
        }
    },
    {
        "plugins": {
            "@renorari": pluginRenorari
        },
        "rules": {
            "@/linebreak-style": ["error", "unix"],
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    "argsIgnorePattern": "^_",
                    "caughtErrorsIgnorePattern": "^_",
                    "destructuredArrayIgnorePattern": "^_",
                    "varsIgnorePattern": "^_"
                }
            ],
            "@/indent": ["error", 4],
            "@/quotes": ["error", "double"],
            "@/semi": ["error", "always"],
            "@/comma-dangle": ["error", "never"],
            "@renorari/no-unquoted-keys": "error"
        }
    }
]);
