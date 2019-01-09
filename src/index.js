import React from 'react';
import ReactDOM from 'react-dom';
import 'style/index.css';
import App from './components';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
