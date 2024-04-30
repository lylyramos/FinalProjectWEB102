import { createClient } from '@supabase/supabase-js'

const URL = 'https://elwdtkomzstsgcqnizyc.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsd2R0a29tenN0c2djcW5penljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4OTYzODQsImV4cCI6MjAyODQ3MjM4NH0.sKKygawoHl2JeKdO2yIaFGhAR5jw2r4JyoJE3ZP8VNo'

export const supabase = createClient(URL, API_KEY)