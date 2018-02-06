import React, { Component } from 'react';
import axios from 'axios';

import Artistlist from './artistlist';

class Home extends Component { 

    state = {
        artists:[]
    }

    componentWillMount() {
        axios.get("http://localhost:3004/artists")
        .then(response =>{
           this.setState({
               artists:response.data
           })
        })
    }

    render(){
        return (
            <div>
                <Artistlist artists={this.state.artists}/>
            </div>
        )
    }
    
}

export default Home;