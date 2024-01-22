import AddProductForm from "./add-product/showProd";
import GetProductForm from "./add-product/form";
import DeleteProductForm from "./add-product/deleteProduct";
function Test()
{
    return (
        <>
        <h1>Pobieranie danych z bazy</h1>
        <AddProductForm />
        
        <GetProductForm />

        <DeleteProductForm />
        </>
    )
}

export default Test;