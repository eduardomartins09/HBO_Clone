import { useState } from 'react'

import { API_KEY, genres } from '../../helper/api'

import { IoSearchOutline } from 'react-icons/io5'

import CardSearch from '../Cards/CardSearch'

import { Genres, IconN, InputField, InputIcons, Form } from './FormSearch.styles'

const FormSearch = () => {
  const [searchTitle, setSearchTitle] = useState<string>("")
  const [standardPath, setStandardPath] = useState<string>(`/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`)
  
  const handleClick = (e: number) => {
    setStandardPath(`/discover/movie?api_key=${API_KEY}&with_genres=${e}&language=pt-BR`)
    setSearchTitle("")
  }

  const handleSearch = (e: string) => {
    setSearchTitle(e)
    setStandardPath(`/search/movie?api_key=${API_KEY}&query=${searchTitle}&language=pt-BR`)
  } 

  return (
    <>
        <Form>
            <InputIcons> 
                <IconN>
                  <IoSearchOutline />
                </IconN>
                <InputField 
                  type="text" 
                  placeholder='O que você está procurando?'
                  value={searchTitle}
                  onChange={(e) => handleSearch(e.target.value)}
                />
            </InputIcons>
            <Genres>
              {genres.map((item, key) => (
                <span 
                  key={item.id} 
                  onClick={() => handleClick(item.id)}>
                    {item.name}
                </span>
              ))}
            </Genres>
        </Form>  
        <div style={{ padding: "1rem" }}>
          <CardSearch
              path={standardPath}  
              isSearch={true}
              title='Explore nossa coleção'
          /> 
        </div>
    </>
  )
}

export default FormSearch