import { useList } from "../../context/favoriteList"
import Navbar from "../../components/Navbar/Navbar"
import CardList from "../../components/Cards/CardList"

const FavoriteTitlePage = () => {
  const { list } = useList()

  return (
    <div style={{ marginTop: "5rem" }}>
        <Navbar />
        <div style={{ padding: "1rem" }}>
          <CardList list={list} />
        </div>
    </div> 
  )
}

export default FavoriteTitlePage