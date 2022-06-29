import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
// Import Materialize
import M from "materialize-css";

class App extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row center-align">
                        <div className="col s12 m7">
                            <div className="card">
                                <div className="card-title">
                                    <div className="row" >Åka Tåg</div>
                                    <div className="row">
                                        <div>
                                            <span className="left-align">Stockholm</span>
                                        </div>
                                        <div>
                                            <span className="center-align">&rarr;</span>
                                        </div>
                                        <div>
                                            <span className="right-align">Göteborg</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="card-content">
                                    <form>
                                        <div className="row">
                                            <div className="col s6 left-align">
                                                <label>
                                                    <input name="group1" type="radio" defaultChecked />
                                                    <span>2:a klass</span>
                                                </label>
                                            </div>
                                            <div className="col s6 left-align">
                                                <label>
                                                    <input name="group1" type="radio" />
                                                    <span>1:a klass</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col s6">
                                                <div className="col s12 left-align">
                                                    <label>Antal biljetter</label>
                                                    <select defaultValue="1" className="browser-default">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="col s6">
                                                <div className=" col s12 left-align">
                                                    <label>Titel</label>
                                                    <select defaultValue="Ms." className="browser-default">
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Mr.">Mr.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>

                                                </div>

                                            </div>

                                            <div className="col s12">
                                                <div className="input-field col s9">
                                                    <input placeholder="Greta" id="first_name" type="text" className="validate" />
                                                    <label htmlFor="Förnamn">Förnamn</label>
                                                </div>
                                            </div>
                                            <div className="col s12 " >
                                                <div className="input-field col s9 center-align">
                                                    <input placeholder="Thunberg" id="last_name" type="text" className="validate" />
                                                    <label htmlFor="Efternamn">Efternamn</label>
                                                </div>

                                            </div>
                                            <div className="col s12">
                                                <div className="chckbox col s 9 left-align">
                                                    <label>
                                                        <input type="checkbox" className="filled-in" />
                                                        <span>Godkänner villkoren</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col s12">
                                                <a className="waves-effect waves-light btn">Boka biljetter</a>
                                            </div>

                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
