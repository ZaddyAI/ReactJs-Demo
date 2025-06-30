import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>
    // The Provider component makes the Redux store available to the App component
    // This allows us to use the Redux store in our components
    // The store is passed as a prop to the Provider component

    <Provider store={store}

    >
        <App />
    </Provider>
);
