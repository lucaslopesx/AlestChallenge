import ProductForm from "./components/ProductForm";
import ProductsList from "./components/Product";

import firebase from "./firebase";

function App() {
    return (
        <div>
            <ProductForm />
            <ProductsList />
        </div>
    );
}

export default App;
