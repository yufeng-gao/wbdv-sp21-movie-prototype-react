import SearchScreen from "./components/search-screen";
import DetailsScreen from "./components/details-screen";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/home-screen";
import './App.css';

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Route path="/" exact={true}>
                    <HomeScreen/>
                </Route>
                <Route path={["/search", "/search/:title"]} exact={true}>
                    <SearchScreen/>
                </Route>
                <Route path="/details/:imdbID" exact={true}>
                    <DetailsScreen/>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;