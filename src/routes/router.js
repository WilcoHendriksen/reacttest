import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'




export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login}/>
            <Route path="/logout" component={Logout}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
)