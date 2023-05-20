import { useState, useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
import { BsCheckCircleFill, BsFillPlayCircleFill, BsFillPlusCircleFill } from 'react-icons/bs';

import imageNotFound from '../../imgs/image_not_found.jpg'

import { BASE_URL_API, Movies, getMovies, imageHost } from '../../helper/api'
import { CardGrid, GridCards, Icon, MovieCard, Ploading, Pproblem, RowContainer, RowHeader, RowHeaderSearch } from './Cards.styles';
import { useList } from '../../context/favoriteList';

type CardProps = {
  title: string
  path: string 
  isSearch: boolean
}

const CardSearch = ({ path, isSearch, title }: CardProps) => {
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
  }, [path])  

  if (loading) return <Ploading>Loading...</Ploading>
  if (error !== "") return <Pproblem>{error}</Pproblem>
  if (!data) return <Pproblem>Data was null</Pproblem>

  return (
    <RowContainer>  
        {isSearch && <RowHeaderSearch>{title}</RowHeaderSearch>}    
        <GridCards>
            {isSearch && (
                    data.map((date) => {
                        return (
                            <CardGrid 
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
                            </CardGrid>                       
                        )
                    })
                )
            } 
        </GridCards>
    </RowContainer>
  )
}

export default CardSearch