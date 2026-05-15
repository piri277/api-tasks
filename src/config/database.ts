import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = process.env.SUPABASE_URL!;
const supabaseAnon = process.env.SUPABASE_ANON_KEY!;
const supabaseSvc  = process.env.SUPABASE_SERVICE_KEY!;

if (!supabaseUrl || !supabaseAnon) {
  throw new Error('❌ Variables de entorno de Supabase no configuradas');
}

// Cliente público
export const supabase = createClient(supabaseUrl, supabaseAnon, {
  auth: {
    persistSession: false // Evita errores de almacenamiento en servidor
  }
});

// Cliente admin
export const supabaseAdmin = createClient(supabaseUrl, supabaseSvc, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});