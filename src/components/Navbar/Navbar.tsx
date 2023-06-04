import { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'

import { IoIosMenu } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { BsPersonCircle } from 'react-icons/bs'

import { goToTheTop } from '../../helper/api'

import { IconNav, Menu, MenuBar, NavContainer, NavLogo, SubMenu } from './Navbar.styles'

import HBOMaxLogo  from '../../imgs/HBO-Max-Logo.png'

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 10)
    })
  }, [])

  return (   
    <NavContainer style={{ backgroundColor: show ? "#111" : "" }}>
        <MenuBar>
            <IconNav>
                <IoIosMenu  />
            </IconNav>
            <SubMenu>
                <span>Filmes</span>
            </SubMenu>
        </MenuBar>
        <NavLogo>         
            <img 
                src={HBOMaxLogo} 
                alt="logo-site" 
                onClick={() => navigate("/")}
            />    
        </NavLogo>        
        <Menu>
            <IconNav>                
                <IoSearchOutline
                    onClick={() => navigate("/search")} 
                />              
            </IconNav>
            <IconNav>
                <BsPersonCircle  
                    onClick={() => {navigate("/favorite"), goToTheTop()}} 
                />
            </IconNav>
            <SubMenu>
                <span>Eduardo</span>
            </SubMenu>
        </Menu>   
    </NavContainer>  
  )
}

export default Navbar