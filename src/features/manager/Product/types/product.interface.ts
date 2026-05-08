import type { Editor } from "@tiptap/react";
import type { Category, Unit } from "@/features/manager/MasterData";
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
    values: ProductOptionValue[];
}

export interface ProductOptionValue {
    label: string;
    value: string;
}

export interface ProductUnit {
    id?: number;
    unit: Unit | null;
    exchangeValue: number;
    price: number;
    isBaseUnit: boolean;
}

export interface ProductUnitRequest {
    unitId: number;
    exchangeValue: number;
    price: number;
    isBaseUnit: boolean;
}

export interface ProductRequest {
    sku: string;
    name: string;
    categories: Category[];
    description: string;
    specs: ProductSpec[];
    detailedSpecs: ProductDetailedSpec[];
    options: ProductOption[];
    productUnits: ProductUnitRequest[];
}

// Dùng cho Table Danh sách (Dữ liệu nhẹ, load nhanh)
export interface ProductListItem {
    id: number;
    sku: string;
    name: string;
    categories: Category[];
    basePrice?: number;
    originalPrice?: number;
}

// Dùng cho Modal Chi tiết / Cập nhật (Kế thừa từ ListItem và đắp thêm data nặng)
export interface Product extends ProductListItem {
    description: string;
    specs: ProductSpec[];
    detailedSpecs: ProductDetailedSpec[];
    options: ProductOption[];
    productUnits: ProductUnit[];
}

export interface ProductTableProps {
    data: ProductListItem[];
    onEdit?: (product: ProductListItem) => void;
    onDelete?: (product: ProductListItem) => void;
    onRowClick?: (productId: number) => void;
}

export interface TipTapEditorProps {
    value?: string;
    onChange?: (content: string) => void;
}

export interface MenuBarProps {
    editor: Editor;
}