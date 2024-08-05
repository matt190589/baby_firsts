import React, { useMemo } from 'react';
import { SessionContextProvider } from './SessionContext'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SupabaseClient, Session } from '@supabase/supabase-js';

interface Props {
  children: React.ReactNode;
  initialSession: Session | null;
}

export default function SessionProvider({ children, initialSession }: Props) {
  const supabaseClient = useMemo(() => createBrowserSupabaseClient(), []);

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={initialSession}>
      {children}
    </SessionContextProvider>
  );
}