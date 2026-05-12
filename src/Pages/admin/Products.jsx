import { useState } from "react";
import Barcode from "react-barcode";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    sku: "LAP123",
    category: "Electronics",
    price: "₹55,000",
  },
  {
    id: 2,
    name: "Keyboard",
    sku: "KEY456",
    category: "Accessories",
    price: "₹1,500",
  },
  {
    id: 3,
    name: "Mouse",
    sku: "MOU789",
    category: "Accessories",
    price: "₹800",
  },
];

const Products = () => {

  const [products, setProducts] = useState(initialProducts);

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "",
    price: "",
  });

  const [editId, setEditId] = useState(null);

  // INPUT CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // ADD OR UPDATE PRODUCT

  const handleAddProduct = () => {

    if (
      !formData.name ||
      !formData.sku ||
      !formData.category ||
      !formData.price
    ) {

      alert("Please fill all fields");
      return;

    }

    // UPDATE PRODUCT

    if (editId !== null) {

      const updatedProducts = products.map((product) =>

        product.id === editId
          ? {
              ...product,
              ...formData,
            }
          : product

      );

      setProducts(updatedProducts);

      setEditId(null);

    }

    // ADD PRODUCT

    else {

      const newProduct = {
        id: Date.now(),
        ...formData,
      };

      setProducts([...products, newProduct]);

    }

    // RESET FORM

    setFormData({
      name: "",
      sku: "",
      category: "",
      price: "",
    });

  };

  // DELETE PRODUCT

  const handleDelete = (id) => {

    const filteredProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(filteredProducts);

  };

  // EDIT PRODUCT

  const handleEdit = (product) => {

    setFormData({
      name: product.name,
      sku: product.sku,
      category: product.category,
      price: product.price,
    });

    setEditId(product.id);

  };

  return (
    <div>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Product Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage products and inventory catalog
          </p>

        </div>

      </div>

      {/* ADD PRODUCT FORM */}

      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">

        <h2 className="text-2xl font-bold mb-5">

          {editId !== null
            ? "Edit Product"
            : "Add Product"}

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="sku"
            placeholder="SKU"
            value={formData.sku}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

        </div>

        <button
          onClick={handleAddProduct}
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >

          {editId !== null
            ? "Update Product"
            : "Add Product"}

        </button>

      </div>

      {/* PRODUCTS GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300"
          >

            <h2 className="text-2xl font-bold text-slate-800">
              {product.name}
            </h2>

            <p className="text-gray-500 mt-2">
              SKU: {product.sku}
            </p>

            <p className="text-gray-500">
              Category: {product.category}
            </p>

            <p className="text-blue-600 font-bold text-xl mt-3">
              {product.price}
            </p>

            <div className="mt-5 overflow-x-auto">

              <Barcode
                value={product.sku}
                height={50}
              />

            </div>

            <div className="flex gap-3 mt-5">

              <button
                onClick={() => handleEdit(product)}
                className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg hover:bg-yellow-200 transition-all duration-300"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-all duration-300"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Products;