import { Button } from 'react-bootstrap';
import { useState } from 'react';

const ItemCount = ({ initialCount, stock }) => {
	const [count, setCount] = useState(initialCount ? initialCount : 1);

	const increment = () => {
		if (count === stock) {
			return;
		}
		setCount(count + 1);
	};
	const decrement = () => {
		if (count === 1) {
			return;
		}
		setCount(count - 1);
	};

	return (
		<>
			<div className='counter d-flex flex-wrap mx-auto'>
				<div className='d-flex count'>
					<Button variant='light' className='font-size-3 btn-l' onClick={decrement}>
						-
					</Button>
					<span className='count-n'>{count}</span>
					<Button variant='light' className='font-size-3 btn-r' onClick={increment}>
						+
					</Button>
				</div>
			</div>
		</>
	);
};

export default ItemCount;
