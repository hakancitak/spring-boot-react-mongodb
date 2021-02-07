import React from 'react'
import BookSave from '../pages/BookSave';
import { HashRouter as Router, Route, Switch ,Link} from 'react-router-dom';
import { BookList } from '../pages/BookList'
import { BookUpdate } from '../pages/BookUpdate'


const App = () => {
    return (
        <Router>
        <div>
               
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/" className="navbar-brand">
                Book Managemnet
                </a>
                <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/booklist"} className="nav-link">
                    Book List
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/add"} className="nav-link">
                    Book Add
                    </Link>
                </li>
                </div>
            </nav>

            <div className="container mt-3">
                
                    <Switch>
                        <Route exact path={["/", "/booklist"]} component={BookList} />
                        <Route exact path="/add" component={BookSave} />
                        <Route exact path="/bookupdate/:id" component={BookUpdate} />
                    </Switch>
                
            </div>
        
        </div>
        </Router>
    )
}
export default App;