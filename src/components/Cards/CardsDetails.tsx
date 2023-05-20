import { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { BsCheckCircleFill, BsFillPlayCircleFill, BsFillPlusCircleFill, BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

import { imageHost } from '../../helper/api'; 
import imageNotFound from '../../imgs/image_not_found.jpg'

import { DivRelative, Icon, IconPrexNext , MovieCard, Ploading, Pproblem, RowContainer } from './Cards.styles';
import { useList } from '../../context/favoriteList';

// import Swiper core and required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export type DataCard = {
    id: number
    poster_path: string
    name: string
}

type CardDetailsProps = {
    dataCardDetails: DataCard[] 
    loading: boolean
    error: string
}

const CardsDetails = ({ dataCardDetails, loading, error }: CardDetailsProps) => {
  const [isShown, setIsShown] = useState(true)
  const { list, addToList, removeOfList } = useList()

  const handleMounseEnter = (e: React.MouseEvent<HTMLElement>) => {  
    setIsShown(false)   
  }

  const handleMounseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setIsShown(true)
  }

  const handleClick = (id: number, poster: string) => {
    if (list.find(item => item.id === id)) return

    addToList({
        id: id,
        poster_path: imageHost+poster,
    })
  }

  const handleRemove = (id: number) => {
    removeOfList( id )
  } 

  if (loading) return <Ploading>Loading...</Ploading>
  if (error !== "") return <Pproblem>{error}</Pproblem>
  if (!dataCardDetails) return <Pproblem>Data was null</Pproblem>

  return (  
    <RowContainer>
        <Swiper
           modules={[Navigation]}
           navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
           }}
           breakpoints={{
            0: {
                slidesPerView: 1,
                spaceBetween: 5
            },
            300: {
                slidesPerView: 1.5,
                spaceBetween: 5
            },
            380: {
                slidesPerView: 1.8,
                spaceBetween: 5
            },
            405: {
                slidesPerView: 1.9,
            },
            570: {
                slidesPerView: 3.1,
                spaceBetween: 5
            },
            650: {
                slidesPerView: 3.6,
                spaceBetween: 5
            },
            700: {
                slidesPerView: 3.9,
                spaceBetween: 5
            },
            800: {
                slidesPerView: 4.2,
                spaceBetween: 5
            },
            801: {
                slidesPerView: 4.4,
                spaceBetween: 5
            },
            920: {
                slidesPerView: 5.5,
                spaceBetween: 5
            },
            1090: {
                slidesPerView: 6,
                spaceBetween: 5
            },
            1250: {
                slidesPerView: 7,
                spaceBetween: 5
            },
            1400: {
                slidesPerView: 7.9,
                spaceBetween: 5
            },
           }}
        >   
            {dataCardDetails?.map((movie) => (  
                <SwiperSlide key={movie.id}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div 
                            onMouseEnter={handleMounseEnter}
                            onMouseLeave={handleMounseLeave}
                        >
                            <DivRelative>                    
                                <Link to={`/cardDetails/${movie.id}`}>
                                    {movie && (
                                        <MovieCard
                                            key={movie.id} 
                                            src={movie?.poster_path ? `${imageHost}${movie.poster_path}` : imageNotFound}
                                            alt={movie.name}                                     
                                        />
                                    )}
                                </Link>                                                      
                                <Icon style={{ display: isShown ? "none" : "flex" }}>
                                    <BsFillPlayCircleFill />
                                    {list.find(item => item.id === movie.id) 
                                        ? (
                                            <BsCheckCircleFill 
                                                onClick={() => handleRemove(movie.id)}
                                            />
                                        )
                                        : ( 
                                            <BsFillPlusCircleFill 
                                                onClick={() => handleClick(movie.id, movie?.poster_path)} 
                                            />
                                        )
                                    }                    
                                </Icon>                          
                            </DivRelative>
                        </div>  
                    </div>
                </SwiperSlide>
            ))}
            <IconPrexNext left={15} bottom={110} right={0} className='button-prev-slide'>
                <BsArrowLeftCircleFill />
            </IconPrexNext>
            <IconPrexNext left={0} bottom={110} right={15} className='button-next-slide'>
                <BsArrowRightCircleFill />
            </IconPrexNext>  
       </Swiper>     
    </RowContainer>              
            
  )
}

export default CardsDetails