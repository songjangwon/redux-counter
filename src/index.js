import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// Redux 관렦 불러오기
import { createStore } from 'redux'
import reducers from './reducers';
import { Provider } from 'react-redux';
// 스토어 생성
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));