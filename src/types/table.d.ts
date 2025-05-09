export type TableColumn<T> = {
  header: string;
  key: keyof T;
  renderFirstCell?: (row: T) => React.ReactNode;
};

export type TableProps<T> = {
  columns: TableColumn<T>[];
  content: Array<T>;
  action: (row: T) => void;
};
