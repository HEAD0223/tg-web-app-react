import { useEffect } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { useTelegram } from './Components/hooks/useTelegram';

function App() {
	const { tg, onToggleButton } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, []);

	return (
		<div className="App">
			<Header />
			<button onClick={onToggleButton}>Toggle</button>
		</div>
	);
}

export default App;
