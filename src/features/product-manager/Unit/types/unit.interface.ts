export interface Unit {
    id: number;
    name: string;
    code: string;
    description: string;
}

export interface UnitRequest {
    name: string;
    code: string;
    description: string;
}