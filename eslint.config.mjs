import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import storybook from "eslint-plugin-storybook";
import reactHooks from "eslint-plugin-react-hooks"; // ← import the plugin
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	// Next.js core and TypeScript rules
	...compat.extends("next/core-web-vitals", "next/typescript"),

	// Explicitly turn on React Hooks rules
	reactHooks.configs["recommended-latest"],

	// Adjust react-hooks rules if needed
	{
		plugins: { "react-hooks": reactHooks },
		rules: {
			...reactHooks.configs.recommended.rules,
		},
	},

	// Disable explicit any in TS files
	{
		files: ["**/*.ts", "**/*.tsx"],
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},

	// Storybook recommended rules
	...storybook.configs["flat/recommended"],

	// Simple import sort for all JS/TS files
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		plugins: { "simple-import-sort": simpleImportSort },
		rules: {
			// Sort imports into defined groups
			"simple-import-sort/imports": [
				"error",
				{
					groups: [
						["^react$", "^next", "^[a-z]", "^@"],
						["^@/"],
						["^~"],
						[
							"^\\.\\.(?!/?$)",
							"^\\.\\./?$/",
							"^\\./(?=.*/)(?!/?$)",
							"^\\.(?!/?$)",
							"^\\./?$/",
						],
						["^.+\\.(s?(css|less))$"],
						["^\\u0000"],
					],
				},
			],
			// Sort exports alphabetically
			"simple-import-sort/exports": "error",
			// allow using `Function`
			"@typescript-eslint/ban-types": [
				"error",
				{
					types: {
						Function: false,
					},
					extendDefaults: true,
				},
			],
		},
	},
];

export default eslintConfig;
