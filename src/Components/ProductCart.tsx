import React, {useState} from "react"

interface IProduct{
    sno : string;
    name : string;
    img : string;
    qty : number;
    price : number;
}

interface IProps{
}
interface IState{
    product : IProduct
}

let ProductCart : React.FC<IProps> = () => {

    let [productState , setProductState] = useState<IState>({
        product : {
            sno: "AA00AA",
            name: "Mi Band 4",
            img: "data:image/jpeg;base64,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",
            qty: 1,
            price: 2099
        }
})

    let incQty = () => {
        setProductState({
            product : {
                ...productState.product,
                qty : productState.product.qty + 1
            }

        })
    }

    let decQty = () => {
        setProductState({
            product : {
                ...productState.product,
                qty : productState.product.qty - 1 > 0 ? productState.product.qty -1 : 0
            }

        })
    }

    return (
        <React.Fragment>
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Products</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda enim nam nemo nostrum, praesentium ut. Animi aut commodi eum illo ipsa iusto modi nemo nobis quaerat suscipit, unde veniam voluptates.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <table className="table table-hover text-center text-white table-striped">
                            <thead className="bg-dark">
                            <tr>
                                <td>Sno</td>
                                <td>Product Name</td>
                                <td>Product image</td>
                                <td>Qty</td>
                                <td>Total Price</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{productState.product.sno}</td>
                                <td>{productState.product.name}</td>
                                <td><img src={productState.product.img}  width="50px" className="img-fluid" alt=""/></td>
                                <td><i className="fa fa-minus-circle" onClick={decQty}/> {productState.product.qty} <i className="fa fa-plus-circle" onClick={incQty}/></td>
                                <td>{productState.product.price * productState.product.qty}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </React.Fragment>
        </React.Fragment>
    )

}

export default ProductCart;