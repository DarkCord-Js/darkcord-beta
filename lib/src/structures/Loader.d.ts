import type Bot from '../CommandBot';
export declare function CommandLoader(client: Bot, _path?: string): Promise<{
    /** Array of commands names */
    loaded: string[];
    /** Loader path */
    path: string;
}>;
export declare function EventLoader(client: Bot, _path?: string): {
    /** Array of events names */
    loaded: string[];
    /** Loader path */
    path: string;
};
//# sourceMappingURL=Loader.d.ts.map