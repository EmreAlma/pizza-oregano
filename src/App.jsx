import { useState } from "react";

export default function App() {
  const products = [
    { id: 1, name: "Pizza Margherita", description: "Fresh tomatoes, mozzarella, basil.", price: 45 },
    { id: 2, name: "Döner Kebap", description: "Juicy grilled meat with fresh veggies.", price: 30 },
    { id: 3, name: "Kızartma", description: "Crispy fried potatoes with ketchup.", price: 25 },
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Restaurant Menü</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">{product.price}₺</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Sepetiniz</h2>
        {cart.length === 0 ? (
          <p>Henüz ürün eklenmedi.</p>
        ) : (
          <ul className="list-disc list-inside">
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}₺
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
