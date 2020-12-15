import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './MyContent.css'
import { Link } from 'react-router-dom'

const MyContent = (props) => {

    const movies = useSelector(state => {
        if (props.match.path.split('/')[1] === 'MyContent')
            return state.movies.filter(item => {
                return !item.watched
            })
        else
            return state.movies.filter(item => {
                return item.watched
            })

    })
    const series = useSelector(state => {
        if (props.match.path.split('/')[1] === 'MyContent')
            return state.series.filter(item => {
                return !item.watched
            })
        else
            return state.series.filter(item => {
                return item.watched
            })
    })
    const episodes = useSelector(state => {
        if (props.match.path.split('/')[1] === 'MyContent')
            return state.episodes.filter(item => {
                return !item.watched
            })
        else
            return state.episodes.filter(item => {
                return item.watched
            })
    })

    const dispatch = useDispatch()

    console.log(movies, episodes, series)

    var deleteContent = (index, type) => {
        console.log(index, type)
        dispatch({ type: 'REMOVE_WATCHED', value: { index, type } })
    }

    var changeSavedSatus = (status, index, type) => {
        console.log(status, index, type)
        dispatch({ type: 'UPDATE_STATUS', value: { status, index, type } })
    }

    var detailPage = (id) => {
        console.log(id)
        // history.push('/detail/' + id)
    }


    const moviesList = movies && movies.length ? movies.map((item, index) => {
        return (
            <div className="item" key={index}>

                <div className="image">
                    <img src={item.Poster} alt="Poster" />
                </div>

                <div className="info">
                    <p className="title">
                        <strong><Link to={`/detail/${item.imdbID}`}>{item.Title}</Link></strong>
                    </p>
                    <p className="description">{item.Plot}</p>
                </div>

                <div className="buttons">
                    <button className="delete" onClick={() => deleteContent(index, item.Type)}>x</button>
                </div>

                <div className="saved">
                    <input type="checkbox" name="saved" id={index} checked={item.watched} onChange={() => changeSavedSatus(item.watched, index, item.Type)} />
                </div>

            </div>
        )
    }) : (<div className="error">There is no result to display</div>)


    const seriesList = series.length ? series.map((item, index) => {
        return (
            <div className="item" key={index}>

                <div className="image">
                    <img src={item.Poster} alt="Poster" />
                </div>

                <div className="info">
                    <p className="title" onClick={detailPage(item.imdbID)}>
                        <strong>{item.Title}</strong>
                    </p>
                    <p className="description">{item.Plot}</p>
                </div>

                <div className="buttons">
                    <button className="delete" onClick={() => deleteContent(index, item.Type)}>x</button>
                </div>

                <div className="saved">
                    <input type="checkbox" name="saved" id={index} checked={item.watched} onChange={() => changeSavedSatus(item.watched, index, item.Type)} />
                </div>

            </div>
        )
    }) : (<div className="error">There is no result to display</div>)


    const episodesList = episodes.length ? episodes.map((item, index) => {
        return (
            <div className="item" key={index}>

                <div className="image">
                    <img src={item.Poster} alt="Poster" />
                </div>

                <div className="info">
                    <p className="title" onClick={detailPage(item.imdbID)}>
                        <strong>{item.Title}</strong>
                    </p>
                    <p className="description">{item.Plot}</p>
                </div>

                <div className="buttons">
                    <button className="delete" onClick={() => deleteContent(index, item.Type)}>x</button>
                </div>

                <div className="saved">
                    <input type="checkbox" name="saved" id={index} checked={item.watched} onChange={() => changeSavedSatus(item.watched, index, item.Type)} />
                </div>

            </div>
        )
    }) : (<div className="error">There is no result to display</div>)



    return (
        <div className="MyContent">
            {
                (props.match.path.split('/')[1] === 'MyContent' || props.match.path.split('/')[1] === 'movies') ?
                    (<div className="movies">
                        <p>Movies {`>`}  <Link to='/movies'><small style={{ color: 'red' }}>Watched</small></Link> </p>
                        <div className="items">
                            {moviesList}
                        </div>
                    </div>) : null
            }

            {
                (props.match.path.split('/')[1] === 'MyContent' || props.match.path.split('/')[1] === 'series') ?
                    (<div className="series">
                        <p>Series {`>`} <Link to='/series'><small style={{ color: 'red' }}>Watched</small></Link></p>
                        <div className="items">
                            {seriesList}
                        </div>
                    </div>) : null
            }

            {
                (props.match.path.split('/')[1] === 'MyContent' || props.match.path.split('/')[1] === 'episodes') ?
                    (<div className="episodes">
                        <p>Episodes {`>`} <Link to='/episodes'><small style={{ color: 'red' }}>Watched</small></Link></p>
                        <div className="items">
                            {episodesList}
                        </div>
                    </div>) : null
            }

        </div>
    )


}

export default MyContent;