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

export interface CategoryFormProps {
  categories: Category[];
  category: Category | null;
  onClose: () => void;
  onCreate: (category: CategoryRequest) => void;
  onUpdate: (id: number, category: CategoryRequest) => void;

}

export interface CategoryRequest {
  name: string;
  description: string;
  parent: ParentCategory | null;
}
