import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';

// we can use just a function when we need 
// a block contains another components
export default class Users extends Component {

    InstaService = new InstaService();

    state = {
        users: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError)
    }

    onUsersLoaded = (users) => {
        this.setState({
            users, // can do this when posts: posts
            error: false,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {

        if (!arr.length) {
            return (
                <>
                </>
            );
        }

        const firstUser = arr.splice(0, 1)[0];
        const restUsers = arr.map(user => {
            const {name, altname, id, photo} = user;
            return <User src={photo} alt={altname} name={name} key={id} id={id} min/>
        });

        return (
            <div className="right">
                <User src={firstUser.photo} alt={firstUser.altname} name={firstUser.name} key={firstUser.id} id={firstUser.id}/>
                <div className="users__block">
                    {restUsers}
                </div>
            </div>
        );
        
    }

    render() {
        const {error, users, loading} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        if (loading) {
            return (
                <Spinner/>
            )
        }

        return this.renderItems(users);
    }
}