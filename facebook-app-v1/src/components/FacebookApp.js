import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NotFound from './NotFound'
import WalkerCamry from './make/toyota/district/mi-oh-ky-tn/dealers/Walker/vehicles/camry/home/WalkerCamry'
import Backend from './backend/Backend'
import './style.css'


class FacebookApp extends React.Component {

  render() {
    {/* set state for app here, pull from firebase, passes everything to app from here, reads from db */}
    {/* set state, comp will mount run setup, if district and dealer is the same the use distct else use dealer, swap not found*/}
    return(
      <div>
      <main>
        <Switch>
          <Route exact path='/' component={WalkerCamry} />
            {/* WalkerToyota */}
            <Route
            path='/walker/camry'
            render={(props) => <WalkerCamry {...props} test={'hello'} />}
             />
           <Route path='/Autogy/Backend' component={Backend} />
          {/* <Route path='/roster' component={Roster} /> */}
        </Switch>
      </main>
      </div>
    )
  }
}

export default FacebookApp
