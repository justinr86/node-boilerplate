import Form from './form'
import Background from './background'
import Root from './root'
import {Route, Switch} from 'react-router-dom'
import React from 'react'


const App = () => {

    return(
        <Background>
            <Switch>
                <Route path="/" component={Root} exact />
                <Route path="/addUser" component={Form} />
            </Switch>
        </Background>
    )
}

export default App