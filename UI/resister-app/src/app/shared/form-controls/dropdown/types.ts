export interface DropdownConfig {
    name?: string;
    items?: Array<{id: string, name: string, value?: string}>;
    selectedIndex?: number;
    defaultValue?: string;
    id: number;
}
