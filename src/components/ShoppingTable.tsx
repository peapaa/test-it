import React from "react";
import { ShoppingTableProps } from "./type";

const ShoppingTable: React.FC<ShoppingTableProps> = ({
  items,
  editItem,
  deleteItem,
}) => {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">ID</th>
          <th className="border border-gray-300 px-4 py-2">商品名</th>
          <th className="border border-gray-300 px-4 py-2">数量</th>
          <th className="border border-gray-300 px-4 py-2">アクション</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">{item.id}</td>
            <td className="border border-gray-300 px-4 py-2">{item.name}</td>
            <td className="border border-gray-300 px-4 py-2">
              {item.quantity}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <button
                onClick={() => editItem(item.id)}
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
              >
                編集
              </button>
              <button
                onClick={() => deleteItem(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                削除
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShoppingTable;
