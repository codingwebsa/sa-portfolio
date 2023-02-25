import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://yxmwuawpbaxmkxbqwwpg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4bXd1YXdwYmF4bWt4YnF3d3BnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NzMyNTk0MywiZXhwIjoxOTkyOTAxOTQzfQ.Ptmn9hEt054PJWbtW3fUHvruvWnTyIxNo9oVuDE0wBY"
);
