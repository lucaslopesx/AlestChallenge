import React, { useState, useEffect } from "react";
import { fire } from "../firebase";

function Product() {
    const [products, setProducts] = useState({});

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
    const products = Product();

    return (
        <div>
            <div>
                {products.map((prod) => (
                    <div key={prod.id}>
                        <h1>{prod.name}</h1>
                        <p>{prod.desc}</p>
                        <p>{prod.url}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
