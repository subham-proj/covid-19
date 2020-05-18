import React from "react";
import {Spinner, Container} from 'react-bootstrap';
import "../App.css";
import FooterOther from "./FooterOther";

function Loading(){
    return (
        <div>
        <Container className="load">
            <Spinner animation="border" />
        </Container>
<FooterOther/>
        </div>
        
    );
}

export default Loading;