import styled from 'styled-components'
import { media } from '../../theme/mediaQueries'

export const BannerContainer = styled.header<{ url: string }>`
    color: white;  
    display: flex; 
    position: relative;
    background-repeat: no-repeat;
    background-image: ${({ url }) => (url ? url : '')};
    background-size: contain;
    height: 280px;
   
    ${media.greaterThan('sm')`
        background-size: cover;
        height: 448px;
    `};
`

export const BannerContent = styled.div`
    position: absolute;
    margin-left: 2rem; 
    height: fit-content;
    padding: 1rem;
    width: 80%;
    bottom: 60px;
    z-index: 10000;
    box-shadow: rgba(51, 51, 51, 0.5) 0px 1px 20px, rgba(51, 51, 51, 0.5) 0px 4px 20px, rgba(51, 51, 51, 0.5) 0px 8px 4px, rgba(51, 51, 51, 0.5) 0px 16px 8px, rgba(51, 51, 51, 0.5) 0px 32px 16px;

    ${media.greaterThan('xxss')`
        width: 85%;
        bottom: 20px;
    `};
    
    ${media.greaterThan('lg')`
        width: 65%;
    `};
`

export const BannerTitle = styled.h1`
    padding-bottom: 0.3rem;
    font-size: 1.2em;

    ${media.greaterThan('md')`
        font-size: 2em;
    `};
`

export const BannerButtons = styled.div`
    display: none;

    ${media.greaterThan('xs')`
        display: block;
    `};
`

export const BannerDescription = styled.div`
    display: none;
    width: fit-content;
    line-height: 1.3;
    font-size: 0.5em;
    padding-top: 0.5rem;
    height: fit-content;

    ${media.greaterThan('xxss')`    
        display: block;
    `};

    ${media.greaterThan('md')`
        font-size: 0.7em;
    `};
`

export const BannerButton = styled.button`
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    font-size: 0.6em;
    border-radius: 3px;
    padding:  0.5rem 2rem 0.5rem 2rem;
    background-color: rgba(51, 51, 51, 0.5);

    &:hover {
        color: #000;
        background-color: white;
        transition: all 0.2s;
    }

    ${media.greaterThan('md')`
        font-size: 1em;
    `};
`

/* BannerDetails */
export const BannerContainerDetails = styled.header<{ size: string, url: string }>` 
    color: white;
    height: 100vh;
    opacity: .5;
    position: relative;
    background-size: ${({ size }) => (size ? size : '')};   
    background-image: ${({ url }) => (url ? url : '')};
    background-repeat: no-repeat;
`

export const BannerContentDetails = styled.div` 
    position: absolute;
    bottom: 5px;
    color: white;
    margin-left: 2rem;
    max-width: fit-content;
    height: fit-content;
    padding: 1rem;
`

export const InfoDetails = styled.div` 
    font-size: 1.1em;   
    margin: 0.2rem 0 0.8rem;
    display: flex;
    gap: 1rem;
`

export const IconPlay = styled.span` 
    font-size: 2.2em;
    cursor: pointer;
`

export const IconPlus = styled.span` 
    cursor: pointer;
    font-size: 2.8em;
    margin-left: 1rem;
`

export const Pproblem = styled.p`
    color: red;
`

export const Ploading = styled.p`
    color: white;
`