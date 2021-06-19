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

    const deleteProd = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar esse produto?")) {
            await fire.firestore().collection("products").doc(id).delete();
        }
    };

    return (
        <>
            {products.map((prod) => (
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 mr-4 mb-4 d-flex align-items-stretch">
                    <div key={prod.id} className="card shadow-sm">
                        <img
                            src={prod.url}
                            alt="product"
                            className="card-img-top img-thumbnail img-rounded"
                        />
                        <div className="card-body">
                            <h1 className="lead">{prod.name}</h1>

                            <p className="card-text">${prod.desc}</p>
                        </div>

                        <div className="d-flex justify-content-around p-2">
                            <button
                                className="btn btn-danger d-flex"
                                onClick={() => deleteProd(prod.id)}
                            >
                                <i className="material-icons">delete_forever</i>
                            </button>
                            <button className="btn btn-primary d-flex p">
                                <i className="material-icons">create</i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductsList;
