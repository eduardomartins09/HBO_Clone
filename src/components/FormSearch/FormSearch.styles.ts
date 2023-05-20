import styled from 'styled-components'
import { media } from '../../theme/mediaQueries'

export const Form = styled.form`
    margin-top: 8rem;
    color: #fff;
`

export const InputIcons = styled.div`
    width: 98%;
    margin: 0 auto; 
    position: relative;
`

export const IconN = styled.svg`
    position: absolute;
    left: 2px;
    color: white;
    font-size: 2.1em;
    padding: 10px;
    height: 50px;
    width: 50px;
`

export const InputField = styled.input`
    width: 100%;
    padding: 15px;
    padding-left: 60px;
    font-size: 1.2em; 
    background-color: #1F1928;
    color: white;
    border: none;
    outline: none;
    border-radius: 3px;

    ${media.greaterThan('sm')`
        font-size: 1.4em;
    `};
`

export const Genres = styled.div`
    display: grid;  
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    padding: 1rem;
    text-align: center;
    width: 100%;

    ${media.greaterThan('sm')`
        grid-template-columns: repeat(3, 1fr);
    `};

    ${media.greaterThan('lg')`
        grid-template-columns: repeat(6, 1fr);
    `}; 

    span {
        cursor: pointer;
        outline: none;
        border: none;
        font-weight: 700;
        border-radius: 3px;
        padding: 1rem;
        background-color: rgba(51, 51, 51, 0.5);
        
        &:hover {
            color: #000;
            background-color: white;
        }
    }
`
