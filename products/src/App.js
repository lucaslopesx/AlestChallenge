import ProductForm from "./components/ProductForm.jsx";
import ProductsList from "./components/Product.jsx";

//import firebase from "./firebase";

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
