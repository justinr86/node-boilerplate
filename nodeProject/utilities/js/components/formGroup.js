import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'


const getStyles = makeStyles({
    root: {
        flexDirection: 'row',
        padding: '10px',
        margin: '5px'
    }
})

const NPFormGroup = (props) => {
    const formGroupClass = getStyles(props)
    return (
        <div>
            <FormGroup className={formGroupClass.root}>
                {props.children}
            </FormGroup>
        </div>                  
    )
}

NPFormGroup.propTypes = {
    children: PropTypes.node
  }

export default NPFormGroup