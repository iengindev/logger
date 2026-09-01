import { LEVELS, type Enrty, type Level, type Transport } from '../@types/logger.js'

export abstract class BaseTransport implements Transport {
  constructor (public level: Level = 'info') {}

  protected isLevelEnabled(level: Level): boolean {
    return LEVELS[level] > LEVELS[this.level]
  }

  abstract write(enrty: Enrty): void | Promise<void>
}
