import { useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { getData, getItem } from "../../redux/productsSlice";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, decrease, increase } from "../../redux/cartSlice";
import Categories from "../Categories";

const Products = () => {
    // selector
    const { products } = useSelector(state => state.products)
    const cartProducts = useSelector(state => state.item.item)
    // ========================================================================


    // const allCategories = ["All", ...new Set(products.map((i) => i.category))]
    // console.log(allCategories);


    // ========================================================================

    // dispatch
    const dispatch = useDispatch()

    // use effect
    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    // products
    const items = products.length > 0 ? (products.map((product) => (
        <Col key={product.id} sm="6" md="4" lg="3" >
            <Card onClick={() => dispatch(getItem(product.id))} className="card-produc px-2">
                <Link style={{ color: "black" }} to={`details/${product.title}`}>
                    <Card.Img className="card-img" variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title title={product.title} className="cart-title">{product.title}</Card.Title>
                        <Card.Text title={product.description} className="card-text">{product.description}</Card.Text>
                        <Card.Title>{product.price} $</Card.Title>
                    </Card.Body>
                </Link>
                {
                    cartProducts.find((i) => i.id === product.id) ? (
                        <div className="d-flex mx-auto mb-2 align-items-center border rounded shadow-sm bg-light">
                            <Button variant="outline-success" onClick={() => dispatch(increase({ id: product.id }))} className="fw-bold">+</Button>
                            <h3 className="mx-3 text-primary">{cartProducts.find((i) => i.id === product.id).quantity}</h3>
                            <Button variant="outline-danger" onClick={() => dispatch(decrease({ id: product.id }))} className="fw-bold">-</Button>
                        </div>
                    ) : (
                        <Button onClick={() => dispatch(addToCart(product))} className="mb-2" variant="primary">Add To Cart</Button>
                    )
                }
            </Card>
        </Col >
    ))) : (
        <Spinner className="d-flex justify-content-center align-items-center  fs-5" style={{ height: "100px", width: "100px", marginTop: "200px" }} animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
    return (
        <Container>
            <Row>
                <Col>
                    <Categories />
                </Col>
            </Row>
            <Row className=" justify-content-center g-5 cards" >
                {items}
            </Row>
        </Container>
    )
}

export default Products