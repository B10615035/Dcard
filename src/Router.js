import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from 'components/App';
import ScenicSpots from 'components/ScenicSpots';
import NotFound from 'components/NotFound';
import ChooseCity from 'components/ChooseCity'
import {cityListEn} from 'constants/cityList'

class Router extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/Home" exact component={App}></Route>
                    <Route path="/scenicSpot" exact component={ScenicSpots}></Route>
                    <Route path="/chooseCity" exact component={ChooseCity}></Route>
                    {
                    cityListEn.map((item, index) => {
                        return <Route key={index} path={"/scenicSpot/" + item} component={ScenicSpots}></Route>
                    })
                    }
                    <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;