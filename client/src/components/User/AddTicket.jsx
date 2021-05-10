import React from 'react'
import { useFormik } from 'formik'
import {addTicket} from '../../redux/slices/Ticket.slice'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
// import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import MenuItem from '@material-ui/core/MenuItem'
import Link from '@material-ui/core/Link'
import * as yup from 'yup'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}))

const validationSchema = yup.object({
	titre: yup
		.string('Enter your titre')
		.min(3, 'titre should be of minimum 3 characters length')
		.required('titre is required'),
	type: yup
		.string('Enter your type')
		.min(3, 'type should be of minimum 3 characters length')
		.required('type is required'),
	description: yup
		.string('Enter your Message')
		.min(10, 'Message should be of minimum 10 characters length')
		.required('Message is required'),
	urgence: yup.mixed().oneOf(['urgent', 'normal', 'tres urgent']),
})
export default function Register() {
	const classes = useStyles()
	const history = useHistory()
	const { addMessage } = useSelector((state) => state.tickets)
	const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: {
			titre: '',
			type: '',
			description: '',
			urgence: '',
		},
		validationSchema,
		onSubmit: (values) => {
		 dispatch(addTicket(values)) && history.push('/dashboard/user')
		},
	})
	return (
		<>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div className={classes.paper}>
					<form
						className={classes.form}
						onSubmit={formik.handleSubmit}
						noValidate
					>
						{addMessage && <Alert color='error'>{addMessage}</Alert>}
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='titre'
									label='Titre'
									name='titre'
									autoComplete='titre'
									value={formik.values.titre}
									onChange={formik.handleChange}
									error={formik.touched.titre && Boolean(formik.errors.titre)}
									helperText={formik.touched.titre && formik.errors.titre}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='type'
									label='type'
									name='type'
									autoComplete='type'
									value={formik.values.type}
									onChange={formik.handleChange}
									error={formik.touched.type && Boolean(formik.errors.type)}
									helperText={formik.touched.type && formik.errors.type}
								/>
							</Grid>

							<Grid item xs={12} sm={6}>
								<TextField
									variant='outlined'
									required
									fullWidth
									name='urgence'
									label='urgence'
									select
									id='urgence'
									autoComplete='urgence'
									value={formik.values.urgence}
									onChange={formik.handleChange}
									error={
										formik.touched.urgence && Boolean(formik.errors.urgence)
									}
									helperText={formik.touched.urgence && formik.errors.urgence}
								>
									<MenuItem value="normal">normal</MenuItem>
									<MenuItem value="urgent">urgent</MenuItem>
									<MenuItem value="tres urgent">tres urgent</MenuItem>
								</TextField>
							</Grid>
								<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									multiline
									rows={7}
									rowsMax={10}
									id='message'
									label='Message'
									name='description'
									autoComplete='message'
									value={formik.values.message}
									onChange={formik.handleChange}
									error={formik.touched.message && Boolean(formik.errors.message)}
									helperText={formik.touched.message && formik.errors.message}
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
							Add ticket
						</Button>
					</form>
				</div>
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
		</>
	)
}

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}.
		</Typography>
	)
}
