import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "turso",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations", // <--- UPDATE THIS TO YOUR ACTUAL FOLDER
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
