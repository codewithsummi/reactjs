import React from 'react';
import { Route , Link ,Switch, BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import Sidebar from './Sidebar'
import Home from './Home';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Slider/>
      <section>
		<div className="container">
			<div className="row">
           <Sidebar/>
           <div class="col-sm-9 padding-right">
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/contact" exact component={Contact}/>
              </Switch>
           </div>
      </div>
      </div>
      </section>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
