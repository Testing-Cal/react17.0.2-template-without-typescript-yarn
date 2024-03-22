import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home';
import Dashboard from './dashboard';
import Listing from './listing';
import PageNotFound from './page-not-found';

const App = () => {
  const basePath = process.env.REACT_APP_CONTEXT;
  return (
    <Router basename={basePath}>
      <div>
          <nav style={{margin: '20px'}}>
              <Link to="/" style={{marginRight: '20px'}}>Home</Link>
              <Link to="/dashboard" style={{marginRight: '20px'}}>Dashboard</Link>
              <Link to="/dashboard/listing">Listing</Link>
          </nav>

          <Routes>
              <Route path="/dashboard/*">
                    <Route index element={<Dashboard />} />
                    <Route path='listing' element={<Listing />} />
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </div>
    </Router>
   )
}

render(<App />, document.getElementById('root'));

/*

class based component

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Welcome to Integrated Digital Platform'
    };
  }

  render() {
   const basePath = process.env.REACT_APP_CONTEXT;
    return (
        <Router basename={basePath}>
            <div>
                <nav style={{margin: '20px'}}>
                    <Link to="/" style={{marginRight: '20px'}}>Home</Link>
                    <Link to="/dashboard" style={{marginRight: '20px'}}>Dashboard</Link>
                    <Link to="/listing">Listing</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home name={this.state.name}/>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/listing" element={<Listing />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </Router>
    )
  }
}

render(<App />, document.getElementById('root'));

*/
