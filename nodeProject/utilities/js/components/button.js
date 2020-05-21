import React from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const getStyles = makeStyles({
    root: {
        background: (props) => props.color,
        color: 'white',
        border: 0,
        borderRadius: 5,
        padding: '10px 20px',
        margin: '10px',
        '&:hover': {
            background: '#57BC90',
        },
    }
})

const NPButton = (props) => {
    const buttonClass = getStyles(props)
    return (
        <Button className={buttonClass.root} component={props.component}>
            {props.name}
            {props.children}    
        </Button>
    )
}

NPButton.propTypes = {
    name: PropTypes.string,
    component: PropTypes.string,
    children: PropTypes.node
}


export default NPButton