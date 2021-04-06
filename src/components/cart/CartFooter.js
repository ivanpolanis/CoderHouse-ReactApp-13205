
const CartFooter = ({close}) => {



    return(
        <div className="cart-footer text-center p5">
            <div className="mb-3">
                <span className='d-block font-semi-bold'>Total</span>
                <span className='d-block'>$59.99</span>
            </div>
            <div className="mb-2">
                <button className='btn btn-dark' onClick={close}>Checkout</button>
            </div>
            <span><a href="#/" className='text-muted font-size-6' onClick={close}>
            Continue Shopping
            </a></span>
        </div>
    );
};

export default CartFooter;