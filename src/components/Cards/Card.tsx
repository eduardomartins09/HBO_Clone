import { useState, useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsCheckCircleFill, BsFillPlayCircleFill, BsFillPlusCircleFill } from 'react-icons/bs';

import { BASE_URL_API, Movies, imageHost } from '../../helper/api'

import imageNotFound from '../../imgs/image_not_found.jpg'

// import Swiper core and required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { CardsRow, DivRelative, Icon, IconPrexNext, MovieCard, MovieCardIsLarge, MovieCardIsLargeButton, ParentMovieCardIsLarge, Ploading, Pproblem, RowContainer, RowHeader } from './Cards.styles';
import { useList } from '../../context/favoriteList';

type CardProps = {
    title?: string
    path?: string
    description?: string
    isLarge?: boolean
}

const Card = ({ title, path, isLarge, description }: CardProps) => {
  const [isShown, setIsShown] = useState(true)
  const { list, addToList, removeOfList } = useList()  
  
  const [loading, data, error, request] = useAxios<Movies[]>(
    { method: 'GET', url: `${BASE_URL_API}${path}` }, false)

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

  useEffect(() => {
    request()
  }, [])  

  if (loading) return <Ploading>Loading...</Ploading>
  if (error !== "") return <Pproblem>{error}</Pproblem>
  if (!data) return <Pproblem>Data was null</Pproblem>

  return (
    <RowContainer style={{ paddingLeft: "1rem" }}>      
        {!isLarge && <RowHeader>{title}</RowHeader>}
        {!isLarge 
            ? (
                <CardsRow> 
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide",
                        }}  
                        breakpoints={{
                            0: {
                                slidesPerView: 1.8,
                                spaceBetween: 5
                            },
                            380: {
                                slidesPerView: 2,
                                spaceBetween: 5
                            },
                            405: {
                                slidesPerView: 2.1,
                            },
                            570: {
                                slidesPerView: 3,
                                spaceBetween: 5
                            },
                            595: {
                                slidesPerView: 3.2,
                                spaceBetween: 5
                            },
                            650: {
                                slidesPerView: 3.7,
                                spaceBetween: 5
                            },
                            740: {
                                slidesPerView: 4.2,
                                spaceBetween: 5
                            },
                            920: {
                                slidesPerView: 5.5,
                                spaceBetween: 5
                            },
                            1090: {
                                slidesPerView: 6.2,
                                spaceBetween: 5
                            },
                            1250: {
                                slidesPerView: 7.2,
                                spaceBetween: 5
                            },
                            1400: {
                                slidesPerView: 8,
                                spaceBetween: 5
                            },
                        }}  
                    > 
                        {data.map((date) => {
                            return ( 
                                <SwiperSlide key={date.id}>
                                    <DivRelative 
                                        key={date.id}                         
                                        onMouseEnter={handleMounseEnter}
                                        onMouseLeave={handleMounseLeave}  
                                    >
                                        <div>
                                            <Link to={`/cardDetails/${date.id}`}>
                                                <MovieCard 
                                                    key={date.id} 
                                                    src={date?.poster_path ? `${imageHost}${date.poster_path}` : imageNotFound}
                                                    alt={date.name}                                       
                                                />   
                                            </Link>                  
                                        </div>
                                        <Icon style={{ display: isShown ? "none" : "flex" }}>
                                            <BsFillPlayCircleFill />
                                            {list.find(item => item.id === date.id) 
                                                ? (
                                                    <BsCheckCircleFill 
                                                        onClick={() => handleRemove(date.id)}
                                                    />
                                                )
                                                : ( 
                                                    <BsFillPlusCircleFill 
                                                        onClick={() => handleClick(date.id, date.poster_path)} 
                                                    />
                                                )
                                            }                    
                                        </Icon> 
                                    </DivRelative>
                                </SwiperSlide>
                            )
                        })}
                        <IconPrexNext left={5} bottom={120} right={0} className='button-prev-slide'>
                            <BsArrowLeftCircleFill />
                        </IconPrexNext>
                        <IconPrexNext left={0} bottom={120} right={30} className='button-next-slide'>
                            <BsArrowRightCircleFill />
                        </IconPrexNext> 
                    </Swiper>
                </CardsRow>
            )
            : (
                <CardsRow>
                    <MovieCardIsLarge >
                        <div>
                            <h1>{title}</h1>
                            <span>{description}</span>
                        </div>
                        <div>
                            <MovieCardIsLargeButton>Explore mais</MovieCardIsLargeButton>
                        </div>
                    </MovieCardIsLarge>  
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide",
                        }}  
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 50
                            },
                            405: {
                                slidesPerView: 1.1,
                            }, 
                            595: {
                                slidesPerView: 1.9,
                                spaceBetween: 5
                            },
                            650: {
                                slidesPerView: 2.2,
                                spaceBetween: 5
                            },
                            700: {
                                slidesPerView: 2.5,
                                spaceBetween: 5
                            },
                            780: {
                                slidesPerView: 2.7,
                                spaceBetween: 5
                            },
                            805: {
                                slidesPerView: 2.8,
                                spaceBetween: 5
                            },
                            920: {
                                slidesPerView: 3.1,
                                spaceBetween: 5
                            },
                            1000: {
                                slidesPerView: 3.3,
                                spaceBetween: 5
                            },
                            1250: {
                                slidesPerView: 4.2,
                                spaceBetween: 5
                            },
                            1400: {
                                slidesPerView: 4.8,
                                spaceBetween: 5
                            },
                        }}                  
                    >            
                        {data.map((date) => {
                            return (   
                                <SwiperSlide key={date.id}>
                                    <DivRelative 
                                        onMouseEnter={handleMounseEnter}
                                        onMouseLeave={handleMounseLeave}      
                                    >
                                        <div>
                                            <Link to={`/cardDetails/${date.id}`}>
                                                <MovieCard 
                                                    style={{ maxHeight: "280px" }}
                                                    key={date.id} 
                                                    src={date?.poster_path ? `${imageHost}${date.poster_path}` : imageNotFound}
                                                    alt={date.name} 
                                                />
                                            </Link>  
                                        </div>
                                        <Icon style={{ display: isShown ? "none" : "flex", left: "98px" }}>
                                            <BsFillPlayCircleFill />
                                            {list.find(item => item.id === date.id) 
                                                ? (
                                                    <BsCheckCircleFill 
                                                        onClick={() => handleRemove(date.id)}
                                                    />
                                                )
                                                : ( 
                                                    <BsFillPlusCircleFill 
                                                        onClick={() => handleClick(date.id, date.poster_path)} 
                                                    />
                                                )
                                            }                    
                                        </Icon>        
                                    </DivRelative>
                                </SwiperSlide>                                            
                            )
                        })}
                        <IconPrexNext left={10} bottom={140} right={0} className='button-prev-slide'>
                            <BsArrowLeftCircleFill />
                        </IconPrexNext>
                        <IconPrexNext left={0} bottom={140} right={40} className='button-next-slide'>
                            <BsArrowRightCircleFill />
                        </IconPrexNext>
                    </Swiper>
                </CardsRow>
                
        )}          
    </RowContainer>
  )
}

export default Card