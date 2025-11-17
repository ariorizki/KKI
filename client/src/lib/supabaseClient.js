// ⚠️ TANPA SPASI, TANPA TYPO
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Opsional: tambahkan pengecekan
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase env vars missing!');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };