import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/Router';
import {LangProvider} from './context/langContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<LangProvider>
		<Router />
	</LangProvider>
)