import React, { Component } from 'react'

//context
export const AppContext = React.createContext()
// provider
export class AppProvider extends Component {

  state = {
    number: 10,
    test: "qwerty",
    inc: async () => {
        this.setState({number: this.state.number + 1})
    },
    sub: async () => {
        this.setState({number: this.state.number - 1})
    }
  }

  render() {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }

}

