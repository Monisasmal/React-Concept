import React, { createContext, useContext, useState } from "react";

// --- 1. THE CONTEXT LOGIC (The Warehouse) ---
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart or increase quantity if already exists
  const addToCart = (product) => {
    setCart((prevCart) => {
      const isExisting = prevCart.find((item) => item.id === product.id);
      if (isExisting) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  // Remove item completely
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate totals
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for easy access
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);

// --- 2. MAIN COMPONENT (The Guide) ---
const ShoppingCartGuide = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 pb-20 px-6 bg-slate-50 min-h-screen font-sans">

      {/* --- 1. QUESTION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10 border-l-8 border-indigo-500">
        <h2 className="text-2xl font-bold mb-3 text-slate-800">
          Question
        </h2>
        <p className="text-slate-600 text-lg">
          How do you implement a <strong>Shopping Cart</strong> system using Context API so that 
          product listing and the checkout header stay in sync globally?
        </p>
      </div>

      {/* --- 2. EXPLANATION --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-3 text-indigo-900">
          Explanation
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-600">
          <li><strong>Global State:</strong> The <code>cart</code> array is stored in the Provider, making it accessible to any component (Navbar, Product Card, Cart Page).</li>
          <li><strong>Logic Encapsulation:</strong> All math (calculating total price) and logic (checking for duplicate items) stays inside the Provider.</li>
          <li><strong>Immutability:</strong> We use the functional update pattern <code>setCart(prev ={">"} [...prev])</code> to ensure React detects state changes correctly.</li>
          <li><strong>Derived State:</strong> Instead of creating a new state for "Total Price," we calculate it on the fly from the <code>cart</code> array to avoid sync bugs.</li>
        </ul>
      </div>

      {/* --- 3. CODING ANSWER --- */}
      <div className="bg-slate-900 text-green-400 p-8 rounded-2xl shadow mb-10 overflow-x-auto">
        <h2 className="text-2xl text-white mb-4 font-bold">
          Coding Answer
        </h2>
        <pre className="text-sm leading-relaxed">
{`import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev.map(i => i.id === item.id ? {...i, qty: i.qty + 1} : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(cart.filter(i => i.id !== id));
  
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);`}
        </pre>
      </div>

      {/* --- 4. LIVE PREVIEW --- */}
      <div className="bg-white p-8 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Live Preview
        </h2>
        <div className="max-w-2xl mx-auto">
          {/* Wrap inside the provider for the demo */}
          <CartProvider>
            <CartDemoUI />
          </CartProvider>
        </div>
      </div>

      {/* --- 5. REAL WORLD ANALOGY --- */}
      <div className="bg-indigo-900 p-8 rounded-2xl text-white shadow-xl">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🌍</span> Real-World Analogy
        </h2>
        <p className="leading-relaxed opacity-90">
          Think of the <strong>Cart Context</strong> as the <strong>Central Database of a Supermarket</strong>. 
          When you scan an item at an aisle (Product Component), the database updates. 
          When you look at the screen at the exit (Navbar/Cart Component), it pulls data from the same 
          database. No matter where you are in the store, everyone sees the <strong>same total price</strong>.
        </p>
      </div>

    </div>
  );
};

// Helper UI for the Preview
const CartDemoUI = () => {
  const { cart, addToCart, removeFromCart, totalItems, totalPrice } = useCart();
  const products = [
    { id: 1, name: "React Book", price: 500 },
    { id: 2, name: "JS Hoodie", price: 1200 },
  ];

  return (
    <div className="space-y-6">
      {/* Mini Navbar */}
      <div className="flex justify-between items-center bg-indigo-100 p-4 rounded-xl border border-indigo-200">
        <span className="font-bold text-indigo-800">SasmalStore</span>
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
          <span>🛒</span>
          <span className="font-bold text-indigo-600">{totalItems} items</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product List */}
        <div className="space-y-3">
          <h3 className="font-bold text-slate-700">Products</h3>
          {products.map(p => (
            <div key={p.id} className="p-4 bg-white border rounded-xl flex justify-between items-center">
              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-slate-500">₹{p.price}</p>
              </div>
              <button 
                onClick={() => addToCart(p)}
                className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-indigo-700 transition-all"
              >
                Add +
              </button>
            </div>
          ))}
        </div>

        {/* Cart Listing */}
        <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 min-h-[150px]">
          <h3 className="font-bold text-slate-700 mb-3">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-xs text-slate-400">Your cart is empty.</p>
          ) : (
            <div className="space-y-2">
              {cart.map(item => (
                <div key={item.id} className="text-xs flex justify-between bg-white p-2 rounded border">
                  <span>{item.name} (x{item.qty})</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 font-bold">Remove</button>
                </div>
              ))}
              <hr className="my-2 border-slate-300" />
              <p className="font-bold text-right text-indigo-700">Total: ₹{totalPrice}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartGuide;