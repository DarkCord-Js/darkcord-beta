import Button from './Button';
import SelectMenu from './SelectMenu';
declare class Components {
    componentsLimit: number;
    row: any[];
    private component0Type;
    constructor(componentsLimit?: number);
    add(...components: SelectMenu[] | Button[]): this;
    remove(component: any): this;
    get components(): any[];
    set components(value: any);
    get size(): any;
}
export default Components;
//# sourceMappingURL=Components.d.ts.map