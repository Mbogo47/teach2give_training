import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["t7q938-5173.csb.app"], // Add the host here
  },
});
