import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import categories, { getMovies, imageHost, truncate } from '../../helper/api'

import { BannerButton, BannerButtons, BannerContainer, BannerContent, BannerDescription, BannerTitle, Ploading, Pproblem } from './Banner.styles'

// import Swiper core and required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

type MovieCard = {
  backdrop_path: string
  title: string
  name: string
  original_name: string
  overview: string
  id: number
}

const Banner = () => {
  const [bannerDate, setBannerDate] = useState<MovieCard[]>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const fetchTrending = async () => {
    try {
        const trendingCategory = categories.find(
            (category) => category.name === "trending"
        );
               
        const data = await getMovies(trendingCategory?.path)  

        setBannerDate(data?.results)
        setLoading(false)
    } catch (error) {
        console.log("fetchTrending error: ", error)
    }
  }

  useEffect(() => {   
    fetchTrending()
  }, [])

  if (loading) return <Ploading>Loading...</Ploading>
  if (error !== "") return <p>{error}</p>
  if (!bannerDate) return <Pproblem>Data was null</Pproblem>

  return (
    <Swiper
      modules={[Navigation]}    
      slidesPerView={1}
      navigation={true}
    >
      {bannerDate?.map((movieBanner) => (
        <SwiperSlide key={movieBanner.id} >
          <BannerContainer url={`url("${imageHost}${movieBanner?.backdrop_path}")`} onClick={() => navigate(`/cardDetails/${movieBanner?.id}`)}>
            <BannerContent>            
                <BannerTitle>
                  {movieBanner?.title || movieBanner?.name || movieBanner?.original_name}
                </BannerTitle>            
                <BannerButtons>
                  <BannerButton>Play</BannerButton>
                  <Link to={`/cardDetails/${movieBanner?.id}`}>
                    <BannerButton style={{marginLeft: "1.2rem"}}>
                      SAIBA MAIS
                    </BannerButton>
                  </Link>
                </BannerButtons> 
                <BannerDescription>
                  <h2>{truncate(movieBanner?.overview!, 150) }</h2>
                </BannerDescription>       
            </BannerContent>    
          </BannerContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


export default Banner