/// <reference types="node" />
import Multipart from './Multipart';
interface AttachmentData {
    file: Buffer | string;
    filename?: string;
}
declare class Attachment {
    data: AttachmentData;
    isBuffer: boolean;
    isString: boolean;
    multi: Multipart;
    file?: Buffer;
    constructor(data: AttachmentData);
}
export default Attachment;
//# sourceMappingURL=Attachment.d.ts.map