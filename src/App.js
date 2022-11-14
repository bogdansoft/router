import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'
import './App.css';
import {Home} from './components/Home';
import {Cars} from './components/Cars';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [{name: 'Ford', year: '2015'}, {name: 'BMW', year: '2018'}, {
                name: 'KIA',
                year: '2013'
            }, {name: 'Mazda', year: '2010'}, {name: 'Mercedes', year: '2016'}]
        }
    }

    render() {
        return (
            <div className="app">
                <nav style={{textAlign: 'center'}}>
                    <ul style={{listStyle: 'none'}}>
                        <li style={{display: 'inline-block', marginRight: '10px'}}><NavLink to='/'>Home</NavLink></li>
                        <li style={{display: 'inline-block', marginRight: '10px'}}><NavLink to="/cars">Cars</NavLink>
                        </li>
                    </ul>
                    <hr/>
                </nav>
                <div className="container">
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/cars'>
                            <Cars cars={this.state.cars}/>
                        </Route>
                    </Switch>
                    {/* <Cars cars = {this.state.cars}/> */}
                </div>
            </div>
        )
    }
}

export default App;