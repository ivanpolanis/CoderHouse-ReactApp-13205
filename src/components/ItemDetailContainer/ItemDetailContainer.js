import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'
import { db } from '../../firebase'

const ItemDetailContainer = () => {
	const [item, setItem] = useState({})
	const [isLoading, setIsLoading] = useState(false)

	const { id } = useParams()

	const getItem = async (id) => {
		db.collection('items')
			.doc(id)
			.onSnapshot((item) => {
				setItem({ ...item.data(), id: id })
				setIsLoading(false)
			})
	}

	useEffect(() => {
		setIsLoading(true)
		getItem(id)
	}, [id])

	return (
		<div>{isLoading ? <Loader /> : <ItemDetail key={id} item={item} />}</div>
	)
}
export default ItemDetailContainer
