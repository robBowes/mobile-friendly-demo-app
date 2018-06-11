import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.user = props.users[props.match.params.id];
    }
    render() {
        let user = this.user;
        return (
            <div>
                <table>
                    <th>{user.name}</th>
                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Address</td>
                        <td>{user.address.street}, {user.address.suite}</td>
                    </tr>
                    <tr>
                        <td>{user.address.city}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>{user.website}</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Company</td>
                        <td>{user.company.name}</td>
                    </tr>
                    <tr>
                        <td>{user.company.catchPhrase}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
});
export default connect(mapStateToProps)(Profile);
