import React , { useState } from "react";
import { Card, CardImg, CardHeader, CardBody, CardText, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from "styled-components";

let today = new Date().toISOString().substr(0, 10);

const Title = styled.div`
font-size: 35px;
margin-right: 72%;

`;

const Subtitle = styled.div`
font-size: 35px;
width: 700px;

font-style: italic;


`

const Explanation = styled.div`
width: 700px;
font-size: 10px;


`;

const Input = styled.div`
margin-right: 83%;
`


const PhotoCard = props => {
    const[dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
       

        <Card>

      <CardHeader><Input>

<input type="date" id="start" name="trip-start"
       value= {today}
       min="2018-01-01" max="2018-12-31"></input>

</Input><Title> Photo of the Day:</Title></CardHeader> 
        <CardBody>
            
     <CardImg height = "600px"  margin = "55px" src = {props.data.url}/>
     <CardText></CardText>
     <ButtonDropdown isOpen = {dropdownOpen} toggle = {toggle}>
         <DropdownToggle>
      <Subtitle>{props.data.title}</Subtitle>
      </DropdownToggle>
     
      <DropdownMenu>
      <Explanation>
          <DropdownItem height = "55px">
              
          {props.data.explanation}
          
          </DropdownItem>
          </Explanation>
      </DropdownMenu>
      
      </ButtonDropdown>
        
        </CardBody>
    </Card>
    
    )
}




export default PhotoCard;

