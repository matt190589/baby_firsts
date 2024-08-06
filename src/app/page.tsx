import Welcome from "./components/Welcome";
import { createClient } from '@/utils/supabase/client'
import { redirect } from 'next/navigation'

export default async function Home() {

    const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (user) {
    console.log('fired')
    redirect('/account');
  } else {
    console.log('No user data available')
    redirect('/login')
  }


  return (
    <div className="min-h-screen">
      <Welcome />
  </div>
  );
}
