import React, { useState, useEffect } from "react";
import { fire } from "../firebase";

function AddProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fire.firestore()
            .collection("products")
            .onSnapshot((snapshot) => {
                const newProducts = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(newProducts);
            });
    }, []);

    return products;
}
const ProductsList = () => {
    const products = AddProduct();

    return (
        <div className="container">
            <div className="row">
                {products.map((prod) => (
                    <div key={prod.id} className="col-md-4">
                        <h1>{prod.name}</h1>
                        <p>{prod.desc}</p>
                        <img src={prod.url} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
