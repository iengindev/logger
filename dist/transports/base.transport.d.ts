import { type Entry, type Level, type Transport } from '../@types/logger.js';
export declare abstract class BaseTransport implements Transport {
    level: Level;
    constructor(level?: Level);
    protected isLevelEnabled(level: Level): boolean;
    abstract write(entry: Entry): void | Promise<void>;
}
//# sourceMappingURL=base.transport.d.ts.map