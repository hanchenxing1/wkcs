import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
			return {
				...config,
				// Only enable Chrome.
				// Electron (the default) has issues injecting window.ethereum before pageload, so it is not viable.
				browsers: config.browsers.filter(
					({ name }) => name === 'chrome',
				),
			};
		},
		baseUrl: 'http://localhost:3000',
		specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
	},
});
