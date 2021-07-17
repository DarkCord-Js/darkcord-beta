import type Client from '../Client';
export declare function CommandLoader(client: Client, _path?: string): Promise<{
    /** Array of commands names */
    loaded: string[];
    /** Loader path */
    path: string;
}>;
export declare function EventLoader(client: Client, _path?: string): {
    /** Array of events names */
    loaded: string[];
    /** Loader path */
    path: string;
};
//# sourceMappingURL=Loader.d.ts.map