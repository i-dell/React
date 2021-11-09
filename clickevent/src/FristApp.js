import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

   <div id="root"></div>

    <script type="text/babel">
      // React code will go here
      // ReactDOM.render(<h1>My First App</h1>, document.getElementById("root"))
         class App extends React.Component {

        render(){
            return <h1>My First React App</h1>
        }
    }
    ReactDOM.render(<App />, document.getElementById('root'))
