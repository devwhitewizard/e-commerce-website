import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_product = async () => {
    try {
      console.log("Starting product upload process...");
      
      if (!image) {
        alert("Please select an image first");
        return;
      }

      let formData = new FormData();
      formData.append("product", image);

      // 1. Upload the image
      const uploadResponse = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error(`Upload failed with status ${uploadResponse.status}`);
      }

      const uploadData = await uploadResponse.json();
      console.log("Image Upload Success:", uploadData);

      if (uploadData.success) {
        // Prepare the final product object
        const product = { 
          ...productDetails, 
          image: uploadData.image_url,
          new_price: Number(productDetails.new_price),
          old_price: Number(productDetails.old_price)
        };
        
        console.log("Sending product to backend:", product);

        // 2. Add product details to database
        const addResponse = await fetch("http://localhost:4000/api/products/add", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        const addData = await addResponse.json();
        console.log("Database Response:", addData);

        if (addData.success) {
          alert("Product Added Successfully!");
          // Reset form
          setProductDetails({
            name: "",
            image: "",
            category: "women",
            new_price: "",
            old_price: "",
          });
          setImage(false);
        } else {
          alert(`Backend Error: ${addData.error || addData.details || "Unknown error"}`);
        }
      } else {
        alert("Image upload failed at the server");
      }
    } catch (error) {
      console.error("System Error:", error);
      alert("System Error: " + error.message);
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          type="text"
          name="name"
          placeholder="Type here"
          onChange={changeHandler}
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            type="number"
            name="old_price"
            placeholder="Type here"
            onChange={changeHandler}
          />
        </div>
        <div className="addproduct-itemfield">
          <p>offer Price</p>
          <input
            value={productDetails.new_price}
            type="number"
            name="new_price"
            placeholder="Type here"
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          id="category"
          className="add-product-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumnail-img"
            alt=""
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={() => Add_product()} className="addproduct-btn">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
