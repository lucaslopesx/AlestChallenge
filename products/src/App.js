import ProductForm from "./components/ProductForm.js";
import ProductsList from "./components/Product.js";

function App() {
    return (
        <div>
            <ProductForm />
            <div className="container">
                <div className="row">
                    <ProductsList />
                </div>
            </div>
        </div>
    );
}

export default App;
