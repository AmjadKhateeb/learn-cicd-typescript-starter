import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "turso", // Use "dialect" for newer drizzle-kit versions
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
