export function env(key :string , defaultValue :string|null =null ):string|null{
    return process.env[key] ?? defaultValue;
}


export function normalizeText(text?: string):string {
    if (!text) return '';
    return text
        .replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove zero-width chars
        .replace(/[آأإ]/g, 'ا')
        .replace(/ي/g, 'ی')
        .replace(/ك/g, 'ک');
}
