import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './detail.css'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'

const Detail = (props) => {
    var history = useHistory()

    const search = useSelector(state => state.search)
    const add = useSelector(state => {
        if (search.Type === 'movie') {
            let movies = state.movies
            movies = movies.filter(item => item.imdbID === search.imdbID)
            console.log('movies', movies, !!movies.length)
            return !!movies.length
        }
        else if (search.Type === 'series') {
            let series = state.series
            series = series.filter(item => item.imdbID === search.imdbID)
            console.log('series', series, !!series.length)
            return !!series.length
        }
        else {
            let episodes = state.episodes
            episodes = episodes.filter(item => item.imdbID === search.imdbID)
            console.log('episodes', episodes, !!episodes.length)
            return !!episodes.length
        }

    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (props.match.path.split('/')[1] === 'search') {
            var ids = props.match.params.id.split('-')
            fetchData(ids[0], ids[1])
        } else {
            fetchDetails(props.match.params.id)
        }
    })

    useEffect(() => {
        return () => {
            console.log("unmount");
            dispatch({ type: 'DELETE_SEARCH' })
        };
    });


    var fetchData = async (type, title) => {
        console.log('Detail,', title)
        let value = await Axios.get(`http://www.omdbapi.com/?apikey=88314451&t=${title}&type=${type}`).then(res => res.data)
        dispatch({ type: 'SEARCH_TITLE', value })
    }
    var fetchDetails = async (title) => {
        console.log('Detail,', title)
        let value = await Axios.get(`http://www.omdbapi.com/?apikey=88314451&i=${title}`).then(res => res.data)
        dispatch({ type: 'SEARCH_TITLE', value })
    }

    var addToWatched = () => {
        history.push('/MyContent')
        let payload = {
            data: search,
            type: search.Type
        }
        dispatch({ type: 'ADD_WATCHED', value: payload })
        console.log(payload)
    }


    return (
        <div className="detail">
            <div className="item">
                {search.Title ? (
                    <>
                        <div className="image">
                            <img src={search.Poster} alt="poster" />
                        </div>
                        <div className="info">
                            <p className='title'>
                                {search.Title}
                                {
                                    (props.match.path.split('/')[1] === 'search') ? (!add ? (
                                        <button className="addToWatched" onClick={() => addToWatched()}>+</button>
                                    ) : (
                                            <p className="already">Already in my content</p>
                                        )) : null
                                }
                            </p>
                            <p className="description">{search.Plot}</p>
                            <p ><strong style={{ color: '#2962ff' }}>Actors </strong> : {search.Actors}</p>
                        </div>
                    </>

                ) :
                    (
                        <div className="error">There is no result with the title : {props.match.params.id}</div>
                    )

                }

            </div>
        </div>
    )
}

export default Detail