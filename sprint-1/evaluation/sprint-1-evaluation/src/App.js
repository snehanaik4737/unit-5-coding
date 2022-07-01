import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const [salary,setSalary] =useState("asc");
  const[page,setPage]=useState(1);

  const[asc,setAsc] =useState(true);

useEffect(()=>{
  fetchData({page,salary})
},[page,salary])

const fetchData= async({page,salary})=>{
  setLoading(true);
  axios({
    method:"GET",
     url:"https://json-server-mocker-masai.herokuapp.com/candidates",
      //url:"http://localhost:8080/candidates",
    params:{
      _page:page,
      _limit:5,
      _sort:"salary",
      _order:salary,

    }

  })
  .then(res=>{
    setData(res.data);
    setLoading(false);
  })
  .catch(err=>{
   setError(true);
   setLoading(false);
  })
}

const handlePage=(value)=>{
  setPage(value+page)
}
const handleminus=(value)=>{
  setPage(page-value)
}

const handlesort=(value)=>{
  console.log(value)
  setAsc(value[0])
  setSalary(value[1])
}

console.log(data)
console.log("page",page)
  return (
    <div className="App">
      <div>

    { loading  &&  <div id="loading-container">...Loading</div>} 
    {error && <div>Something went wrong!</div>} 

  {asc ?(
      <Button onClick={handlesort}id="SORT_BUTTON" title={`Sort by Descending Salary`} />
     ):(
      <Button onClick={handlesort}id="SORT_BUTTON" title={`Sort by Ascending Salary`}/>
    
        
      )
    }  

        {/* <Button onClick={handlesort}id="SORT_BUTTON" title={`Sort by Descending Salary`} /> */}

        <Button onClick={handleminus}title="PREV" id="PREV" />
        <Button  onClick={handlePage} id="NEXT" title="NEXT" />
      </div>
      {data.map((item) =>(
        <CandidateCard key={item.id} {...item}/>
      ))}
    </div>
  );
}
