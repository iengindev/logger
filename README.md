# Custom TypeScript Logger

Lightweight, fast, and fully extensible logging utility for Node.js written in TypeScript with native ESM support.

## Features

* 🎯 **Pluggable Transports:** Route logs to Console, File (with optional composite console output), or custom transports.
* 🎨 **Level Filtering:** Per-transport log level management (`trace`, `debug`, `info`, `warn`, `error`, `fatal`).

---

## Installation

Install directly from the release branch using `npm`:

```bash
npm install github:iengindev/logger#build-release
```

---

## Quick Start

```typescript
import { Logger } from 'logger';
import { ConsoleTransport, FileTransport } from 'logger/transports';

// Initialize Logger
const logger = new Logger({
  level: 'debug',
  transports: [
    new ConsoleTransport('info'),
    new FileTransport({
      filePath: 'logs/app.log',
      level: 'debug',
      alsoConsole: true, // Output to file and delegate to ConsoleTransport
    }),
  ],
});

// Basic logging
logger.info('Server started successfully');
logger.error('Failed to connect to database');

// Child Logger (Contextual Binding)
const reqLogger = logger.child({ requestId: 'req-123' });
reqLogger.info('Processing incoming request');
```

---

## License

MIT
