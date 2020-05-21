import React from 'react'
import Container from '@material-ui/core/Container'
import PropTypes from 'prop-types'
import NavBar from './navBar'


const NPBackground = (props) => {
        return (
            <div>
                <NavBar/>
                <Container style={{ minHeight: '100vh'}}>
                    {props.children}
                </Container>
            </div>    
        )
}

NPBackground.propTypes = {
    children: PropTypes.node
}

export default NPBackground
