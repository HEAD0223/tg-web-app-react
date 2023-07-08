import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Form } from './Components/Form/Form';
import { Header } from './Components/Header/Header';
import { ProductList } from './Components/ProductList/ProductList';
import { useTelegram } from './hooks/useTelegram';

function App() {
	const { tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, []);

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route index element={<ProductList />}></Route>
				<Route path={'form'} element={<Form />}></Route>
			</Routes>
		</div>
	);
}

export default App;
