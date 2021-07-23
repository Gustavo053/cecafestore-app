import React from 'react';

import Routes from './src/routes';
import { WebView } from 'react-native-webview';

export default function App() {
	const url = 'http://localhost:8080/';
	// return <Routes />;
	return <WebView source={{ uri: url }} />;
}
