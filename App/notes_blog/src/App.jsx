import IndexD from 'pages/dashboard/Index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Index from 'pages/Index/Index';
import LoginLayout from 'layouts/LoginLayout';
import Login from 'pages/Login/Login';
import Register from 'pages/Login/Register';
import Contact from 'pages/contacto/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={['/dashboard']}>
            <PrivateLayout>
                <Switch>
                  <Route path='/dashboard'>
                    <IndexD/>
                  </Route>
                </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login', '/register']}>
            <LoginLayout>
              <Switch>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/register'>
                    <Register/>
                </Route>
              </Switch>
            </LoginLayout>
          </Route>
          <Route path={['/','/contact']}>
            <PublicLayout>
              <Switch>
                <Route path='/contact'>
                    <Contact/>
                </Route>
                <Route path='/'>
                    <Index/>
                </Route>
              </Switch>
            </PublicLayout>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
