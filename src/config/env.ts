import dotenv from 'dotenv';
dotenv.config({quiet:true});

function read(key: string):string | undefined{
    return process.env[key]?.trim()|| undefined
}
export function requireEnv(key: string): string {
    const value = read(key);
    if (!value) {
        throw new Error(`Missing required env var ${key}. Set it in .env (see .env.example)`);
    }
    return value;
}

/** Optional value with a fallback. */
export function envOr(key: string, fallback: string): string {
    return read(key) ?? fallback;
}

/** Asserts keys exist without returning them; reports all missing keys at once. */
export function assertEnv(...keys: string[]): void {
    const missing = keys.filter((key) => !read(key));
    if (missing.length > 0) {
        throw new Error(`Missing required env var(s) ${missing.join(', ')}. Set them in .env (see .env.example)`);
    }
}