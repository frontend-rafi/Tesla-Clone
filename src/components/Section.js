import React from 'react'
import styled from "styled-components"
const Section = ({title,description,leftBtnText,rightBtnText,backgroundImage}) => {
  return (
    <Wrap bgImage ={backgroundImage  }>
  
    <ItemText>
<h1>{title}</h1>
<p>{description}</p>
    </ItemText>
  
    <Buttons>
      
      <DownArrow src='images/down-arrow.svg'/>
    <ButtonGroup>
      
 <LeftButton >
  {leftBtnText}
  </LeftButton>
  {
    rightBtnText && 
<RightButton>{rightBtnText}</RightButton>
  }

    </ButtonGroup>
 
    </Buttons>
        </Wrap>
  )
}

export default Section

 const Wrap = styled.div`
 width:100vw;


height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url('/images/model-s.jpg' );
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center; 
background-image:${props=> `url('/images/${props.bgImage}')`}
`
const ItemText = styled.div`
 padding-top:15vh;
 text-align:center;
z-index:-1;

`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:55px;

@media (max-width:768px){
    flex-direction:column;
   
}






`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:#fff;
text-transform:uppercase;
font-size:12px;
display:flex;
align-items:center;
justify-content:center;
border-radius:100px;
opacity:0.85;
cursor:pointer;
margin:20px;
font-weight:500;

`;


const RightButton = styled.div`

background-color:#fff;
height:40px;
width:256px;
color:black;
text-transform:uppercase;
font-size:12px;
display:flex;
align-items:center;
justify-content:center;
border-radius:100px;
opacity:0.85;
font-weight:500;
cursor:pointer;
margin:20px;
`
const Buttons = styled.div`
display: flex;
flex-direction:column;
gap:-100px;
 margin-bottom:5%;
padding:0;
 height:100px;
 
@media (max-width:768px){
   margin-bottom:25%;
   
}
`

const DownArrow = styled.img`
margin-top:5px;
height:40px;
margin-bottom:-10px;
cursor:pointer;
animation:animateArrow 1.5s infinite;
`
