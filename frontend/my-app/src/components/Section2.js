import './Section2.css';
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Img2 from './Img2.png';

function Section2() {
    return (
        <div className="section2">
            <Container className="d-flex p-2">
                <div className="left-side">
                    <img src={Img2} alt='Latest Fires detected by satellites' className="image-section2" />
                </div>
                <div className="right-side">
                    <h2>Latest Fires detected by satellites</h2>
                    <p>
                        Reintroducing Sales Hub: HubSpot’s sales software that helps your 
                        sales team replace the broken “more is more” playbook with 
                        technology that puts the customer first.
                    </p>
                    <p>
                        Enable your teams to reclaim their productivity and rekindle their
                        passion for selling with Sales Hub's new tools for prospecting, unified
                        reporting, and intelligent deal management.
                    </p>
                    <Button variant="danger" className='btn-open-maps'>Open Maps</Button>{' '}
                    <Button variant="outline-danger" className='btn-learn-more'>Learn more</Button>{' '}
                </div>
            </Container>
        </div>
    );
};

export default Section2;