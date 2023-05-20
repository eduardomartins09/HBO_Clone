import styled from 'styled-components'
import { media } from '../../theme/mediaQueries'

export const RowContainer = styled.div`
    padding: 1rem 1rem 1.5rem 0rem;
    overflow: hidden;
    color: white;
`

export const RowHeader = styled.h1`
    margin-bottom: 1rem;
`

export const RowHeaderSearch = styled.h1`
    margin-bottom: 1rem;
`

export const CardsRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
`

export const GridCards = styled.div`
    display: grid; 
    grid-template-columns: repeat(1, 165px); 
    justify-content: center;
    gap: 1rem;

    ${media.greaterThan('xs')`   
        grid-template-columns: repeat(2, 165px);
    `};

    ${media.greaterThan('sm')`
        grid-template-columns: repeat(3, 1fr);
    `};

    ${media.greaterThan('md')`
        grid-template-columns: repeat(4, 1fr);
    `};

    ${media.greaterThan('lg')`
        grid-template-columns: repeat(5, 1fr);
    `};

    ${media.greaterThan('lgg')`
        grid-template-columns: repeat(6, 1fr);
    `};

    ${media.greaterThan('xl')`
        grid-template-columns: repeat(7, 1fr);
    `};

    ${media.greaterThan('xxl')`
        grid-template-columns: repeat(8, 1fr);
    `};
`

export const CardGrid = styled.div`
    position: relative;
    width: fit-content;
    overflow-x: hidden;
`

export const MovieCard = styled.img`
    object-fit: contain;
    width: fit-content;
    max-height: 250px;
    margin-bottom: 10px;
    cursor: pointer;
    text-align: center;

    &:hover {
        border: 2px solid #3E137E;
    }
`

export const Icon = styled.div`
    display: flex;
    gap: 1rem;
    position: absolute;
    bottom: 30px;
    left: 85px;
    font-size: 1.9em;
    z-index: 10000;

    svg {
        cursor: pointer;
    }

    &:hover:nth-child(2) {
        display: flex;
        position: absolute;
        bottom: 30px;
        left: 75px;
        font-size: 2.1em;
    }  
`

export const ParentMovieCardIsLarge = styled.div`
    display: flex;
    gap: 1rem;
    width: 1500px;
`

export const MovieCardIsLarge = styled.div`
    display: flex;
    flex-direction: column;  
    background: linear-gradient(50deg, rgba(88,18,93,100) 21%, rgba(31,33,104,20) 71%);
    max-height: 280px;
    width: 1300px;
    font-size: 0.8em;
    justify-content: space-between;
    padding: 1rem;

    ${media.greaterThan('xs')`   
        width: 1500px;
    `};

    ${media.greaterThan('lg')`
        width: 1800px;
        font-size: 1.2em;
    `};
`

export const MovieCardIsLargeButton = styled.button`
    background-color: rgba(51, 51, 51, 0.9);
    padding: 10px;
    outline: none;
    border: none;
    text-transform: uppercase;
    cursor: pointer; 
    color: white;
    border-radius: 5px;
`

export const IconPrexNext = styled.div<{ left: number, bottom: number, right: number }>`
    position: absolute;
    bottom: ${({ bottom }) => (bottom ? bottom+'px' : '')};
    left: ${({ left }) => (left ? left+'px' : '')};
    right: ${({ right }) => (right ? right+'px' : '')};
    width: fit-content;
    cursor: pointer;
    font-size: 2.1em;
    z-index: 10000;
    color: rgba(88,18,93,100);
`

export const Pproblem = styled.p`
    color: red;
`

export const Ploading = styled.p`
    color: white;
`

export const DivRelative = styled.div`
    position: relative;
`
