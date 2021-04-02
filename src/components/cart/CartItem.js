const CartItem = () => {
    return(
        <div className="cart-item p2">
            <div className="item-img mr-3">
                <img src="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/ti61nslwh35whirn9drr/womens-air-jordan-i-twist-release-date.jpg" alt="" className='img-fluid rounded'/>
            </div>
            <div className="item-description">
                <div className="d-flex justify-content-between align-items-center">
                    <span className='d-block font-semi-bold font-size-2'>Nike Jordan</span>
                    <button type='button' className='btn'>
                        <i className='gg-trash'></i>
                    </button>
                </div>
                <span className='d-block font-size-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, enim.</span>
                <span className='d-block text-primary font-semi-bold'>$59.99</span>
                <span className='d-block text-muted font-size-5'>Size: 10</span>
            </div>
        </div>
    );
};

export default CartItem;