import { Switch, Route } from 'react-router';
import React from 'react';
import withPage from './with-page/with-page';

const home = withPage('Home', (): React.ReactElement => <></>);
const lessen = withPage('Lessen', (): React.ReactElement => <></>);
const toetsen = withPage('Toetsen', (): React.ReactElement => <></>);
const notFound = withPage('404 Not found', (): React.ReactElement => <></>);

const Content: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={'/'} component={home} />
      <Route exact path={'/lessen'} component={lessen} />
      <Route exact path={'/toetsen'} component={toetsen} />
      <Route component={notFound} />
    </Switch>
  );
};
export default Content;
