import Container from "react-bootstrap/esm/Container";
import Img1 from './Img1.png'
import './Section1.css';
import Button from "react-bootstrap/esm/Button";

function Section1() {
    return (
        <div className="section1">
            <Container className="d-flex p-2">
                <div className="left-side">
                    <p>What is Firify?</p>
                    <h1>Help the Community !<br></br> Send us an alert</h1>
                    <p>
                        Firify is a software to help people know about wildfires and the dangerous behind it,
                        Also it helps people to verify the data represented by different fire platforms.
                    </p>
                    <Button variant="danger" className='btn-send-alert'>Send an Alert</Button>{' '}
                </div>
                <div className="right-side">
                    <img src={Img1} alt='Total Wildland Fires and Acres' className="image-section1" />
                </div>
            </Container>
        </div>
    );
};

export default Section1;