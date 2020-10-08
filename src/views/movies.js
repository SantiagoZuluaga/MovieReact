import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'

import Carousel from '../components/carousel'
import FlexRow from '../components/flexrow'

const { REACT_APP_THEMOVIEDB_API_KEY } =  process.env

export default function Movies() {

    const [errorAPI, setErrorAPI] = useState(false)
    const [movies, setMovies] = useState(null)

    const fetchData = async () => {
        try {
            const netflix = await (await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_THEMOVIEDB_API_KEY}`)).data.results
            const trending = await (await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${REACT_APP_THEMOVIEDB_API_KEY}`)).data.results
            const documentaries = await (await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_THEMOVIEDB_API_KEY}&with_genres=99`)).data.results
            setMovies({
                netflix: netflix,
                trending: trending,
                documentaries: documentaries
            })
        }
        catch(err) {    
            setErrorAPI(true)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {errorAPI ?
                <div>Error en el API</div>:
                null
            }

            {!movies ?
                <div>Cargado</div>:
                null
            }

            {movies ? 
                <div>
                    <Carousel popular={movies.netflix}/>
                    <FlexRow content={movies.netflix} title={"Top rated"} type={"movies"} imagetype={"poster_path"}/>
                    <FlexRow content={movies.trending} title={"Trending now"} type={"movies"} imagetype={"backdrop_path"}/>
                    <FlexRow content={movies.documentaries} title={"Documentaries"} type={"movies"} imagetype={"backdrop_path"}/>
                </div>:
                null
            }
        </>
    )
}
