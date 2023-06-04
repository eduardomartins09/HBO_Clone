import { useState, useEffect } from 'react'
import { useList } from '../../context/favoriteList';
import { changeDate, imageHost, truncate } from '../../helper/api';

import { BsCheckCircleFill, BsFillPlayCircleFill, BsFillPlusCircleFill } from 'react-icons/bs';

import imageNotFound from '../../imgs/image_not_found.jpg'

import { BannerContainerDetails, BannerContentDetails, BannerTitle, IconPlay, IconPlus, InfoDetails } from './Banner.styles';

type BannerCardDetailsProps = {
    title?: string 
    runtime?: number
    id?: number
    overview?: string
    backdrop_path?: string
    poster_path?: string
    releaseData?: string
    loading?: boolean
    error?: string
}

const BannerCardDetails = ({ title, runtime, id, overview, backdrop_path, releaseData, poster_path, loading, error }: BannerCardDetailsProps) => {
  const { list, addToList, removeOfList } = useList()
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
    
  useEffect(() => {
    const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
    };
    
    window.addEventListener('resize', handleWindowResize);
    
    return () => {
        window.removeEventListener('resize', handleWindowResize);
    };
  });

  const handleClick = (id: number | undefined, poster: string | undefined) => {
    if (list.find(item => item.id === id)) return

    if (id !== undefined)

    addToList({
        id: id,
        poster_path: imageHost+poster,
    })
  }

  const handleRemove = (id: number | undefined) => {
    if (id !== undefined)
    
    removeOfList( id )
  }

  if (loading) return <p className='problem'>Loading...</p>
  if (error !== "") return <p>{error}</p>
    
  return (
    <>  
        {windowSize[0] > 300 && windowSize[0] < 800 && windowSize[1] < 1000 ? (           
            <BannerContainerDetails size="contain" url={`url("${imageHost}${poster_path ? poster_path : imageNotFound}")`} />       
        ) 
        : windowSize[0] > 400 && windowSize[1] > 1000 ? (           
            <BannerContainerDetails size="cover" url={`url("${imageHost}${poster_path ? poster_path : imageNotFound}")`} />                       
        ) 
        : windowSize[0] > 800 && windowSize[1] < 1000 ? (
            <BannerContainerDetails size="cover" url={`url("${imageHost}${backdrop_path ? backdrop_path : imageNotFound}")`} />  
        )
        : (
            <BannerContainerDetails size="cover" url={`url("${imageHost}${poster_path ? poster_path : imageNotFound}")`} />  
        )}
        <BannerContentDetails>            
            <BannerTitle>
                {title?.length !== 0
                    ? title
                    : "Conteudo não encontrado"
                }
            </BannerTitle>
            <InfoDetails>
                {runtime !== 0 && releaseData !== "" 
                    ? ( <>
                            <span>{runtime}MIN</span>
                            <span>{changeDate(releaseData)}</span>
                            <span>HD</span>
                        </>
                    )
                    : <span>Conteudo não encontrado</span>    
                }                             
            </InfoDetails>        
            <div>
                {releaseData !== "" && runtime !== 0 && overview?.length !== 0
                    ? <>
                        <IconPlay>
                            <BsFillPlayCircleFill />
                        </IconPlay>
                        {list.find(item => item.id === id) 
                            ? (
                                <IconPlus>
                                    <BsCheckCircleFill
                                        onClick={() => handleRemove(id)}
                                    />
                                </IconPlus>
                            )
                            : ( 
                                <IconPlus>
                                    <BsFillPlusCircleFill 
                                        onClick={() => handleClick(id, poster_path)} 
                                    />
                                </IconPlus>
                            )
                        }  
                      </>
                    : ""
                }                  
            </div>
            <div>
                {windowSize[0] < 550 ? (
                    <h3>
                        {overview?.length !== 0 
                            ? truncate(overview!, 150) 
                            : "Conteudo não encontrado"
                        }
                    </h3>
                ):  (
                    <h3>
                        {overview?.length !== 0 
                            ? truncate(overview!, 650) 
                            : "Conteudo não encontrado"
                        }
                    </h3>
                )
                }               
            </div>        
        </BannerContentDetails>    
    </>
  )
}

export default BannerCardDetails