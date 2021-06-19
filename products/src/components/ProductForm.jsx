import React, { useState } from "react";
import { fire } from "../firebase";
import { toast } from "react-toastify";

function ProductForm() {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [desc, setDesc] = useState("");

    function submitHandler(e) {
        e.preventDefault();

        fire.firestore()
            .collection("products")
            .add({
                name,
                url,
                desc,
            })
            .then(() => {
                setName("");
                setUrl("");
                setDesc("");
            });
        toast("New Link Added", {
            type: "success",
        });
    }

    return (
        <div className="container">
            <nav className="navbar navbar-dark bg-light">
                <h1 className="m-auto">Products CRUD</h1>
            </nav>
            <form onSubmit={submitHandler} className="mb-4">
                <div className="form-group">
                    <label htmlFor="name">Nome do produto</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        placeholder="e.g. Adidas Shoes"
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="url">Url da imagem do produto</label>
                    <input
                        className="form-control"
                        type="text"
                        id="url"
                        placeholder="e.g. https://assets.adidas.com/images/..../.jpg"
                        value={url}
                        onChange={(e) => setUrl(e.currentTarget.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Valor do produto</label>
                    <input
                        className="form-control"
                        type="number"
                        min="1"
                        step="any"
                        id="desc"
                        value={desc}
                        onChange={(e) => setDesc(e.currentTarget.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Salvar
                </button>
            </form>
        </div>
    );
}

export default ProductForm;
