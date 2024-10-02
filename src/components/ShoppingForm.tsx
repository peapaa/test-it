import { ShoppingFormProps } from "./type";

const ShoppingForm: React.FC<ShoppingFormProps> = ({
  addItem,
  editingItemId,
  updateItem,
  name,
  setName,
  quantity,
  setQuantity,
}) => {
  return (
    <div className="flex gap-3 mb-4">
      <input
        type="text"
        placeholder="商品名"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full"
      />
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className="border border-gray-300 p-2 rounded w-full"
      />
      {editingItemId ? (
        <button
          onClick={updateItem}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          更新
        </button>
      ) : (
        <button
          onClick={() => addItem(name, quantity)}
          className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600"
        >
          追加
        </button>
      )}
    </div>
  );
};

export default ShoppingForm;
