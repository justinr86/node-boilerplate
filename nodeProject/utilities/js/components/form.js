import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import fetch from 'node-fetch'
import { useFormik } from 'formik'
import Input from './input'
import * as Yup from 'Yup'

const NPForm = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required')
                .nullable(),
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required')
                .nullable(),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required')
                .nullable(),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required')
                .nullable(),
            password: Yup.string()
                .required('Required')
                .nullable(),
        }),
        onSubmit: (values, { resetForm, /*setErrors,*/ setStatus /*, setSubmitting*/ }) => {
            const data = JSON.stringify(values)

            fetch('api/users/add', {
                method: 'POST',
                body: data,
                headers: { "Content-Type": "application/json" }
            }).then(json => {
                console.log(json.ok)
                if(json.ok){
                    setStatus({success:true})
                    resetForm()
                }
            })
        },
    })

    return(
        <form onSubmit={formik.handleSubmit} /*className={formClass.formGroup}*/ id="userForm">
            <Grid container direction="column" alignItems="flex-start" justify="center" spacing={2}>
                <Grid item xs={12} style={{width: '60%'}} >
                    <Input 
                        label="Username" 
                        name="username" 
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        error={formik.errors.username ? true : false}
                        fullWidth
                    />
                </Grid>    
                <Grid item sm={12} style={{width: '60%'}} >
                    <Input 
                        label="First Name" 
                        name="firstName" 
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        error={formik.errors.username ? true : false}
                        fullWidth
                    />
                    {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                </Grid>    
                <Grid item md={12} style={{width: '60%'}} > 
                    <Input 
                        label="Last Name" 
                        name="lastName" 
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        fullWidth
                    />
                </Grid>
                <Grid item lg={12} style={{width: '60%'}} >
                    <Input 
                        label="Email Address" 
                        name="email" 
                        type="email"
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        fullWidth
                    />
                </Grid>    
                <Grid item xl={12} style={{width: '60%'}} >
                    <Input 
                        label="Password" 
                        type="password" 
                        name="password" 
                        variant="filled"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit">Submit</Button>
                    <Button>Cancel</Button>
                </Grid>
            </Grid>
            
        </form>   
    )
}


export default NPForm