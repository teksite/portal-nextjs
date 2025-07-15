import fs from 'fs';
import path from 'path';

export function env(key :string , defaultValue :string|null =null ):string|null{
    return process.env[key] ?? defaultValue;
}


export function logError(message: string):void {
    const logDir = path.join(process.cwd(), 'logs');
    const logFile = path.join(logDir, 'error.log');

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ERROR: ${message}\n`;

    fs.appendFileSync(logFile, logMessage);
}