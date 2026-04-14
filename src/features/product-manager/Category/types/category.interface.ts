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

export interface CategoryFormValues {
  name: string;
  description: string;
  parent: CategoryOption | null;
}

export interface CategoryOption {
  id: number | null;
  name: string;
  children?: CategoryOption[];
}


export interface CategoryRequest {
  name: string;
  description: string;
  parentId: number | null;
}
