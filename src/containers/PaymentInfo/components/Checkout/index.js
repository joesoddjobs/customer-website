import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PaypalExpressBtn from 'react-paypal-express-checkout'
import { Container, Spacer, ButtonContainer } from './styles'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}))

const Checkout = () => {
  const classes = useStyles()

  const onSuccess = payment => {
    // Congratulation, it came here means everything's fine!
    console.log('The payment was succeeded!', payment)
    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  }

  const onCancel = data => {
    // User pressed "cancel" or close Paypal's popup!
    console.log('The payment was cancelled!', data)
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  }

  const onError = err => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log('Error!', err)
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  }

  const env = 'sandbox' // you can set here to 'production' for production
  const currency = 'USD' // or you can set this value from your props or state
  const total = 1

  const client = {
    sandbox: 'YOUR-SANDBOX-APP-ID',
    production: 'YOUR-PRODUCTION-APP-ID'
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>

          <React.Fragment>
            <Container>
              <Typography variant="h5" gutterBottom>
                Estimated Job Time: 4 hours
              </Typography>
              <Typography variant="h5" gutterBottom>
                Estimated Job Cost: $80
              </Typography>
              <Spacer />
              <Typography variant="subtitle1">
                Job price estimates reflect the time estimate provided in the
                job request. Jobs which take longer or shorter time periods will
                differ in cost accordingly.
              </Typography>
            </Container>
            <ButtonContainer>
              <Button className={classes.button}>Back</Button>
              <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
              />
            </ButtonContainer>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  )
}

export default Checkout
