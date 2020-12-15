import React, { useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import './search.css'

const Search = () => {
    var history = useHistory()

    const [type, setType] = useState('')

    var search = ($event) => {
        if ($event.key === 'Enter' && $event.target.value && type) {
            history.push('/search/' + type + '-' + $event.target.value)
        } else if ($event.key === 'Enter') {
            console.error('All fields are required')
        }
    }


    var changeType = ($event) => {
        setType($event.target.value)
        // console.log(type)
    }



    return (
        <div className="form">
            <input type="text" name="search" id="search" onKeyUp={search} placeholder="Search..." />
            <div className="radios">
                <div className="field">
                    <label htmlFor="movie">Movie</label>

                    <input type="radio" name="type" id="movie" onChange={changeType} value="movie" />
                </div>
                <div className="field">
                    <label htmlFor="series">Series</label>
                    <input type="radio" name="type" id="series" onChange={changeType} value="series" />
                </div>
                <div className="field">
                    <label htmlFor="episode">Episodes</label>
                    <input type="radio" name="type" id="episode" onChange={changeType} value="episode" />
                </div>

            </div>
        </div>
    )
}

export default withRouter(Search)