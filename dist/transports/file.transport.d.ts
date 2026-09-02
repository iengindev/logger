import { BaseTransport } from './base.transport.js';
import type { Entry, Level } from '../@types/logger.js';
export declare class FileTransport extends BaseTransport {
    private filePath;
    private consoleTransport?;
    constructor(filePath: string, alsoConsole: boolean, level?: Level);
    write(entry: Entry): void;
}
//# sourceMappingURL=file.transport.d.ts.map