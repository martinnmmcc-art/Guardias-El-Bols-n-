import { createClient } from '@supabase/supabase-js'

// Estas dos claves son públicas por diseño: quedan visibles en el código del
// navegador de todas formas (es una app 100% cliente). Lo que protege los
// datos es la Row Level Security configurada en las tablas de Supabase, no
// que esta clave esté oculta.
const SUPABASE_URL = 'https://rseobbqgtiekqtxoowxw.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_qQsPbysvJ0KQ_HVHou2B2g_MxXop8Wc'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
