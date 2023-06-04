import Banner from '../../components/Banner/Banner'
import Card from '../../components/Cards/Card'
import Navbar from '../../components/Navbar/Navbar'

import categories from '../../helper/api'

const Homepage = () => {
  
  return (
    <div className='cor'>
        <Navbar />
        <Banner />
        {categories.map((category) => {
          return (
            <Card 
              key={category.name}
              title={category.title}
              path={category.path}
              isLarge={category.isLarge}
              description={category.description}          
            />
          )
        })}     
    </div>
  )
}

export default Homepage