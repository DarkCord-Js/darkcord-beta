import Client from '../../Client';
declare class Event {
    client?: Client | undefined;
    options: {
        name: string;
    };
    constructor(eventOptions: {
        name: string;
    }, client?: Client | undefined);
}
export default Event;
//# sourceMappingURL=Event.d.ts.map