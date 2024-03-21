// import logo from './logo.svg';
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import './App.css';

function App() {
  return (
    <div className="App-main">
      
      <header className="App-header">
        <NavigationBar></NavigationBar>
      </header>

      <body className="App-body Width 100%">
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
            <button>hello@samenda.io</button>
          </section>
        </div>

      </body>


      <footer>
        <Footer></Footer>
      </footer>
    </div>

  );
}

export default App;
