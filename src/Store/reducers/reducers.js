const initState = {
    movies: [],
    series: [],
    search: {},
    episodes: [],
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case 'SEARCH_TITLE':
            {
                console.log(action.value)
                return {
                    ...state,
                    search: action.value
                }
            }

        case 'DELETE_SEARCH':
            {
                return {
                    ...state,
                    search: {}
                }
            }

        case 'ADD_WATCHED':
            {
                console.log(action)

                if (action.value.type === 'movie') {

                    action.value.data['watched'] = false

                    let movies = [...state.movies, action.value.data]

                    return {
                        ...state,
                        movies
                    }

                } else if (action.value.type === 'series') {


                    action.value.data['watched'] = false

                    let series = [...state.series, action.value.data]

                    console.log('called', series)
                    return {
                        ...state,
                        series
                    }
                }
                else {

                    action.value.data['watched'] = false
                    let episodes = [...state.episodes, action.value.data]

                    console.log('Not called', episodes)

                    return {
                        ...state,
                        episodes
                    }
                }

            }
        case 'REMOVE_WATCHED':
            {
                if (action.value.type === 'movie') {

                    let movies = [...state.movies]
                    movies = movies.filter((item, index) => index !== action.value.index)

                    return {
                        ...state,
                        movies
                    }

                } else if (action.value.type === 'series') {

                    let series = [...state.series]
                    series = series.filter((item, index) => index !== action.value.index)

                    return {
                        ...state,
                        series
                    }
                }

                else {
                    let episodes = [...state.episodes]
                    episodes = episodes.filter((item, index) => index !== action.value.index)

                    return {
                        ...state,
                        episodes
                    }
                }
            }

        case 'UPDATE_STATUS': {
            console.log(action)
            if (action.value.type === 'movie') {

                let movies = [...state.movies]
                movies.forEach((item, index) => {
                    if (index === action.value.index) {
                        item.watched = !action.value.status
                    }
                })

                return {
                    ...state,
                    movies
                }

            } else if (action.value.type === 'series') {

                let series = [...state.series]
                series.forEach((item, index) => {
                    if (index === action.value.index) {
                        item.watched = !action.value.status
                    }
                })

                return {
                    ...state,
                    series
                }
            } else {
                let episodes = [...state.episodes]
                episodes.forEach((item, index) => {
                    if (index === action.value.index) {
                        item.watched = !action.value.status
                    }
                })

                return {
                    ...state,
                    episodes
                }
            }
        }

        default:
            {
                console.log(action.type)
                return state
            }
    }
}

export default reducer