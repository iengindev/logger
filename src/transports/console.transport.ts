import { BaseTransport } from './base.transport.js'

import type { Entry } from '../@types/logger.js'

export class ConsoleTransport extends BaseTransport {
  write(entry: Entry): void {
    const color = entry.level === 'error' ? '\x1b[31m' : '\x1b[32m'
    const reset = '\x1b[0m';

    console.log(`${color}[${entry.timestamp}] [${entry.level.toUpperCase()}]:${reset} ${entry.message}`)
  }
}
