import { LEVELS } from '../@types/logger.js';
export class BaseTransport {
    level;
    constructor(level = 'info') {
        this.level = level;
    }
    isLevelEnabled(level) {
        return LEVELS[level] > LEVELS[this.level];
    }
}
//# sourceMappingURL=base.transport.js.map