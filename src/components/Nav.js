/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import CategoryContext from "../contexts/CategoryContext";


export default function Nav() {
    const [categories, setCategories] = useState([]);
		var setChosenCategory = useContext(CategoryContext)[1];

    useEffect(()=>{
        axios.get("http://localhost:1337/categories")
        .then(res => {
            setCategories(res.data);
        })
    },[setCategories])

  return (
    <nav css={css`
        height: 2em;
        background: purple;
        position: sticky;
        top:0;
        display: flex;
    `}>
      <ul
        css={css`
            border: 2px solid black;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            overflow: scroll;            
        `}
      >
        {categories.map(category =>{
          const {name, id} = category;
          return (
          <li
					key={id}
            css={css`
              border: 2px solid pink;
                
            `}
          >
            <button onClick={()=> setChosenCategory(name)}>{name}</button>
          </li>
          )
        })}
      </ul>
    </nav>
  )
}