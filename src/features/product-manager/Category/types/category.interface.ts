export interface Category {
  id: number;
  name: string;
  description: string;
  slug: string;
  parentId: number | null;
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
