import { ShoppingFormProps } from "./type";
import { useAppContext } from "../hooks/useAppContext";
import { useTranslation } from "react-i18next";

const ShoppingForm: React.FC<ShoppingFormProps> = ({
  addItem,
  editingItemId,
  updateItem,
  name,
  setName,
  quantity,
  setQuantity,
}) => {
  const context = useAppContext();
  const { language, setLanguage } = context;
  console.log("language", language);
  const { t } = useTranslation(["home", "product"]);
  return (
    <div className="flex flex-col gap-3 mb-4">
      <h1 className="text-red-500">{t("product:product.title")}</h1>
      <div>
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
            edit
          </button>
        ) : (
          <button
            onClick={() => {
              addItem(name, quantity);
              setLanguage(true);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600"
          >
            {t("home.button")}
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingForm;
