import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Navbar } from './navbar';
import { SideNav } from './sidenav';
import Footer from './footer';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            userData:{},
            error:null,
            loading:true
        }
    }

    onChangeHandler = (e) => {
        const { id,value } = e.target;
        console.log(value,id)
        this.setState({
            userData:{ ...this.state.userData, [id]:value }
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
    }
    componentDidMount(){
        !localStorage.getItem("token") ? this.props.history.push("/login") : console.log('Authenticate Token Action');
        this.setState({
            userData: {...this.state.userData,...this.props.authData}
        });
    }
    render(){
        const { userData } = this.state;
        return (
            <div className="profiler">
                <Navbar/>
                <div className="row">
                    <SideNav/>
                    <div className="col s12 m8 l9 profile">
                        <form onSubmit={this.onSubmit} className="">
                            <div className="row">
                                <div className="container">
                                    <h4 >Profile</h4>
                                    <div className="input-field">
                                        <label htmlFor="firstname">Firstname</label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            onChange={this.onChangeHandler}
                                            value={userData.firstname} />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="lastname">Lastname</label>
                                        <input
                                            type="text"
                                            id="lastname"
                                            onChange={this.onChangeHandler}
                                            value={userData.lastname} />
                                    </div>
                                    <div className="input-field">
                                        <p>Gender</p>
                                        <ul>
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        id="gender"
                                                        value="Male"
                                                        className="with-gap"
                                                        onChange={this.onChangeHandler}
                                                        checked={userData.gender === 'Male'} />
                                                    <span>Male</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        id="gender"
                                                        value="Female"
                                                        className="with-gap"
                                                        onChange={this.onChangeHandler}
                                                        checked={userData.gender === 'Female'} />
                                                    <span>Female</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        id="gender"
                                                        value="prefere not to answer"
                                                        className="with-gap"
                                                        onChange={this.onChangeHandler}
                                                        checked={userData.gender === "Prefere not to answer" } />
                                                    <span>Prefere not to answer</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="birthday">Birth date</label>
                                        <input
                                            type="date"
                                            id="birthdate"
                                            onChange={this.onChangeHandler}
                                            value={userData.birthdate} />
                                    </div>
                                    <div className="input-field col s12 m8 l5">
                                        <select>
                                        <option value="2" >Rwanda</option>
                                        <option value="1">Congo</option>
                                        </select>
                                        <label>Country</label>
                                    </div>
                                    <div className="input-field col s12 m8 l5">
                                        <select>
                                        <option value="2" >Kigali</option>
                                        <option value="1">Ruhango</option>
                                        </select>
                                        <label>City</label>
                                    </div>
                                </div>
                                <div className="container">
                                    <div>
                                        <ul>
                                            <li>
                                                <div className="user-view">
                                                    <div className="background center">
                                                        <i className="large  material-icons">account_circle</i>
                                                    </div>
                                                    <p className="center name">John Doe</p>
                                                    <p className="center email">JohnDoe@gmail.com</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="telephone">Telephone</label>
                                        <input
                                            type="tel"
                                            id="telephone"
                                            onChange={this.onChangeHandler}
                                            value={userData.telephone}/>
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="bio">Bio</label>
                                        <textarea
                                            type="date"
                                            id="bio"
                                            onChange={this.onChangeHandler}
                                            value={userData.bio}>
                                        </textarea>
                                    </div>
                                    <div className="input-field col s12 m8 l5">
                                        <select>
                                        <option value="2" >French</option>
                                        <option value="1">Swahili</option>
                                        </select>
                                        <label>Language</label>
                                    </div>
                                    <div className="input-field col s12 m8 l5">
                                        <select>
                                        <option value="2" >USD</option>
                                        <option value="1">RWF</option>
                                        </select>
                                        <label>Currency</label>
                                    </div>
                                </div>
                            </div>
                            <div className="center">
                                <button onClick={this.onSubmit} className="btn blue darken-3 waves-effect waves-light">SAVE</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const dummy = {
    firstname:'kwizera',
    lastname:"christophe",
    bio:"love basketball",
    gender:"Male",
    birthdate:"2020-06-11",
    telephone:'250784824295'
}

const mapStateToProps = (state) => ({
    authData : state.loginData || dummy
});

export default connect(mapStateToProps)(Profile)
