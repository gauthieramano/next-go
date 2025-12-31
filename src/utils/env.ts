import * as z from "zod";

const ENV_SCHEMA = z.object({
  SITE_URL: z.url(),
  SITE_NAME: z.string(),

  // NextAuth & Google/GitHub Client

  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.url(),

  GOOGLE_CLIENT_ID: z.string().regex(z.regexes.domain),
  GOOGLE_CLIENT_SECRET: z.string(),

  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),

  // Sanity

  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string(),
  NEXT_PUBLIC_SANITY_PROJECT_TITLE: z.string(),
  NEXT_PUBLIC_SANITY_HOOK_SECRET: z.string(),
  NEXT_PUBLIC_SANITY_API_TOKEN: z.string(),

  // Algolia

  NEXT_PUBLIC_ALGOLIA_PROJECT_ID: z.string(),
  NEXT_PUBLIC_ALGOLIA_API_KEY: z.string(),
  NEXT_PUBLIC_ALGOLIA_INDEX: z.string(),

  // Resend

  EMAIL_FROM: z.union([
    z.email(),
    z.templateLiteral([z.string(), "<", z.email(), ">"]),
  ]),
  RESEND_API_KEY: z.string(),

  // Neon

  DATABASE_URL: z.url(),
  DATABASE_URL_UNPOOLED: z.url(),

  PGHOST: z.string().regex(z.regexes.domain),
  PGHOST_UNPOOLED: z.string().regex(z.regexes.domain),
  PGUSER: z.string(),
  PGDATABASE: z.string(),
  PGPASSWORD: z.string(),

  POSTGRES_URL: z.url(),
  POSTGRES_URL_NON_POOLING: z.url(),
  POSTGRES_USER: z.string(),
  POSTGRES_HOST: z.string().regex(z.regexes.domain),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DATABASE: z.string(),
  POSTGRES_URL_NO_SSL: z.url(),
  POSTGRES_PRISMA_URL: z.url(),

  NEXT_PUBLIC_STACK_PROJECT_ID: z.uuid(),
  NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY: z.string(),
  STACK_SECRET_SERVER_KEY: z.string(),
});

export const ENV = ENV_SCHEMA.parse(process.env);
