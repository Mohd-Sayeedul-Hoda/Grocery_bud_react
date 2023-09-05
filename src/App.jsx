import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Form from './Form.jsx';
import Items from './Items.jsx';

const App = () => {
	const [items, setItems] = useState([]);

	const addItem = (itemName) => {
		const newItem = {
			name: itemName,
			completed: false,
			id: nanoid(),
		};
		setItems([...items, newItem]);
	};
	const removeItem = (itemId) => {
		const newItems = items.filter((item) => item.id !== itemId);
		setItems(newItems);
	};
	return (
		<section className="section-center">
			<Form addItem={addItem} />
			<Items
				items={items}
				removeItem={removeItem}
			/>
			<ToastContainer position="top-center" />
		</section>
	);
};

export default App;
