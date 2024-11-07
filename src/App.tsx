import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingTable from "./components/ShoppingTable";
import { Item } from "./components/type";
import { useTranslation } from "react-i18next";
import { languages } from "./i18n/i18n";

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  // add item function
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

  // edit item function
  const editItem = (id: string) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setName(itemToEdit.name);
      setQuantity(itemToEdit.quantity);
      setEditingItemId(id);
    }
  };

  // update item function
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

  // delete item function
  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const { i18n } = useTranslation();
  const changeLanguage = (language: "en" | "jp") => {
    i18n.changeLanguage(language);
  };

  console.log(i18n.language);
  const showLanguage = languages[i18n.language as keyof typeof languages];
  console.log("showLanguage", showLanguage);
  return (
    <div className="flex flex-col justify-center max-w-[1200px] w-full px-8 h-screen">
      <button
        className="bg-orange-500 w-20"
        onClick={() => changeLanguage("en")}
      >
        Tiếng anh
      </button>
      <button
        className="bg-orange-500 w-20"
        onClick={() => changeLanguage("jp")}
      >
        Tiếng nhật
      </button>
      <h2>{showLanguage}</h2>
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
