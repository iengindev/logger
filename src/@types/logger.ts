export const LEVELS = {
  trace:  10,
  debug:  20,
  info:   30,
  warn:   40,
  error:  50,
  fatal:  60,
} as const

export type Level = keyof typeof LEVELS

export interface Entry {
  level:      Level
  timestamp:  string
  message:    string
}

export interface Transport {
  level?:     Level
  write:      (entry: Entry) => void | Promise<void>
}
