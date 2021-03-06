import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import * as yup from 'yup'
import { makeStyles } from '@material-ui/core/styles'
import { Alert } from '@material-ui/lab'
import { addDepartement } from '../../../redux/slices/Departement.slice'

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
		padding: '32px',
		backgroundColor: '#F7FAFB',
	},
	alert: {
		margin: '8px 0',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))
const validationSchema = yup.object({
	nom: yup
		.string('Enter  Name of departement')
		.min(3, 'Nom should be of minimum 3 characters length')
		.required('Nom is required'),
	responsable: yup
		.string('Enter your responsable Name')
		.min(3, 'responsable Name should be of minimum 3 characters length')
		.required('responsable Name is required'),
	activite: yup
		.string('Enter your Activite Name')
		.min(3, 'Activite Name should be of minimum 3 characters length')
		.required('Activite Name is required'),
})
function AddDepartement(props) {
	const classes = useStyles()
	const dispatch = useDispatch()
	const { Errors } = useSelector((state) => state.departement)
	console.log(Errors)
	const formik = useFormik({
		initialValues: {
			nom: '',
			responsable: '',
			activite: '',
		},
		validationSchema,
		onSubmit: (values) => {
			dispatch(addDepartement(values))
		},
	})
	const handelClose = () => {
		props.close()
	}
	return (
		<Card className={classes.root}>
			<Box my={2}>
				<Button
					variant='contained'
					size='small'
					color='secondary'
					onClick={handelClose}
				>
					{' '}
					X{' '}
				</Button>
			</Box>
			{Errors && (
				<Alert className={classes.alert} severity='error'>
					{Errors}
				</Alert>
			)}
			<form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField
							variant='outlined'
							required
							fullWidth
							id='nom'
							label='Nom'
							name='nom'
							autoComplete='nom'
							value={formik.values.nom}
							onChange={formik.handleChange}
							error={formik.touched.nom && Boolean(formik.errors.nom)}
							helperText={formik.touched.nom && formik.errors.nom}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant='outlined'
							required
							fullWidth
							id='responsable'
							label='responsable'
							name='responsable'
							autoComplete='responsable'
							value={formik.values.responsable}
							onChange={formik.handleChange}
							error={
								formik.touched.responsable && Boolean(formik.errors.responsable)
							}
							helperText={
								formik.touched.responsable && formik.errors.responsable
							}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant='outlined'
							required
							fullWidth
							id='activite'
							label='activite'
							name='activite'
							autoComplete='activite'
							value={formik.values.activite}
							onChange={formik.handleChange}
							error={formik.touched.activite && Boolean(formik.errors.activite)}
							helperText={formik.touched.activite && formik.errors.activite}
						/>
					</Grid>
				</Grid>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					color='primary'
					className={classes.submit}
				>
					Add
				</Button>
			</form>
		</Card>
	)
}

export default AddDepartement
