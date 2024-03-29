import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Form from './Form.jsx';
import Items from './Items.jsx';

const setLocalStorage = (items) => {
	localStorage.setItem('list', JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');
const App = () => {
	const [items, setItems] = useState(defaultList);

	const addItem = (itemName) => {
		const newItem = {
			name: itemName,
			completed: false,
			id: nanoid(),
		};
		const newItems = [...items, newItem];
		setItems(newItems);
		setLocalStorage(newItems);
		toast.success('add item to the list');
	};
	const removeItem = (itemId) => {
		const newItems = items.filter((item) => item.id !== itemId);
		setItems(newItems);
		setLocalStorage(newItems);
		toast.success('item remove');
	};
	const editItem = (itemId) => {
		const newItems = items.map((item) => {
			if (item.id == itemId) {
				const newItem = { ...item, completed: !item.completed };
				return newItem;
			}
			return item;
		});
		setItems(newItems);
		setLocalStorage(newItems);
	};

	return (
		<section className="section-center">
			<Form addItem={addItem} />
			<Items
				items={items}
				removeItem={removeItem}
				editItem={editItem}
			/>
			<ToastContainer position="top-center" />
		</section>
	);
};

export default App;
