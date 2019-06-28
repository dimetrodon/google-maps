/* Packages */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* App imports */
import AppLayout from '../Layout/AppLayout';
import MapContainer from '../Map/MapContainer';
import HomeContainer from '../Home/HomeContainer';
import ContactUsContainer from '../SimpePages/ContactUsContainer';
import TermsContainer from '../SimpePages/TermsContainer';

const LayoutedRoute = ({
  component: RenderComponent,
  layoutProps,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => (
      <AppLayout {...layoutProps}>
        <RenderComponent {...props} />
      </AppLayout>
    )}
  />
);

const Router = () => (
  <main>
    <Switch>
      <LayoutedRoute exact path="/" component={HomeContainer} />
      <LayoutedRoute exact path="/map" component={MapContainer} />
      <LayoutedRoute exact path="/contact-us" component={ContactUsContainer} />
      <LayoutedRoute exact path="/terms" component={TermsContainer} />
    </Switch>
  </main>
);

export default Router;
