import { useState } from "react";
import type { Product } from "../types/product";
import { addToCartLogic, removeFromCart, updateQuantity } from "../logic/cart";
import type { CartItem } from "../logic/cart";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();

  const [products] = useState<Product[]>([
    { id: "1", name: "Nasi Goreng", price: 15000 },
    { id: "2", name: "Mie Ayam", price: 12000 },
    { id: "3", name: "Es Teh", price: 5000 },
    { id: "4", name: "Ayam Geprek", price: 18000 },
    { id: "5", name: "Bakso", price: 14000 },
    { id: "6", name: "Soto Ayam", price: 13000 },
    { id: "7", name: "Rendang", price: 25000 },
    { id: "8", name: "Gado-Gado", price: 12000 },
    { id: "9", name: "Kwetiau", price: 17000 },
    { id: "10", name: "Capcay", price: 16000 },
    { id: "11", name: "Teh Manis", price: 4000 },
    { id: "12", name: "Kopi Hitam", price: 6000 },
    { id: "13", name: "Jus Alpukat", price: 10000 },
    { id: "14", name: "Jus Jeruk", price: 9000 },
    { id: "15", name: "Milkshake Coklat", price: 15000 },
    { id: "16", name: "Burger", price: 20000 },
    { id: "17", name: "Kentang Goreng", price: 12000 },
    { id: "18", name: "Spaghetti", price: 22000 },
    { id: "19", name: "Pizza Mini", price: 30000 },
    { id: "20", name: "Air Mineral", price: 3000 },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [editItem, setEditItem] = useState<CartItem | null>(null);
  const [newQty, setNewQty] = useState(1);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleAdd = (product: Product) => {
    setCart((prev) => addToCartLogic(prev, product));
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex gap-6 bg-gray-100 h-full p-6  overflow-hidden">
      
      {/* ===================== PRODUCT ===================== */}
      <div className="w-2/3 bg-white rounded shadow flex flex-col overflow-hidden">
        
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Daftar Produk</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleAdd(product)}
                className="bg-gray-50 p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition"
              >
                <div className="h-20 bg-gray-200 rounded mb-2" />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">
                  Rp {product.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== CART ===================== */}
      <div className="w-1/3 bg-white rounded shadow flex flex-col h-full">
        
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Cart</h2>
        </div>

        {/* Scrollable cart items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <p className="text-gray-500">Belum ada produk</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="border rounded p-3 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">
                    {item.name} ({item.quantity}x)
                  </p>
                  <p className="text-sm text-gray-500">
                    Rp {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditItem(item);
                      setNewQty(item.quantity);
                    }}
                    className="text-blue-600 text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => setDeleteId(item.id)}
                    className="text-red-600 text-sm"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Total section (always bottom) */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-blue-700 text-3xl font-bold">
              Rp {total.toLocaleString()}
            </span>
          </div>

          <button
            disabled={cart.length === 0}
            onClick={() => navigate("/checkout")}
            className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 disabled:opacity-50"
          >
            Buat Pesanan
          </button>
        </div>
      </div>

      {/* ===================== DELETE MODAL ===================== */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow w-80">
            <p className="mb-4">Yakin ingin menghapus item?</p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setDeleteId(null)}>Batal</button>
              <button
                className="text-red-600"
                onClick={() => {
                  setCart((prev) => removeFromCart(prev, deleteId));
                  setDeleteId(null);
                }}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================== EDIT MODAL ===================== */}
      {editItem && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow w-80">
            <p className="mb-2 font-semibold">{editItem.name}</p>

            <input
              type="number"
              min="1"
              value={newQty}
              onChange={(e) => setNewQty(Number(e.target.value))}
              className="border w-full p-2 rounded mb-4"
            />

            <div className="flex justify-end gap-3">
              <button onClick={() => setEditItem(null)}>Batal</button>
              <button
                className="text-blue-600"
                onClick={() => {
                  setCart((prev) =>
                    updateQuantity(prev, editItem.id, newQty)
                  );
                  setEditItem(null);
                }}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
