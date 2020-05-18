import React from "react";
import {Spinner, Container} from 'react-bootstrap';
import "../App.css";

function Loading(){
    return (
        <Container className="load">
            <Spinner animation="border" />
        </Container>
        
    );
}

export default Loading;