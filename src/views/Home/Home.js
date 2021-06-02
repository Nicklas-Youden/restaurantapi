import axios from "axios";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Card from "./Card";
import CategoryContext from "../../contexts/CategoryContext";

const Main = styled.main`

    min-height: calc(100vh - 12em);

    border: 5px solid green;
    overflow: scroll;
    flex-grow: 1;
`

export default function Home(){
    const [restaurants, setRestaurants] = useState([]);
		var [chosenCategory] = useContext(CategoryContext);

		// console.log(chosenCategory);
		console.log(restaurants);

    // useEffect(()=>{
		// 	var params = {
		// 		categories: {name: `${chosenCategory}` }
		// 	}; 
    //     axios.get("http://localhost:1337/restaurants", {params})
    //     .then(res => {
    //         setRestaurants(res.data)
    //     })
    // },[setRestaurants])

		
    useEffect(()=>{
			var settings = {params: {name: `${chosenCategory}` }}; 
        axios.get(`http://localhost:1337/categories`, settings)
        .then(res => {
            setRestaurants(res.data)
        })
    },[setRestaurants])

    return (
      <>
        <Header />
        <Nav />
        <Main>
            <ul>
                {restaurants.map(restaurant => {
                    const {id, name, description} = restaurant;
                    <li key="id">
                        <Card name={name} description={description} />
                    </li>
                })}                  
            </ul>
        </Main>
        <Footer />
      </>
    )
}