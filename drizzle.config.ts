import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "turso",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations", // Matches your find command perfectly
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
