declare class Multipart {
    result: string;
    boundary: string;
    constructor();
    append(data: [string, any, string]): void;
    finalize(): this;
}
export default Multipart;
//# sourceMappingURL=Multipart.d.ts.map