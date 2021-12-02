export type Nullable<T> = T | null | undefined;

export interface PickerItem {
  id: number;
  label: string;
  icon: Nullable<string>;
  color: string;
}

export interface ParamId {
  id: string;
}
