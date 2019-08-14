import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home/'
import CreateJob from './containers/CreateJob/'
import SignUp from './containers/SignUp/'
import WrappedSignIn from './containers/SignIn/'
import { Footer, NavBar } from './components'

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/create-job" component={CreateJob} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/sign-in" component={WrappedSignIn} />
            </Switch>
            <Footer />
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
