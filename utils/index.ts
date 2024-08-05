"use server";

import { createClient } from "./supabase/server";

export async function readUserSession() {

  const supabase = createClient();

  return supabase.auth.getSession();
}
