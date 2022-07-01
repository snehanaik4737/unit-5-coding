import axios from "axios"
import { useEffect, useState } from "react"
import { Card, GridBox } from "./Card"
import { useSearchParams } from "react-router-dom"
 
import { PaginationComponent } from "./PaginationComponent"
export const Mens = () => {
  let [searchParams ,setSearchParams] =useSearchParams()
    const [menData, setMenData] = useState([]);
    const [error,setError]=useState("");
    const [page,setPage]=useState(Number(searchParams.get("page")||1));
    const [ratingOrder,setRatingOrder] =useState((searchParams.get("asc")|| "asc"));

  const [costOrder,setCostOrder]=useState((searchParams.get("asc")|| "asc"));
  const [filterRating, setFilterRating] = useState(0);
  useEffect(()=>{
 
    fetchData({page,ratingOrder,costOrder,filterRating})
  },[page,ratingOrder,costOrder,filterRating])

    const fetchData=({page,ratingOrder,costOrder,filterRating})=>{
      axios({
        url:"http://localhost:8080/menData",
        method:"GET",
        params:{
          _page:page,
    _limit:5,
    _sort:"rating,price",
    _order:`${ratingOrder},${costOrder}`,
    rating_gte:filterRating,
        }
      }).then(res=>{
        setMenData(res.data)
      }).catch(err=>{
      setError(err)
      })
    }
    
    // async function getData() {
    //     const data = await fetch(`http://localhost:8080/menData`).then((d) => d.json());
    //     setMenData(data)
    //    // console.log(data)
    // }

    const addToCart = (d ) => {
      const {image_url,name,price,rating,strikedoffprice} =d
      axios({
        url:"http://localhost:8080/cartData",
        method:"POST",
        data:{
         
          image_url,
          name,
          price,
          rating,
          strikedoffprice,
        }
      }) 
      alert("Item added successfully") 
        // fetch("http://localhost:8080/cartData", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(d),
        // });
    }


    const handleChange=(e)=>{
 
      setRatingOrder(e.target.value)
     
     }
     
     const handleChangeCost=(e)=>{
       setCostOrder(e.target.value)
     }
     

     useEffect(()=>{
      setSearchParams({
         page,
         ratingOrder,
         costOrder
       })
     },[page,ratingOrder,costOrder,setSearchParams])

    return (

      <div>
        <GridBox>

        <div>
          <h4>Filter ratings</h4>
          <button onClick={()=>setFilterRating(4)}>greater than 4</button>
          <button onClick={()=>setFilterRating(3)}>greater than 3</button>
          <button onClick={()=>setFilterRating(2)}>greater than 2</button>
          <button onClick={()=>setFilterRating(1)}>greater than 1</button>
          <button onClick={()=>setFilterRating(0)}>All</button>
        </div>

        <PaginationComponent currentPage={page} lastPage={4} onPageChange={setPage}/>


        <div>
    <select
        //  onChange={(event) => handleChange(event.target.value)}
        onChange={handleChange}
          value={ratingOrder}
      >
       
        <option value="asc">Asc</option>
        <option value="desc">Des</option>
      </select>
    </div>
     <div>
    <select
        //  onChange={(event) => handleChange(event.target.value)}
        onChange={handleChangeCost}
          value={costOrder}
      >
       
        <option value="asc">Cost by asc</option>
        <option value="desc">Cost by des</option>
      </select>
    </div>


          {menData.map((e, i) => (
            <Card key={i}>
              <div>
                <img src={e.image_url} alt={e.name} />
              </div>
              <div>
                <p>{e.name}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    margin: "auto auto",
                  }}
                >
                  <div>{e.price}</div>
                  <div> 
                    <span style={{textDecoration: "line-through"}}>{e.strikedoffprice}</span>
                  </div>
                  <div>Rating :{e.rating}</div>
                </div>
                <div>
                  <button onClick={() => { addToCart(e) }}>Add to Cart</button>
                </div>
              </div>
            </Card>
          ))}
        </GridBox>
      </div>
    );
      
}