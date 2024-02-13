import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://abofpxzntbukyzqpmvli.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFib2ZweHpudGJ1a3l6cXBtdmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3Njk2NDQsImV4cCI6MjAyMzM0NTY0NH0.pK4tU-_K-37l2WmpdoPfefFTg6u4Q1v2cDqiE5JRt04";
export const supabase = createClient(supabaseUrl, supabaseKey);
