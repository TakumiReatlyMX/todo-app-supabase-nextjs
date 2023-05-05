// This code creates a client for the Supabase API using the URL and API key
// from the .env file. The client is then exported so that it can be used
// throughout the application.
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string
);
