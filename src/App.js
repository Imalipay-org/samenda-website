// import logo from './logo.svg';
// import './App.css';
import Bottom from './Footer'
import NavigationBar from './NavigationBar'
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <div className="bg-primary vh-100" >
        <div className="my-4 border">
          <NavigationBar></NavigationBar>
        </div>
        

      <body>
        <Container className='text-white text-center bg-primary my-5 align-items-center' fluid>
          <Row className='border my-5'>
            <h1 className='my-auto'>Sandbox as a Service</h1>
            <h2 className="text-success">for Africa's Digital Transformation</h2>
          </Row>
          <Row className='border my-5'>
            <ul  className='text-left list-unstyled'>
              <li>Fintech Transformation</li>
              <li>Digitization</li>
              <li>API as a Service</li>
            </ul>
          </Row>
          <Row className='border my-5'>
            <p>We Build+Consult For</p> 
            <Col>
              Banks
            </Col>
            <Col>
              Financial Services
            </Col>
            <Col>
              Insurance Companies
            </Col>
          </Row>
          <Row className='mx-auto bg-secondary border w-75'>
            <div className=' my-5'>
            <p className='mx-auto'>For business enquiries reach out to</p>
            <Button className='w-50 mx-auto'>hello@samenda.io</Button>
            </div>
          </Row>
        </Container>
      </body>


      <footer>
        <Bottom></Bottom>
      </footer>
    </div>

  );
}

export default App;
