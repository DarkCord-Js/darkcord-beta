declare const FLAGS: {
    CREATE_INSTANT_INVITE: bigint;
    KICK_MEMBERS: bigint;
    BAN_MEMBERS: bigint;
    ADMINISTRATOR: bigint;
    MANAGE_CHANNELS: bigint;
    MANAGE_GUILD: bigint;
    ADD_REACTIONS: bigint;
    VIEW_AUDIT_LOG: bigint;
    PRIORITY_SPEAKER: bigint;
    STREAM: bigint;
    VIEW_CHANNEL: bigint;
    SEND_MESSAGES: bigint;
    SEND_TTS_MESSAGES: bigint;
    MANAGE_MESSAGES: bigint;
    EMBED_LINKS: bigint;
    ATTACH_FILES: bigint;
    READ_MESSAGE_HISTORY: bigint;
    MENTION_EVERYONE: bigint;
    USE_EXTERNAL_EMOJIS: bigint;
    VIEW_GUILD_INSIGHTS: bigint;
    CONNECT: bigint;
    SPEAK: bigint;
    MUTE_MEMBERS: bigint;
    DEAFEN_MEMBERS: bigint;
    MOVE_MEMBERS: bigint;
    USE_VAD: bigint;
    CHANGE_NICKNAME: bigint;
    MANAGE_NICKNAMES: bigint;
    MANAGE_ROLES: bigint;
    MANAGE_WEBHOOKS: bigint;
    MANAGE_EMOJIS: bigint;
    USE_APPLICATION_COMMANDS: bigint;
    REQUEST_TO_SPEAK: bigint;
    MANAGE_THREADS: bigint;
    USE_PUBLIC_THREADS: bigint;
    USE_PRIVATE_THREADS: bigint;
    ALL: bigint;
};
declare type Flags = keyof (typeof FLAGS);
declare class Permissions {
    allow: bigint;
    deny: bigint;
    constructor(allow: string | number | bigint, deny?: string | number | bigint);
    has(permission: Flags | bigint, checkAdm?: boolean): boolean;
    private hasPermission;
    toString(): string;
    static FLAGS: {
        CREATE_INSTANT_INVITE: bigint;
        KICK_MEMBERS: bigint;
        BAN_MEMBERS: bigint;
        ADMINISTRATOR: bigint;
        MANAGE_CHANNELS: bigint;
        MANAGE_GUILD: bigint;
        ADD_REACTIONS: bigint;
        VIEW_AUDIT_LOG: bigint;
        PRIORITY_SPEAKER: bigint;
        STREAM: bigint;
        VIEW_CHANNEL: bigint;
        SEND_MESSAGES: bigint;
        SEND_TTS_MESSAGES: bigint;
        MANAGE_MESSAGES: bigint;
        EMBED_LINKS: bigint;
        ATTACH_FILES: bigint;
        READ_MESSAGE_HISTORY: bigint;
        MENTION_EVERYONE: bigint;
        USE_EXTERNAL_EMOJIS: bigint;
        VIEW_GUILD_INSIGHTS: bigint;
        CONNECT: bigint;
        SPEAK: bigint;
        MUTE_MEMBERS: bigint;
        DEAFEN_MEMBERS: bigint;
        MOVE_MEMBERS: bigint;
        USE_VAD: bigint;
        CHANGE_NICKNAME: bigint;
        MANAGE_NICKNAMES: bigint;
        MANAGE_ROLES: bigint;
        MANAGE_WEBHOOKS: bigint;
        MANAGE_EMOJIS: bigint;
        USE_APPLICATION_COMMANDS: bigint;
        REQUEST_TO_SPEAK: bigint;
        MANAGE_THREADS: bigint;
        USE_PUBLIC_THREADS: bigint;
        USE_PRIVATE_THREADS: bigint;
        ALL: bigint;
    };
}
export default Permissions;
//# sourceMappingURL=Permissions.d.ts.map