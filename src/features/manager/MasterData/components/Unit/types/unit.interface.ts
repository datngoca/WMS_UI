export interface Unit {
    id: number;
    code: string;
    name: string;
    description: string;
}

export interface UnitRequest {
    code: string;
    name: string;
    description?: string;
}