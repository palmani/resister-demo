export interface DropdownConfig {
    name?: string;
    items?: Array<{id: string, name: string, value?: number}>;
    selectedIndex?: number;
    defaultValue?: string;
    id: number;
}
