import { BrowserRouter, Route, Link } from "react-router-dom";

import '../css/App.css';
import Header from './Header';
import Main from './Main';
import Partners from './Partners';
import Services from './Services';
import Footer from './Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Route path="/" component={Main} exact={true}/>
        <Route path="/partners" component={Partners} exact={true}/>  
        <Route path="/services" component={Services} exact={true}/>  
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
