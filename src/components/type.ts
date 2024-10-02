export interface Item {
  id: string;
  name: string;
  quantity: number;
}


export interface ShoppingFormProps {
  addItem: (name: string, quantity: number) => void;
  editingItemId: string | null;
  updateItem: () => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export interface ShoppingTableProps {
  items: Item[];
  editItem: (id: string) => void;
  deleteItem: (id: string) => void;
}