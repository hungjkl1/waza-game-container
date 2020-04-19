/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { IonPhaser } from '@ion-phaser/react'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import Game1 from '../../components/game1'
import background from '../../components/game1/assets/background.png';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path='/game1' render={() => <IonPhaser game={Game1} initialize={true}> </IonPhaser>}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
