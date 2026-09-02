import { type Level, type Transport } from './@types/logger.js';
export interface LoggerOptions {
    level?: Level;
    transports?: Transport[];
}
export declare class Logger {
    private level;
    private transports;
    constructor(options?: LoggerOptions);
    child(): Logger;
    private emit;
    trace(message: string): void;
    debug(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    fatal(message: string): void;
}
//# sourceMappingURL=index.d.ts.map