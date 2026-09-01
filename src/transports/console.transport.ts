import { BaseTransport } from './base.transport.js'

import type { Enrty } from '../@types/logger.js'

export class ConsoleTransport extends BaseTransport {
  write(enrty: Enrty): void {
    const color = enrty.level === 'error' ? '\x1b[31m' : '\x1b[32m'
    const reset = '\x1b[0m';

    console.log(`${color}[${enrty.timestamp}] [${enrty.level.toUpperCase()}]:${reset} ${enrty.message}`)
  }
}
