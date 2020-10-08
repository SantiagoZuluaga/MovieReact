import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'

import Carousel from '../components/carousel'
import FlexRow from '../components/flexrow'

const { REACT_APP_THEMOVIEDB_API_KEY } =  process.env

export default function Home() {
    
    const [errorAPI, setErrorAPI] = useState(false)
    const [data, setData] = useState(null)

    const fetchData = async () => {
        try {
            const trending = await (await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${REACT_APP_THEMOVIEDB_API_KEY}`)).data.results
            const movies = await (await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_THEMOVIEDB_API_KEY}`)).data.results
            const series = await (await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${REACT_APP_THEMOVIEDB_API_KEY}`)).data.results
            setData({
                trending: trending,
                movies: movies,
                series: series
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

            {!data ?
                <div>Cargado</div>:
                null
            }

            {data ? 
                <div>
                    <Carousel popular={data.trending}/>
                    <FlexRow content={data.trending} title={"Trending now"} type={"movies-series"} imagetype={"poster_path"}/>
                    <FlexRow content={data.movies} title={"Movies"} type={"movies"} imagetype={"backdrop_path"}/>
                    <FlexRow content={data.series} title={"Tv show"} type={"series"} imagetype={"backdrop_path"}/>
                </div>:
                null
            }
        </>
    )
}