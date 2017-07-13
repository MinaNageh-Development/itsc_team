import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import  headertext from './src/component/header';

const RouterComponent = () => {
	return (
        <Router>
           <Scene key="Main" Component={headertext}title="Please chose car" />
        </Router>
		);

};

export default RouterComponent;
