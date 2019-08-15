import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaPhoto from "./photos";
import DateCard from "./DateCard";
import Styled from "styled-components";
import Footer from "./Footer";
// import { Flex } from "semantic-ui-react";

 


const WrapperDiv = Styled.div`
  color: #000001;
  margin: 10px 30px 10px 30px;
  text-align: left;
  background: #2AA276;
  font-family: "Kaushan", cursive;
`
const BottomDiv = Styled.div`
    display: flex;
    margin: 20px 0 70px 0;
`
const Title = Styled.h2`
    display: flex;
    align-items: center;
    width: 23%;
    margin: 5px;
    font-size: 2.2rem;
`
const Descrip = Styled.p`
    color: #0C0100;
    width: 75%;
    padding: 10px;
    margin: 5px;
    font-size: 1.5rem;
    border-left: solid 1px #ddab52;
    font-family: "Courgette", cursive;
`


function Card(){

    const [image, setImage] = useState("");
    const [explanation, setExplanation] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    

    useEffect(() => {
        //request info from server and add useEffect to prevent rerendering
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=y54CZckTolqCojW2qsO0J497f2bsh3yFgzEjyKkf&date=${date}`)
            .then(response => {
                console.log(response.data);
                const imgUrl = (response.data.hdurl);
                console.log(imgUrl);
                setImage(imgUrl);
                const imgDescrip = (response.data.explanation);
                console.log(imgDescrip);
                setExplanation(imgDescrip);
                const title = (response.data.title);
                setTitle(title);

            })
            .catch(error => {
                console.log(error);
        })
    }, [date]);
   
    return (

        
        <WrapperDiv>
           
            <DateCard setDate={setDate}/>
            <NasaPhoto imgUrl={image}/>
            <BottomDiv>
                <Title> {title} </Title>
                <Descrip> {explanation} </Descrip>
            </BottomDiv>
         
                <Footer>   </Footer>
                
        </WrapperDiv>
     
    )
}

export default Card;
