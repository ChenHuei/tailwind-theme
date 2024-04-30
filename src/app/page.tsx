'use client';
import { useState } from 'react';
import Card from '@/components/Card';

const getDefaultLocalStorageTheme = () => {
	const selectedTheme = localStorage.getItem('theme');
	const theme = selectedTheme
		? selectedTheme
		: window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
	localStorage.setItem('theme', theme);
	return theme;
};
export default function Home() {
	const [theme, setTheme] = useState(getDefaultLocalStorageTheme());

	return (
		<main className={`${theme} grid place-content-center min-h-screen p-2`}>
			<div className="p-4 bg-black text-white invert">
				<div className="mb-2">Theme:</div>
				{['dark', 'light', 'red'].map((item) => (
					<button
						key={item}
						className="bg-stone-700 rounded mr-4 py-2 px-4 transition-opacity hover:opacity-80"
						onClick={() => {
							localStorage.setItem('theme', item);
							setTheme(item);
						}}>
						{item}
					</button>
				))}
			</div>
			<Card />
		</main>
	);
}
