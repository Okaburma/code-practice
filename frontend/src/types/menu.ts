import { BaseOptions } from "./user";

export interface BaseMenu {
  name: string;
  price: number;
}

export interface Menu extends BaseMenu {
  id: number;
}

export interface NewMenuParams extends BaseMenu,BaseOptions {}

export interface MenuSlice {
  menus: Menu[];
  isLoading: boolean;
  error: Error | null;
}
