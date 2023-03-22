import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import * as path from "path";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
//   },
// });
