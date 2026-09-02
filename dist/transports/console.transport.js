import { BaseTransport } from './base.transport.js';
export class ConsoleTransport extends BaseTransport {
    write(entry) {
        const color = entry.level === 'error' ? '\x1b[31m' : '\x1b[32m';
        const reset = '\x1b[0m';
        console.log(`${color}[${entry.timestamp}] [${entry.level.toUpperCase()}]:${reset} ${entry.message}`);
    }
}
//# sourceMappingURL=console.transport.js.map