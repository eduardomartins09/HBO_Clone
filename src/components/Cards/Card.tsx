import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { useAxios } from '../../hooks/useAxios';

import { useList } from '../../context/favoriteList';

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
                            300: {
                                slidesPerView: 1.7,
                                spaceBetween: 5
                            },
                            350: {
                                slidesPerView: 1.8,
                                spaceBetween: 5
                            },
                            370: {
                                slidesPerView: 1.9,
                                spaceBetween: 5
                            },
                            378: {
                                slidesPerView: 2,
                                spaceBetween: 5
                            },
                            395: {
                                slidesPerView: 2.1,
                            },
                            420: {
                                slidesPerView: 2.2,
                            },
                            440: {
                                slidesPerView: 2.3,
                            },
                            460: {
                                slidesPerView: 2.4,
                            },
                            480: {
                                slidesPerView: 2.6,
                            },
                            510: {
                                slidesPerView: 2.8,
                            },
                            550: {
                                slidesPerView: 2.9,
                            },
                            570: {
                                slidesPerView: 3,
                                spaceBetween: 5
                            },
                            590: {
                                slidesPerView: 3.2,
                                spaceBetween: 5
                            },
                            620: {
                                slidesPerView: 3.4,
                                spaceBetween: 5
                            },
                            650: {
                                slidesPerView: 3.6,
                                spaceBetween: 5
                            },
                            700: {
                                slidesPerView: 3.8,
                                spaceBetween: 5
                            },
                            735: {
                                slidesPerView: 4.1,
                                spaceBetween: 5
                            },
                            780: {
                                slidesPerView: 4.3,
                                spaceBetween: 5
                            },
                            800: {
                                slidesPerView: 4.4,
                                spaceBetween: 5
                            },
                            850: {
                                slidesPerView: 4.6,
                                spaceBetween: 5
                            },
                            885: {
                                slidesPerView: 4.8,
                                spaceBetween: 5
                            },
                            900: {
                                slidesPerView: 5,
                                spaceBetween: 5
                            },
                            920: {
                                slidesPerView: 5.1,
                                spaceBetween: 5
                            },
                            970: {
                                slidesPerView: 5.3,
                                spaceBetween: 5
                            },
                            1010: {
                                slidesPerView: 5.6,
                                spaceBetween: 5
                            },
                            1075: {
                                slidesPerView: 6,
                                spaceBetween: 5
                            },
                            1130: {
                                slidesPerView: 6.2,
                                spaceBetween: 5
                            },
                            1180: {
                                slidesPerView: 6.4,
                                spaceBetween: 5
                            },
                            1230: {
                                slidesPerView: 6.9,
                                spaceBetween: 5
                            },
                            1300: {
                                slidesPerView: 7.1,
                                spaceBetween: 5
                            },
                            1350: {
                                slidesPerView: 7.4,
                                spaceBetween: 5
                            },
                            1400: {
                                slidesPerView: 8,
                                spaceBetween: 5
                            },
                            1500: {
                                slidesPerView: 8.3,
                                spaceBetween: 5
                            },
                            1600: {
                                slidesPerView: 8.7,
                                spaceBetween: 5
                            },
                            1700: {
                                slidesPerView: 9.4,
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
                        <IconPrexNext left={0} bottom={120} right={10} className='button-next-slide'>
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
                                
                            },
                            380: {
                                slidesPerView: 1.1,
                                spaceBetween: 50
                            },
                            400: {
                                slidesPerView: 1.2,
                            }, 
                            430: {
                                slidesPerView: 1.3,
                            }, 
                            450: {
                                slidesPerView: 1.4,
                            }, 
                            470: {
                                slidesPerView: 1.5,
                            }, 
                            490: {
                                slidesPerView: 1.6,
                            }, 
                            520: {
                                slidesPerView: 1.7,
                            }, 
                            550: {
                                slidesPerView: 1.8,
                            }, 
                            580: {
                                slidesPerView: 1.9,
                                spaceBetween: 5
                            },
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 5
                            },
                            630: {
                                slidesPerView: 2.1,
                                spaceBetween: 5
                            },
                            650: {
                                slidesPerView: 2.2,
                                spaceBetween: 5
                            },
                            680: {
                                slidesPerView: 2.3,
                                spaceBetween: 5
                            },
                            710: {
                                slidesPerView: 2.4,
                                spaceBetween: 5
                            },
                            740: {
                                slidesPerView: 2.5,
                                spaceBetween: 5
                            },
                            770: {
                                slidesPerView: 2.6,
                                spaceBetween: 5
                            },
                            805: {
                                slidesPerView: 2.8,
                                spaceBetween: 5
                            },
                            840: {
                                slidesPerView: 2.9,
                                spaceBetween: 5
                            },
                            870: {
                                slidesPerView: 3,
                                spaceBetween: 5
                            },
                            910: {
                                slidesPerView: 3.1,
                                spaceBetween: 5
                            },
                            975: {
                                slidesPerView: 3.2,
                                spaceBetween: 5
                            },
                            1000: {
                                slidesPerView: 3.3,
                                spaceBetween: 5
                            },
                            1035: {
                                slidesPerView: 3.4,
                                spaceBetween: 5
                            },
                            1060: {
                                slidesPerView: 3.5,
                                spaceBetween: 5
                            },
                            1110: {
                                slidesPerView: 3.7,
                                spaceBetween: 5
                            },
                            1150: {
                                slidesPerView: 3.8,
                                spaceBetween: 5
                            },
                            1180: {
                                slidesPerView: 3.9,
                                spaceBetween: 5
                            },
                            1210: {
                                slidesPerView: 4,
                                spaceBetween: 5
                            },
                            1230: {
                                slidesPerView: 4.1,
                                spaceBetween: 5
                            },
                            1250: {
                                slidesPerView: 4.2,
                                spaceBetween: 5
                            },
                            1290: {
                                slidesPerView: 4.3,
                                spaceBetween: 5
                            },
                            1330: {
                                slidesPerView: 4.4,
                                spaceBetween: 5
                            },
                            1355: {
                                slidesPerView: 4.5,
                                spaceBetween: 5
                            },
                            1400: {
                                slidesPerView: 4.7,
                                spaceBetween: 5
                            },
                            1445: {
                                slidesPerView: 4.8,
                                spaceBetween: 5
                            },
                            1470: {
                                slidesPerView: 4.9,
                                spaceBetween: 5
                            },
                            1500: {
                                slidesPerView: 5,
                                spaceBetween: 5
                            },
                            1540: {
                                slidesPerView: 5.1,
                                spaceBetween: 5
                            },
                            1580: {
                                slidesPerView: 5.2,
                                spaceBetween: 5
                            },
                            1610: {
                                slidesPerView: 5.4,
                                spaceBetween: 5
                            },
                            1660: {
                                slidesPerView: 5.5,
                                spaceBetween: 5
                            },
                            1700: {
                                slidesPerView: 5.7,
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
                        <IconPrexNext left={0} bottom={140} right={10} className='button-next-slide'>
                            <BsArrowRightCircleFill />
                        </IconPrexNext>
                    </Swiper>
                </CardsRow>
                
        )}          
    </RowContainer>
  )
}

export default Card