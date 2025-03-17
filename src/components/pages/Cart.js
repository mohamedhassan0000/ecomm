import { Container, Table, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // ✅ استيراد useNavigate
import { clearCart, deleteItem } from '../../redux/cartSlice';

const Cart = () => {
    const data = useSelector(state => state.item.item);
    const navigate = useNavigate();
    // dispatch
    const dispatch = useDispatch()
    // total price
    const totalPrice = data.reduce((acc, item) => acc + item.price * item.quantity, 0)


    return (
        <Container style={{ marginTop: "80px" }}>
            <div className="text-center my-4">
                <h1 className="fw-bold text-primary">🛒 Your Shopping Cart</h1>

                {/*  Clear Cart */}
                <Button onClick={() => dispatch(clearCart())} variant="danger" className="fs-5 mb-3 shadow-sm rounded btn-lg">
                    🗑 Clear Cart
                </Button>

                {/* Go Back Home */}
                <Button
                    variant="secondary"
                    className="fs-5 mb-3 shadow-sm rounded btn-lg ms-3"
                    onClick={() => navigate('/')}
                >
                    ⬅️ Go Back Home
                </Button>
            </div>
            {/* price */}
            <div className="d-flex justify-content-center my-4">
                <Card style={{ width: "18rem" }} className="shadow-lg text-center">
                    <Card.Body>
                        <Card.Title className="fw-bold text-primary">Total Price</Card.Title>
                        <Card.Text className="fs-4 text-success">${totalPrice.toFixed(2)}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Table className="text-center table-bordered table-hover table-striped shadow-sm">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td className="fw-semibold">{item.title}</td>
                                <td>
                                    <img
                                        style={{ width: "80px", borderRadius: "8px" }}
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </td>
                                <td>
                                    <span className="badge bg-secondary fs-6 p-2">{item.quantity}</span>
                                </td>
                                <td className="fw-bold text-success">${item.price.toFixed(2)}</td>
                                <td>
                                    <Button onClick={() => dispatch(deleteItem(item.id))} variant="outline-danger" className="shadow-sm">
                                        ❌ Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-muted fs-5">Your cart is empty 🛍</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default Cart;
