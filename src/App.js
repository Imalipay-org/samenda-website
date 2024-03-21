// import logo from './logo.svg';
// import './App.css';
import Bottom from './Footer'
import NavigationBar from './NavigationBar'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App-main">
      
      <header className="App-header">
        <NavigationBar></NavigationBar>
      </header>

      <body className="App-body">
        <div>
          <h1>Sandbox as a Service</h1>
          <h2 className="color">for Africa's Digital Transformation</h2>
          <section>
            <ul>
              <li>Fintech Transformation</li>
              <li>Digitization</li>
              <li>API as a Service</li>
            </ul>
          </section>
          <section>
            <div>
              Banks
            </div>
            <div>
              Financial Services
            </div>
            <div>
              Insurance Companies
            </div>
          </section>
          <section>
            <p>For busidess enquiries reach out to</p>
            <Button>hello@samenda.io</Button>
          </section>
        </div>

      </body>


      <footer>
        <Bottom></Bottom>
      </footer>
    </div>

  );
}

export default App;
