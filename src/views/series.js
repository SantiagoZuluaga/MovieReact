import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'

import Carousel from '../components/carousel'
import FlexRow from '../components/flexrow'

const { REACT_APP_THEMOVIEDB_API_KEY } =  process.env

export default function Series() {

    const [errorAPI, setErrorAPI] = useState(false)
    const [series, setSeries] = useState(null)

    const fetchData = async () => {
        try {
            const netflix = await (await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${REACT_APP_THEMOVIEDB_API_KEY}&with_networks=213`)).data.results
            const trending = await (await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${REACT_APP_THEMOVIEDB_API_KEY}`)).data.results
            const documentaries = await (await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${REACT_APP_THEMOVIEDB_API_KEY}&with_genres=99`)).data.results
            setSeries({
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

            {!series ?
                <div>Cargando</div>:
                null
            }

            {series ? 
                <div>
                    <Carousel popular={series.netflix}/>
                    <FlexRow content={series.netflix} title={"Netflix Originals"} type={"series"} imagetype={"poster_path"}/>
                    <FlexRow content={series.trending} title={"Trending now"} type={"series"} imagetype={"backdrop_path"}/>
                    <FlexRow content={series.documentaries} title={"Documentaries"} type={"series"} imagetype={"backdrop_path"}/>
                </div>:
                null
            }
        </>
    )
}