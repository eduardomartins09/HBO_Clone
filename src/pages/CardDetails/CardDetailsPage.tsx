import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import BannerCardDetails from '../../components/Banner/BannerCardDetails'
import CardsDetails, { DataCard } from '../../components/Cards/CardsDetails'; 

import categories, { API_KEY, getMovies, getMoviesDetails, goToTheTop } from '../../helper/api';

type BannerCardDetailsType = {
  title: string
  runtime: number
  id: number
  overview: string
  backdrop_path: string
  poster_path: string
  release_date: string
}

const CardDetailsPage = () => {
  const { id } = useParams();
  const [dataBannerDetails, setDataBannerDetails] = useState<BannerCardDetailsType>()
  const [dataCardDetails, setDataCardDetails] = useState<DataCard[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  const fetchDataBannerDetails = async (_path: string | undefined) => {
    try {
      const data = await getMoviesDetails(_path)
      setDataBannerDetails(data)

      setLoading(false)     
    } catch (error) {
      setError("fetchDataBannerDetails error:" + error)
    }
  } 

  const fetchMoviesRecomendations = async (_path: string | undefined) => {
    try {
        const data = await getMoviesDetails(_path)          
        setDataCardDetails(data?.recommendations.results)

        if (data?.recommendations.results.length === 0) {
            const trendingCategory = categories.find(
                (category) => category.name === "trending"
            );
            
            const data = await getMovies(trendingCategory?.path)
            setDataCardDetails(data?.results) 
        }

        setLoading(false)
    } catch (error) {
      setError("fetchMoviesRecomendations error: " + error)
    }
  }

  useEffect(() => {
    const urlData = `${id}?api_key=${API_KEY}&language=pt-BR`
    fetchDataBannerDetails(urlData)

    const url = `${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=recommendations,similar`
    fetchMoviesRecomendations(url)
    goToTheTop()
  }, [id])

  return (
    <div style={{ backgroundColor: "#000000" }}>  
        <Navbar />
        <BannerCardDetails 
          title={dataBannerDetails?.title}
          runtime={dataBannerDetails?.runtime}
          id={dataBannerDetails?.id}
          overview={dataBannerDetails?.overview}
          backdrop_path={dataBannerDetails?.backdrop_path} 
          poster_path={dataBannerDetails?.poster_path} 
          releaseData={dataBannerDetails?.release_date}
          loading={loading}
          error={error}
        />
        <div style={{ margin: "2rem 0 0 2.5rem", }}>
          <h1 style={{ color: "white" }}>Outros Conteúdos</h1>
          <CardsDetails 
            dataCardDetails={dataCardDetails}
            loading={loading}
            error={error}
          />     
        </div> 
    </div>
  )
}

export default CardDetailsPage