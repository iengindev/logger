import fs from 'fs';
import path from 'path';
import { Logger } from '../index.js';
import { BaseTransport } from './base.transport.js';
import { ConsoleTransport } from './console.transport.js';
export class FileTransport extends BaseTransport {
    filePath;
    consoleTransport;
    constructor(filePath, alsoConsole, level = 'info') {
        super(level);
        this.filePath = path.resolve(filePath);
        if (alsoConsole) {
            this.consoleTransport = new Logger({
                level: 'debug',
                transports: [
                    new ConsoleTransport('info')
                ]
            });
        }
        const dir = path.dirname(this.filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {
                recursive: true
            });
        }
    }
    write(entry) {
        if (!this.isLevelEnabled(entry.level))
            return;
        if (this.consoleTransport) {
            this.consoleTransport[entry.level](entry.message);
        }
        const line = JSON.stringify(entry) + '\n';
        fs.appendFile(this.filePath, line, callback => {
            if (callback && this.consoleTransport) {
                this.consoleTransport.error(`Failed to write log to file: ${callback.message}`);
            }
        });
    }
}
//# sourceMappingURL=file.transport.js.map