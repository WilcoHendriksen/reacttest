import React, { Component } from 'react'
import { AppContext } from './AppProvider'

class User extends Component {
    constructor(props) {
        super(props)

        console.log(this.props)
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.props.match.params.username}</h1>
                <AppContext.Consumer>
                    {(context) => (
                        <div>
                            Some text: {context.test}
                            <h1>{context.number}</h1>
                        <button onClick={context.inc}>plus</button>
                            <button onClick={context.sub}>min</button>
                        </div>
                    )}
                </AppContext.Consumer>
            </div>
        )
    }

}

export default User;