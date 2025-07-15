export function env(key :string , defaultValue :string|null =null ):string|null{
    return process.env[key] ?? defaultValue;
}