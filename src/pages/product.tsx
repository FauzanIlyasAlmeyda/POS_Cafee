import { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

export default function POSPage() {
  const [products] = useState<Product[]>([
    { id: "1", name: "Produk A", price: 10000 },
    { id: "2", name: "Produk B", price: 15000 },
    { id: "3", name: "Produk C", price: 20000 },
  ]);

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="flex h-screen">
      
      {/* LEFT - PRODUCT LIST */}
      <div className="w-2/3 p-6 overflow-y-auto bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Daftar Produk</h2>

        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => addToCart(product)}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
            >
              <div className="h-24 bg-gray-200 rounded-md mb-3" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm">
                Rp {product.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
      

      {/* RIGHT - CART */}
      <div className="w-1/3 p-6 border-l bg-white">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Belum ada produk</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b pb-2"
              >
                <span>{item.name}</span>
                <span>Rp {item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}