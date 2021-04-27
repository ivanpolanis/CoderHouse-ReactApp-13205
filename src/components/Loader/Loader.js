import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
	return (
		<div className='spinner'>

			<Spinner animation='border' role='status'>
				<span className='sr-only'>Loading...</span>
			</Spinner>

			<div className="loading-text">
				<p>Loading...</p>
			</div>
		</div>
	);
}

export default Loader;
