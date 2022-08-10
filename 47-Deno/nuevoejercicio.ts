import { ensureDir } from 'https://deno.land/std@0.55.0/fs/ensure_dir.ts';

//Ensures that the directory exists. If the directory structure does not exist, it is created
await ensureDir('miFolder');
