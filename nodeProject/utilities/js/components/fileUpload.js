import React from 'react'
import Input from '@material-ui/core/Input'
import {makeStyles} from '@material-ui/core/styles'
import Button from './button'
//import PropTypes from 'prop-types'

const getStyles = makeStyles({
    input: {
        display:"none"
    }
})

const NPFileUpload = (props) => {
    const fileUploadClass = getStyles(props)

    return (
        <div>
            <span>
                <Button component="label" name="Upload" color="#77C9D4">
                    <Input className={fileUploadClass.input} type="file"/>
                </Button>
            </span>
            <span>
            
            </span>
        </div>
    )
}

/*NPFileUpload.propTypes = {

}*/


export default NPFileUpload