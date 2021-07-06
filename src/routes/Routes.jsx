import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import Succes from '../containers/Succes'
import NotFound from '../containers/NotFound'

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/chekout/information" component={Information} />
      <Route exact path="/checkout/payment" component={Payment} />
      <Route exact path="/checkout/success" component={Succes} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default routes
