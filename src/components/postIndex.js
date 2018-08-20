import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component{

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts(){
        console.log(this.props);
        return _.map(this.props.posts, post => {
            console.log('POST', post);
            return (
              <li className="list-group-item" key={post.id}> 
                {post.title}
              </li>
            );
        })
    }

    render() {
        {console.log(this.props)}
        return(
            
            <div>
                <h3>Posts</h3>
                <ul className = "list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log("S", state);
    return {posts: state.props};
}


export default connect(mapStateToProps, {fetchPosts})(PostsIndex);