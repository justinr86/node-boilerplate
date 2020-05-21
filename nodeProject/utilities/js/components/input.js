import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = () => ({
  root: {
      '& label.Mui-focused': {
          color: "#77C9D4",
      },
      "& .MuiFilledInput-underline:after": {  
        borderBottomColor: "#77C9D4"
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: "#77C9D4",
        },
      },
      '& .MuiFilledInput-underline.Mui-error:after': {
        borderBottomColor: "#F44336"
      },
      '& label.Mui-focused.Mui-error': {
        color: "#F44336",
    },
      background: '#FFFFFF'
  }
})

const npTextField = withStyles(styles)(TextField)

npTextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default npTextField
