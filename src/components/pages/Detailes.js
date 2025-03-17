import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, decrease, increase } from "../../redux/cartSlice";
import { Button } from "react-bootstrap";

const Details = () => {
    // selector
    const { item } = useSelector((state) => state.products);
    const cartProducts = useSelector(state => state.item.item)

    // dispatch
    const dispatch = useDispatch();



    return (
        <div className="container-fluid py-4">
            <div className="row justify-content-center">
                <div className="col-lg-12 col-md-10 col-sm-12">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <div className="row d-flex align-items-center">
                                {/* Image Section */}
                                <div className="col-lg-5 col-md-6 col-12 text-center mb-3">
                                    <img
                                        style={{ maxWidth: "100%" }}
                                        src={item.image}
                                        className="img-fluid rounded"
                                        alt={item.title}
                                    />
                                </div>
                                {/* Details Section */}
                                <div className="col-lg-7 col-md-6 col-12 text-center text-md-start">
                                    <h3 className="box-title my-3">{item.title}</h3>
                                    <p className="lead">{item.description}</p>
                                    <h2 className="mt-3 text-danger fw-bold">${item.price}</h2>

                                    <div className="d-flex flex-wrap justify-content-center justify-content-md-start mt-4">
                                        {
                                            cartProducts.find((i) => i.id === item.id) ? (
                                                <div className="d-flex mb-2 align-items-center border rounded shadow-sm bg-light">
                                                    <Button variant="outline-success" onClick={() => dispatch(increase({ id: item.id }))} className="fw-bold">+</Button>
                                                    <h3 className="mx-3 text-primary">
                                                        {cartProducts.find((i) => i.id === item.id).quantity}
                                                    </h3>
                                                    <Button variant="outline-danger" onClick={() => dispatch(decrease({ id: item.id }))} className="fw-bold">-</Button>
                                                </div>
                                            ) : (
                                                <button onClick={() => dispatch(addToCart(item))} style={{ display: "flex", alignItems: "center" }} className="btn btn-dark btn-lg mx-2 my-2">
                                                    <i style={{ paddingBottom: "3px" }} className="fa fa-shopping-cart me-2"></i> Add to Cart
                                                </button>
                                            )
                                        }
                                        <Link style={{ display: "flex", alignItems: "center" }} to="/" className="btn btn-primary btn-lg mx-2 my-2">
                                            Back To Products
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
