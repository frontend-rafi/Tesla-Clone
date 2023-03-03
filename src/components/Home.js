import React from 'react'
import styled from 'styled-components'
import Section from './Section'
// import Header from './Header';

const Home = () => {
  return (
    <Container>
     
      <Section
      title="Model-S"
      description= "Order Online for Touches Delivery"
      backgroundImage='model-s.jpg'
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      />
       <Section
       title="Model-Y"
      description= "Order Touches Delivery"
      backgroundImage='model-y.jpg'
      leftBtnText ="Custom order"
      rightBtnText ="Existing inventory"
       />
        <Section title="Model 3"
      description= " for Touches Delivery"
      backgroundImage='model-3.jpg'
      leftBtnText ="Custom order"
      rightBtnText ="Existing inventory"
      /> 
       

           <Section title="Model-X"
      description= "Order Online Delivery"
      backgroundImage='model-x.jpg'
      leftBtnText ="Custom order"
      rightBtnText ="Existing inventory"/>
        
<Section title="Solar fro New Roofs"
      description= "Makes You Bright"
      backgroundImage='solar-roof.jpg'
      leftBtnText ="Custom order"
      rightBtnText ="Existing inventory"/>
    
    <Section title="Solar Best panel"
      description= "Being Bright"
      backgroundImage='solar-panel.jpg'
      leftBtnText ="Custom order"
      rightBtnText ="Existing inventory"/>
    
    <Section title="Accessories"
      description= "Being Bright"
      backgroundImage='accessories.jpg'
      leftBtnText ="Shop Now"
/>
    
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
z-index:10;
`