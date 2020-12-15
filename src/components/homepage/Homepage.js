import React, { Component } from 'react'
import './Homepage.css'
import Search from '../search/search'

class Homepage extends Component {


    render() {

        return (
            <div className="homepage">
                <div className="search">
                    <Search></Search>
                </div>
            </div>
        )
    }

}

export default Homepage;