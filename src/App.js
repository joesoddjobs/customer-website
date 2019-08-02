import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home/'
import { Footer, NavBar } from './components'

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <NavBar />
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
            <Footer />
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
