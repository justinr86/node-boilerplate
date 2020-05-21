import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom'
import App from './utilities/js/components/App'
/*import Background from './utilities/js/components/background'
import Form from './utilities/js/components/form'*/

import './utilities/css/style.css'

/*ReactDOM.render(<Background>
                    <Form/>
                </Background>, document.querySelector('#reactDiv'))*/

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('reactDiv')
)