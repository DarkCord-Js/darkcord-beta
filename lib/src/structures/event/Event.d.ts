import Bot from '../../Bot';
declare class Event {
    bot?: Bot | undefined;
    options: {
        name: string;
    };
    constructor(eventOptions: {
        name: string;
    }, bot?: Bot | undefined);
}
export default Event;
//# sourceMappingURL=Event.d.ts.map