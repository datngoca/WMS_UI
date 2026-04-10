import type { Editor } from "@tiptap/react";
import type { Category } from "@/type/Category.interface";
import type { ProductUnit } from "@/type/ProductUnit.interface";
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
    categories: Category[];
    description: string;
    basePrice: number;
    originalPrice: number;
    specs: ProductSpec[];
    detailedSpecs: ProductDetailedSpec[];
    options: ProductOption[];
    productUnits: ProductUnit[];
}

export interface ProductTableProps {
    data: Product[];
    onEdit?: (product: Product) => void;
    onDelete?: (product: Product) => void;
    onRowClick?: (product: Product) => void;
}

export interface TipTapEditorProps {
    value?: string;
    onChange?: (content: string) => void;
}

export interface MenuBarProps {
    editor: Editor;
}