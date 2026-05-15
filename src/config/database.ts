import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = process.env.SUPABASE_URL!;
const supabaseAnon = process.env.SUPABASE_ANON_KEY!;
const supabaseSvc  = process.env.SUPABASE_SERVICE_KEY!;

if (!supabaseUrl || !supabaseAnon) {
  throw new Error('❌ Variables de entorno de Supabase no configuradas');
}

export const supabase = createClient(supabaseUrl, supabaseAnon);

export const supabaseAdmin = createClient(supabaseUrl, supabaseSvc, {
  auth: { autoRefreshToken: false, persistSession: false }
});