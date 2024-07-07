export interface MenuCategory {
  id: number;
  name: string;
  isAvailable: boolean;
}

export interface MenuCategorySlice {
  menuCategories: MenuCategory[];
  isLoading: boolean;
  error: Error | null;
}
