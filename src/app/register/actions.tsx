'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
    const supabase = createClient()

    // Submit email, password and display name to auth table
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }
    
    // console.log('Attempting to sign up with:', { email, password });

    // Sign up user
    const { error } = await supabase.auth.signUp(data)

    if (error) {
        console.error('Sign-up error:', error.message);
        console.error('Data sent:', data);
        redirect('/error');
    }

    console.log('Sign-up successful:', data);
    revalidatePath('/');
    redirect('/account');
}