import type { EmbedOptions } from '../types/Interfaces';
import type { video, image, thumbnail, author, provider, footer } from '../types/Types';
declare class Embed {
    private options?;
    fields: any[];
    title: string;
    type: string;
    thumbnail: thumbnail;
    image: image;
    video: video;
    author: author;
    provider: provider;
    footer: footer;
    description: string;
    url: string;
    timestamp: number | string;
    constructor(options?: EmbedOptions | undefined);
    addField(name: string, value: string, inline?: boolean): Embed;
    addFields(...fields: any): this;
    setAuthor(name: string, iconURL?: string, url?: string): Embed;
    setFooter(text: string, iconURL?: string): this;
    setImage(url: string): this;
    setDescription(content: string): Embed;
    setTitle(content: string): Embed;
    setThumbnail(url: string): Embed;
    setTimestamp(timestamp?: Date | number): Embed;
    setURL(url: string): Embed;
    get buildEmbed(): Embed;
}
export default Embed;
//# sourceMappingURL=Embed.d.ts.map