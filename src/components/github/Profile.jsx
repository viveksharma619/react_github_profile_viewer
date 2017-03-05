import React, {Component} from 'react';
import Repolist from './Repolist.jsx';

class Profile extends Component{
    render(){
        if(this.props.userData.email == null){
            var email = 'User has not made his/her email public';
        }
        else{
            var email = this.props.userData.email ;
        }
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.userData.name}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={this.props.userData.avatar_url} alt="" className="thumbnail" style= {{width: "100%"}} />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="label label-primary">{this.props.userData.public_repos} Repos</span>
                                    <span className="label label-success">{this.props.userData.public_gists} Public Gists</span>
                                    <span className="label label-info">{this.props.userData.followers} Followers</span>
                                    <span className="label label-danger">{this.props.userData.following} Following</span>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-group">
                                        <li className="list-group-item"><strong>Username: </strong>{this.props.userData.login}</li>                                                      
                                        <li className="list-group-item"><strong>Location: </strong>{this.props.userData.location}</li> 
                                        <li className="list-group-item"><strong>Email Address: </strong>{email}</li>
                                    </ul>
                                </div>
                            </div>
                            <br/>
                            <a href={this.props.userData.html_url} target="_blank" className="btn btn-danger">Visit Github Profile</a>
                        </div>
                    </div>
                    <hr/>
                    <h3>User Repositories</h3>
                    <Repolist userRepo={this.props.userRepo}/>
                </div>
            </div>
        )
    }
}

export default Profile