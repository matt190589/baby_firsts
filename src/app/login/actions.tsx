'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

    // Retrieve and validate email and password
  const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
if (!email || !password) {
    console.error('Email and password are required.');
    redirect('/error');
    return;
}
    
    console.log('Attempting to sign up with:', { email, password });

  // Sign up user
  const { error, data } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error('Sign-up error:', error.message);
    redirect('/error');
    return;
  }

  console.log('Sign-up successful:', data);
  revalidatePath('/');
  redirect('/account');
}