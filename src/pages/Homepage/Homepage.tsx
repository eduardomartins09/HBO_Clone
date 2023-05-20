import Banner from '../../components/Banner/Banner'
import categories from '../../helper/api'
import Card from '../../components/Cards/Card'
import Navbar from '../../components/Navbar/Navbar'

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