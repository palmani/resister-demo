export interface DropdownConfig {
    name?: string;
    items?: Array<{id: string, name: string}>;
    selectedIndex?: number;
    defaultValue?: string;
    id: number;
}
