export const LEVELS = {
  trace:  10,
  debug:  20,
  info:   30,
  warn:   40,
  error:  50,
  fatal:  60,
} as const

export type Level = keyof typeof LEVELS

export interface Enrty {
  level:      Level
  timestamp:  string
  message:    string
}

export interface Transport {
  level?:     Level
  write:      (enrty: Enrty) => void | Promise<void>
}
