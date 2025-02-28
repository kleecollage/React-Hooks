import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainApp } from './09-useContext/MainApp';
import './index.css'
import { BrowserRouter } from "react-router-dom";
// import { TodoApp } from './08-useReducer/TodoApp';
// import './08-useReducer/intro-reducer'
// import { Padre } from './07-tarea-memo/Padre';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp.jsx';
// import CounterApp from './01-useState/CounterApp.jsx';
// import { CallbackHook } from './06-memos/CallbackHook';


ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<MainApp/>
	</BrowserRouter>
);