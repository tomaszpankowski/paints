import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import OfferS1 from "../components/offer-s1";
import OfferS2 from "../components/offer-s2";
import OfferS3 from "../components/offer-s3";

class Offer extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <OfferS1/>
                <OfferS2/>
                <OfferS3/>
            </Container>    
        );
    }
}

export default Offer;