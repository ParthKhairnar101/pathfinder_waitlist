// @ts-ignore
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
    NEXT_PUBLIC_GOOGLE_FORM_URL: z.string(),
    NEXT_PUBLIC_GOOGLE_FORM_EMAIL: z.string(),
    NEXT_PUBLIC_GOOGLE_FORM_FUTURE_USE: z.string(),
    NEXT_PUBLIC_GOOGLE_FORM_BETA_TESTER: z.string(),
    NEXT_PUBLIC_GOOGLE_FORM_CONTACT_INFO: z.string().optional(),
    NEXT_PUBLIC_GOOGLE_FORM_SUGGESTIONS: z.string().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_GOOGLE_FORM_URL: process.env.NEXT_PUBLIC_GOOGLE_FORM_URL,
    NEXT_PUBLIC_GOOGLE_FORM_EMAIL: process.env.NEXT_PUBLIC_GOOGLE_FORM_EMAIL,
    NEXT_PUBLIC_GOOGLE_FORM_FUTURE_USE: process.env.NEXT_PUBLIC_GOOGLE_FORM_FUTURE_USE,
    NEXT_PUBLIC_GOOGLE_FORM_BETA_TESTER: process.env.NEXT_PUBLIC_GOOGLE_FORM_BETA_TESTER,
    NEXT_PUBLIC_GOOGLE_FORM_CONTACT_INFO: process.env.NEXT_PUBLIC_GOOGLE_FORM_CONTACT_INFO,
    NEXT_PUBLIC_GOOGLE_FORM_SUGGESTIONS: process.env.NEXT_PUBLIC_GOOGLE_FORM_SUGGESTIONS,
  },
});
