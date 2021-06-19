import React, { useState } from "react";
import { fire } from "../firebase";

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
    }

    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Nome do produto</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
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
                        value={url}
                        onChange={(e) => setUrl(e.currentTarget.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Descrição do produto</label>
                    <input
                        className="form-control"
                        type="text"
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
