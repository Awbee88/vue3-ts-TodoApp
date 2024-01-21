export interface ITodoItem {
    id: number;
    text: string;
    description: string;
    completed: boolean;
}

export interface ITodoStats {
    active: number;
    completed: number;
}
