export interface ParentCategory {
  id: number | null;
  name: string | null;
}
export interface Category {
  id: number;
  name: string;
  description: string;
  slug: string;
  parent: ParentCategory | null;
  depth: number;
  children: Category[];
}

export interface CategoryTableProps {
  data: Category[];
  onEdit?: (category: Category) => void;
  onDelete?: (category: Category) => void;
}

export interface CategoryModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (category: Category) => void;
  initialData?: Category;
}

export interface CategoryOption {
  id: number | null;
  name: string;
  children?: CategoryOption[];
}

export interface CategoryRequest {
  name: string;
  description: string;
  parent: ParentCategory | null;
}
