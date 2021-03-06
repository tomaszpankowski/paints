import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class IndexS1 extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(    
            <Container fluid className="d-flex minh-100vh align-items-center py-5">
                <Row className="mx-0 w-100 mt-5 mt-md-0">
                    <Col xs={12} md={{span:6,offset:4}} lg={{span:5,offset:6}} className="minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center px-3 text-shadow pt-5"> 
                            <img src="img/navbar_logo.png" className="img-fluid" alt="logo"/>
                            <h2 className="display-6 text-dark-50 text-uppercase">
                                Lorem ipsum dolor
                            </h2>
                            <p className="lead text-dark">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                                quae ab illo inventore veritatis et quasi 
                            </p>
                            <Link to="/" className="btn btn-outline-dark rounded-pill">Lorem ipsum!</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default IndexS1;