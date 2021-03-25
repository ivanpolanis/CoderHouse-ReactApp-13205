import {Container, Row, Col} from 'react-bootstrap';
const Footer = () => {
    return(
        <div className="footer bg-dark">
            <Container>
                <Row className="justify-content-md-center">
                    <Col><a href="#link1">Text Example</a></Col>
                    <Col><a href="#link2">Text Example</a></Col>
                    <Col><a href="#link3">Text Example</a></Col>
                </Row>
            </Container>
        </div>
    )
};
export default Footer;