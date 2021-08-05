import Bot from '../../Bot';
import { ChannelTypeDef, snowflake } from '../../types/Types';
import Guild from '../Guild';
import BaseChannel from './BaseChannel';
declare class VoiceChannel extends BaseChannel {
    guild: Guild;
    bitrate: number;
    private rtc_region;
    private user_limit;
    private user_id;
    constructor(_bot: Bot, _id: string, _name: string, _type: ChannelTypeDef, guild: Guild, bitrate: number, rtc_region: string, user_limit: number, user_id: snowflake);
    get userId(): snowflake;
    get rtcRegion(): string;
    get userLimit(): number;
    get channel(): Promise<any>;
}
export default VoiceChannel;
//# sourceMappingURL=VoiceChannel.d.ts.map