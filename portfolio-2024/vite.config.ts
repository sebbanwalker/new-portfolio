import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@styles": path.resolve(__dirname, "src/styles"), // Adjust this to your actual styles directory
		},
	},
});
