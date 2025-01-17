import { component$, useStyles$ } from '@builder.io/qwik';
import {
	QwikCity,
	RouterOutlet,
	ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import styles from './global.css?inline';

export default component$(() => {
	useStyles$(styles);
	return (
		<QwikCity>
			<head>
				<meta charSet='utf-8' />
				<RouterHead />
			</head>
			<body lang='en'>
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCity>
	);
});
