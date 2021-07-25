/// <reference types="node" />
export declare const headers: {
    'Content-Type': string;
    'User-Agent': string;
    'Accept-Encoding': string;
    'X-RateLimit-Precision': string;
    Authorization: string;
};
export declare const HeartBeat: {
    op: number;
    d: null;
};
export declare const identify: {
    op: number;
    d: {
        token: string;
        properties: {
            $os: NodeJS.Platform;
            $device: string;
            $browser: string;
        };
        intents: number;
    };
};
export interface payload {
    op: number;
    s: number;
    t: string;
    d: any;
}
//# sourceMappingURL=PayLoads.d.ts.map