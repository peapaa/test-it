import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingTable from "./components/ShoppingTable";
import { Item } from "./components/type";

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  const addItem = (name: string, quantity: number) => {
    const newItem: Item = {
      id: uuidv4(),
      name,
      quantity,
    };
    setItems([...items, newItem]);
    setName("");
    setQuantity(1);
  };

  const editItem = (id: string) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setName(itemToEdit.name);
      setQuantity(itemToEdit.quantity);
      setEditingItemId(id);
    }
  };

  const updateItem = () => {
    if (!editingItemId) return;
    setItems(
      items.map((item) =>
        item.id === editingItemId ? { ...item, name, quantity } : item
      )
    );
    setName("");
    setQuantity(1);
    setEditingItemId(null);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col justify-center max-w-[1200px] w-full px-8 h-screen">
      <h1>Shopping List</h1>
      <ShoppingForm
        addItem={addItem}
        editingItemId={editingItemId}
        updateItem={updateItem}
        name={name}
        setName={setName}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <ShoppingTable
        items={items}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default App;
