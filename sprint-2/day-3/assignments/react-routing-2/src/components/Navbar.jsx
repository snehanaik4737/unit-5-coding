
// import "./nav.css"

// import {Link} from "react-router-dom"
// export const Navbar =()=>{
// const nav =[
//     {title:"Home", to:"/"},
//     {title:"About", to:"/about"},
//     {title:"Mens", to:"/mens"},
//     {title:"Womens", to:"/womens"}
// ]
// return (
//     <div className="navdiv">

//         {/* <Link to ="/">Home</Link>
//         <Link to ="/about">About</Link> */}
//         {nav.map((e,i)=>(
           
//             <Link key={i} to={e.to} className="nav">{e.title}</Link>
//         ))}
//         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAgVBMVEUAAAD////19fXz8/P7+/vp6enu7u7w8PD8/Pzk5OT09PT29vbi4uLl5eXh4eHv7+/n5+fj4+Ps7Ozx8fH4+Pj5+fno6OgxMTFlZWVDQ0POzs6rq6vW1tZOTk66urqLi4vExMSfn58aGhqDg4NbW1t6enonJydtbW0ODg44ODiVlZU77xsuAAALQ0lEQVR4nM1bC3uiPBM15Mo9hMC2qBXtdfv/f+A3A0QBqVaU/d48D90GjjQwkzkzx9kVITwriPQFYT4nRGeMpD4lYYwTzQj3PeLhVR0tAtUrwPqW5H7aYf0R1gA2aLDZIlC94tyylAcs4IJZwxkzMKFcMssNYwKuSp6zEK6yZaCrDJZnEngnESfKz/CNhYQmgqgkJqRMGBGRJEUCi08Wga4Km5qwoCYvQiOsFcYWuaFFYERhhbBFagKYyCIUhi0BFegHCfhMBDZJSkLiRMHywGKZJsSPFeERPokBeyaLQP2VzAOPStocQS4DD49mIvP2RDcJvGWgKx8tFnUWi30wEloMFq8isBiPwGIZWCxyxn04dCVSWKCA1QpYXCo8L+0mVMggkAKeB04EQnreMlD0g+j3xn081F/h7gxhq+awVQXuW9yqlHlcKMaNVaLZ1SnuarUI9BQPErQY7txosHPVxCZ/KBRjohJloIJSqIJzpgz3FC2lsiVEL1NaBdELJoIpvQSUgR8YjOBxE8EVKTGCx5R4GhbfRPA4IEGMEdxfBNowU2ZbFsv6LIaEEjcsFnQsli0C1StckYAVeTF4ZqnBTTVYDBcfl0SZmBEZ58TC1eajj4cOPdH/vXs9DAq70Wir8jJVVoOTcJhITZVXGsUaL4VJoIWyXKsloHzVZTMZ2ARjpI4USTO0GAQSH19fBk+SwbuMo0Wg8SpNgzAXQUhTGXppGoYypSEVNITIGkLs9OAqDSF+hqFYBHrOTNpxyHTa8XDoip6GVYwpOJofioX0n4xehkLWu8Go/lGGAiZCewkqn1ej8Wml1xgwEHkIHOugOVgTrgDpNqZFW4dpOhOarmKIDgY8k7yNF7BarU+5BEa2qIN6GcZWTDt8MG6WQtqhyWxoy0w6IMnhfAVbT8BGTsu82dUt3ehA0XYjA92UQDca6EbzNqzMgDLnB3E1sYJVhVcxso2Mq47GTcC4+FiZr+ZBM+TGGFhMl38mVvCJV72OxeIOGksIJAYIL24JL2wIr2TzoB0zQQ1FvidW8LGJ8aokFi2WddAAGK75KxyNi5UZujjP5kFP3Mi/PyZ8kePigcV8g+G0hQZIeLohPK8lPAi2isfzoJgnQsaSc6lIUldVXVebqq7cC3kmLtNp6MZBT5lOCXTDG7op1Cwo70UkBRECdg2BktcS9xKMWdgT/RVkrq7KVVjlQhrrMSrfuxXsCMshycUqV01D+wXxDCj7gZn0i/PFLpeYLIRauklHdHMjdOV5WMFAKYMVDJYztCl21DEk0F7lM4CmHZSKFIqkrgz6DXRYT7mayeUScdRyCNm5kBASQlJLCAXu8uBgEiZpACdSmMBBcoDLnJBQXoOquDxnplEl6ybh5qtdweHpgeM7Cds/06urf8pQ0immun8cKn2WoQgRFrJRNNJW3hAwoSYn6yVWsPrTSiphI6mEJrXFpIaCO9efIssHjKqNB9GJmdraOW+2aq/KDTh9XWQFNcFYcaydISa2zIQ1VBPB4ZXELYeQeokFHCqONIVFHPIC+kGU/VTdmCXM8CzAE3VjamDuxhPRD6CKawoqPYzg+wVW8D3ihSy6pOom7mNJzKWIs1zqTEiewSTT9hMuVCYzUvhaSj9OZZmZEFf9wodQKTV3afDmJlWXbbuPrYk1aUM3ShpPeSZVRYiOWhcqMBS4B3xYmELlHp6tyBAqDHHxbZvfpOoaR09vrcUGUq3AFOKlGEm14rN9zrGq64LLjtyk6haJyx039EyqbW66LkZSbRNJ0zNVlzgjVPQ2VTf97D74as8LoRrO720yKoT+wlmpxzVT5DzK3Kjq2k33wT80H0u1QYUrU8FQqiXw1j6Qmwd3DZ0RAH+jqmvd26v1OO0ocXWQzQ+k2lRDtrs14wyFu4zr5WZVV7mQ8MbGUq006NpkKNVSH6LYGxaLg7tSZwTUEG5TdUvjPluosVTL0DpqWBDbGHbdu4pH0Oq4p25XdY9ZwpqcSbXwuAcylGobx3lVIyhxHPfCbld1jfOhLSRdCSxegJeEGVhal+AjX4QEYM+uIFaEYgTZ5SNo0nnToZK3q7rCfB13cp4kRvpw8CTKRZJhxExynWgpkiRN4ZAlLnjHZR8qZe2egs5SdZ0bf/wZD1zb+BwWfoepkzj281Rd50UPGMksVVcf6enusRV6lqp7JJWv7fPztjm6X5A0/sK/z9vTFUxqBifghyOXHZup6ros4VBZT0fSMxn3aKQpw2i158aTWex5mU89HtEnOCdonHgnqHQvsQ5nqrra0dMenZY1yYxCl8GXswc6tHFjXAVXFe478LWsB/WdFcxcVVe5LOFARB9K0Ud3aiDVErQC6au64sRKbLaqy9xDVGUfqpFy34fQRnawZZ+Z5ImVrqu6PwzmgurO9k97+Hqf7BCKzkkGpwIX0kxwVdX9SX8tXEg4hGYAxR3G+1Cf46KGyYxLMd7UOJkZq7oX9Ncm8Wm82fagjcTwQftQumkM01d1j6y0ttdU3Qv6q3FZwhMZQPHUENo4p+ipuuGJlewVVfeS/so3XfV0SEgP2qSfAyjBbbNPe6pu6Cy4Ta+puhdVr2OWsAeODjWFDYO/4FmIJaqECSyIpOm68XmIITDRCGXu9X1fVXUv6q/FUddaw9jv22ONwe67d2K/xpD43kPs144Xk+uq7iX9lYZTovMtYxvHV1Xdy/rr7vofuTh28jeq7gX91Wyu/5GLo1a/UnUv6K/kTjOIm1Xdsf7K7tO1XsnNqu5Yf2WbuwSVzQxVd6y/kqc7FvBiZ6i6YTbSX11w+1u/1FXVHPCjbo4XnFTdpDtRdycAeuGuF1TdpsbtVcChOEoANixs4NnCC2wRwgGTosAT7QSuekHRXG0mgef9eNdLqu5ZLkFdSHh/9PfOP6m6hR3qr9SpEIfQuwJNC2Z+eddLqm7mdq7TX/mxiAWqwnKwzPALIWCNtu2xLb4slCGkzVRVG4Yv3/WSqoupe19/zY9F7Gazqar22FS9ydmJTYUtMRfveknVZb4e66+3j79v64JcuevPqm4y0F/NXIn18EL9H+96RdUdRHAz8X3oL8e70j9+23dZ1e3pr6m8h5qeZHx3ry45a4+4aXyTu3t17/3Kp+T39urOd4J2fLL7enWZy1RXh/fXk6KB7TKveLyejt3r++nPvp6+r+P39eoqV8A/l6qwR4sEzCqlLIOjUHBBKWYZOa52UyhSu7TixaP39OrS7lm+sgbqnrI2fWjZFUKOwWovCsjRgV7FPb26qfuG5IkhtKi7u+69iQZc263vQ1C8Gn24j97Vqyu60vWTIlQfV0AmjOsklw/Y9TKStPvo0129uop23vesDUCpe7NrMtGAm3fv4Ksq4K6eS/PfyV29utYlid8Q2UjuXC3hU22ProHkjUApe9QC9/yeXt3y5P5vdb12osiKTDXgHiWL1fNLVTvlYbUxd/Xqhsfv/frj3Uw24LKpvH5r7+zV5e8Td630FDSjUxF8Te7t1Q0mXgH5oQFXnLPY9v5e3VOkc+Ot/KkB1z+rrw7iAb264yW8CfJjA66qvgbYPxv5iF5dUvf58VNcasDlm74gv9UP6tVl5NvlSZ8VudyAa+3arWFbE/qwXl0tsvXudV9D1XG1ZuIkX+923y+QHN7Qq3t9eA0D/w4bAG1D1XgV9x/430SLNODO6tV9bAPujF7dxzbgzunVfWzb45xe3cc24M7q1X1sA+6cXt3HNuDO69V9YAPu3F7d/4sn/lbV/fe9uvc24D6gV3dKf10G+mtVlx3bWx4K/b2qi7BloP+B/030W1U3tTdItcuoutNpx93QG1Rd4NhFoLeoutki0CM3nmOzDoss1iY+i0D/B6pLAQViFh9HAAAAAElFTkSuQmCC"></img>
//     </div>
// )

// }



import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

export const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Mens Products",
      to: "/mens",
    },
    {
      title: "Womens Products",
      to: "/womens",
    },
    {
      title: "Contact Us",
      to: "/contact-us",
    },
    {
      title: "About Us",
      to: "/about-us",
    },
    {
      title: "FAQ",
      to: "/faq",
    },
    {
      title: "Login",
      to: "/login",
    },
    {
      title: <BsCart3/>,
      to: "/cart",
    },
  ];
  return (
    <>
      <div style={{ backgroundColor: "#fbd9f5", padding: "5px", height:"40px",lineHeight:"35px" }}>
        {navItems.map((e, i) => (
          <Link
            key={i}
            to={e.to}
            style={{
              margin: "15px",
             
              textDecoration: "none",
              fontWeight: "bold",
              color: "Black",
            }}
          >
            {e.title}
          </Link>
        ))}
        {/* <Link to="/cart"> <BsCart3/> </Link> */}
        {/* <div>
          <Link to="/login">Login</Link>
          <Link to="/cart">Cart: {0}</Link>
        </div> */}
      </div>
    </>
  );
};