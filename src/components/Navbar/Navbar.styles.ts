import styled from 'styled-components'
import { media } from '../../theme/mediaQueries'

export const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    padding: 40px;
    color: white;
    z-index: 100000;
    gap: 1rem;
   
    /* Animations */
    transition-timing-function: ease-in;
    transition: all 0.5s;
`

export const MenuBar = styled.div`
    display: none;
   
    ${media.greaterThan('md')`
        display: flex;
        gap: 0.5rem;
    `};
`

export const Menu = styled.div`
    display: flex;
    gap: 1rem;
`

export const SubMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.5em;

    ${media.greaterThan('sm')`
        font-size: 1em;
    `};
`

export const NavLogo = styled.div`
    margin: 0 auto;         
    cursor: pointer;
    object-fit: contain;
`

export const IconNav = styled.div`
    font-size: 0.8em;
    cursor: pointer;

    ${media.greaterThan('xs')`
        font-size: 1em;
    `};

    ${media.greaterThan('sm')`
        font-size: 1.8em;
    `};
`
