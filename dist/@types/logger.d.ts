export declare const LEVELS: {
    readonly trace: 10;
    readonly debug: 20;
    readonly info: 30;
    readonly warn: 40;
    readonly error: 50;
    readonly fatal: 60;
};
export type Level = keyof typeof LEVELS;
export interface Entry {
    level: Level;
    timestamp: string;
    message: string;
}
export interface Transport {
    level?: Level;
    write: (entry: Entry) => void | Promise<void>;
}
//# sourceMappingURL=logger.d.ts.map