import React from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import PPE from '../images/ppe.jpeg';
import Sani from '../images/sani.jpeg';
import Mask2 from '../images/mask2.jpg';
import Mask1 from '../images/mask1.jpg';
import { Container } from 'react-bootstrap';
import FooterOther from './FooterOther';

function Store() {
    return(
      <div>
        <Container className="store-st">
        <section className="text-center my-5">
            <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center card-store">
            <MDBCardImage
              src={PPE}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            
            <MDBCardBody className="text-center">
              
                <h5>PPE</h5>
              
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                  <p>Men & Women Personal Protective Equipment's Standard Size<br></br> use & throw </p>
                    <MDBBadge pill color="danger">
                      Not Available
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>₹ 980</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center card-store">
            <MDBCardImage
              src={Sani}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              
                <h5>Hand Sanitizer</h5>
              
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    <p>Dettol Sanitize Hand Sanitizer | 60% Alcohol Based Sanitizer (Regular) - 500 ml</p>
                    <MDBBadge pill color="danger">
                      Not Available
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>₹150 </strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center card-store">
            <MDBCardImage
              src={Mask1}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              
                <h5>Mask</h5>
              
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                  <p>SURGICOMFORT Non Woven Elastic Ear-Loop Disposable Face Mask (Pack of 2)</p>
                    <MDBBadge pill color="danger">
                      Not Available
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>₹ 80</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center card-store">
            <MDBCardImage
              src={Mask2}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              
                <h5>Mask</h5>
              
              <h5>
                <strong>
                  <a href="#!" className="dark-grey-text">
                    <p>Flat Fold Respirator NIOSH N95 Certified Protects against Airborne Viruses</p>
                    <MDBBadge pill color="danger">
                      Not Available
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>₹ 250</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        </MDBRow>
        </section>
        </Container>

<FooterOther/>
        </div>
    );
}

export default Store;



