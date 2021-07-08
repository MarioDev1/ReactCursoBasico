//Imports de REACT

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Imports de paginas
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetails from '../pages/BadgeDetailsContainer'
//Imports de componentes

import Layout from './Layout';

//Imports de imagenes y Styles

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
					<Route exact path="/badges/:badgeId" component={BadgeDetails} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
