import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
                Cartfile: path.resolve(__dirname, "Cartfile.html")
            },
        },
    },
});
