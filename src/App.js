import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import localStore from 'store'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home/'
import CreateJob from './containers/CreateJob/'
import SignUp from './containers/SignUp/'
import WrappedSignIn from './containers/SignIn/'
import JobDetails from './containers/JobDetails/'
import JobDashboard from './containers/JobDashboard/'
import Profile from './containers/Profile'
import Info from './containers/Info'
import EditProfile from './containers/EditProfile'
import Testimonials from './containers/Testimonials'
import { Footer, NavBarSignedIn, NavBarSignedOut } from './components'

const isSignedIn = async () => {
  const store = await localStore.get('user')
  if (store) {
    const { token } = store
    return Boolean(token)
  }
  return false
}

class App extends Component {
  state = {
    signedIn: false
  }

  componentDidMount = () => {
    isSignedIn()
      .then(res => this.setState({ signedIn: res }))
      .catch(() => alert('An error occurred'))
  }

  render() {
    const { signedIn } = this.state
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            {signedIn ? <NavBarSignedIn /> : <NavBarSignedOut />}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/create-job" component={CreateJob} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/sign-in" component={WrappedSignIn} />
              <Route path="/job-details" component={JobDetails} />
              <Route path="/create-job" component={CreateJob} />
              <Route path="/job-dashboard" component={JobDashboard} />
              <Route path="/edit-profile" component={EditProfile} />
              <Route path="/profile" component={Profile} />
              <Route path="/info" component={Info} />
              <Route path="/testimonials" component={Testimonials} />
            </Switch>
            <Footer />
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
