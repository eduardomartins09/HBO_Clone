import { useState } from 'react'
import { CardGrid, GridCards, Icon, MovieCard, Ploading, Pproblem, RowContainer, RowHeader } from './Cards.styles'
import { Link } from 'react-router-dom'

import imageNotFound from '../../imgs/image_not_found.jpg'

import { InitValue, useList } from '../../context/favoriteList'
import { BsFillPlayCircleFill, BsCheckCircleFill } from 'react-icons/bs'

const CardList = ({ list }: Partial<InitValue>) => { 
  const { removeOfList } = useList()

  const handleRemove = (id: number) => {
    removeOfList( id )
  }

  if (!list) return <Pproblem>Data was null</Pproblem>

  return (
    <RowContainer>  
        <RowHeader>Lista</RowHeader>    
        <GridCards>      
            {list?.map((date) => {
                return (
                    date.poster_path !== "" && (
                        <CardGrid key={date.id}>
                            <div>
                                <Link to={`/cardDetails/${date.id}`}>
                                    <MovieCard 
                                        key={date.id} 
                                        src={date?.poster_path ? `${date.poster_path}` : imageNotFound}
                                        alt="favoriteMovie"                     
                                    />   
                                </Link>                  
                            </div>
                            <Icon>
                                <BsFillPlayCircleFill />
                                <BsCheckCircleFill 
                                    onClick={() => handleRemove(date.id)}
                                />
                            </Icon>
                        </CardGrid>                       
                    )                             
                )
            })}              
        </GridCards>
    </RowContainer>
  )
}

export default CardList