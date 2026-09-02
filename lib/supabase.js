import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zlpqsthpxgzdmydretxn.supabase.co';
const supabaseKey = 'sb_publishable_oRl2vQS6gYXjqww7NLFvdg_8FyPPUJT';

export const supabase = createClient(supabaseUrl, supabaseKey);
