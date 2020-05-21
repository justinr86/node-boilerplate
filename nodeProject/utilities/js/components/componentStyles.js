import {makeStyles} from '@material-ui/core/styles'

const style = makeStyles({
    textField:{
        root: {
            '& label.Mui-focused': {
                color: "#77C9D4",
            },
            '& .MuiFilledInput-underline:after': {  
                borderBottomColor: "#77C9D4"
            },
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor: "#77C9D4",
                },
            },
            background: '#FFFFFF'
        },
        container: {
            paddingLeft: '10px',
        }
    }
})

export default style