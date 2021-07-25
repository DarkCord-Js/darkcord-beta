import Bot from '../../Bot';
declare class Event {
    client?: Bot | undefined;
    options: {
        name: string;
    };
    constructor(eventOptions: {
        name: string;
    }, client?: Bot | undefined);
}
export default Event;
//# sourceMappingURL=Event.d.ts.map