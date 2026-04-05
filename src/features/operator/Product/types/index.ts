
export interface ProductSpec {
    label: string;
    value: string | number;
}

export interface ProductDetailedSpec {
    groupName: string;
    items: ProductSpec[];
}

export interface ProductOption {
    name: string;
    type: string;
    values: ProductSpec[];
}

export interface Product {
    id: number;
    sku: string;
    name: string;
    category: string;
    description: string;
    basePrice: number;
    originalPrice: number;
    specs: ProductSpec[];
    detailedSpecs: ProductDetailedSpec[];
    options: ProductOption[];
}

export interface ProductTableProps {
    data: Product[];
    onEdit?: (product: Product) => void;
    onDelete?: (product: Product) => void;
    onRowClick?: (product: Product) => void;
}
