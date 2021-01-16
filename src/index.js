import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import {
    ApolloClient,
    InMemoryCache,
    useQuery,
    gql,
    ApolloProvider,
    createHttpLink
    /*NormalizedCacheObject*/
} from '@apollo/client';
import { setContext } from "@apollo/client/link/context"
// import SearchPage from "./pages/SearchPage"
import LoginPage from "./pages/LoginPage"
import Home from "./pages/Home"
import BookPage from "./pages/BookPage"
import SearchPage from "./pages/SearchPage"
import Header from "./components/Header"
import SellPage from "./pages/SellPage"
import MyShelves from "./pages/MyShelves"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import SignIn from './components/SignIn'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {blue} from '@material-ui/core/colors'

const httpLink = createHttpLink({
    uri: 'http://localhost:2000/',
    credentials: "same-origin",
})

const colorTheme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: blue[600],
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#f73378',
        main: '#f50057',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#fff',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    }, 
  });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }
})
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});



class App extends Component {
    constructor() {
        super()
        this.state = {
            authToken: localStorage.getItem("token")
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin(){
        this.setState({
            authToken:localStorage.getItem("token")
        })
        window.location.reload()
    }
    render() {

        return (
            <div>
                <ThemeProvider theme={colorTheme}>
                    <SignIn/>
                </ThemeProvider>
            </div>
            // <Router>
            //     <ApolloProvider client={client}>
                    
            //         <Header isLogin={this.state.authToken} handleLogin={this.handleLogin}/>
            //         <Switch>

            //             <Route path="/search">
            //                 <h2>SearchPage</h2>
            //                 <SearchPage />
            //             </Route>
            //             <Route exact path="/forSaleBooks/:bookId">
            //                 <h2>Book Page</h2>
            //                 <BookPage />
            //             </Route>
            //             <Route path="/my">
            //                 <h2>My shelves</h2>
            //                 <MyShelves />
            //             </Route>
            //             <Route path="/book/isbn">
            //                 <h2>Book Info</h2>
            //                 <BookInfo />
            //             </Route>
            //             <Route exact path="/login" render={(props)=><LoginPage handleLogin={this.handleLogin} props={props}/>}/>
            //             <Route exact path="/user/sell" render={()=><SellPage />}/>
            //             <Route exact path="/register" render={(props)=><LoginPage handleLogin={this.handleLogin} props={props}/>}/>
            //             <Route exact path="/" render={(props)=><Home history={props.history}/>}/>
            //         </Switch>
            //     </ApolloProvider>
            // </Router>
        )
    }
}

function BookInfo() {
    return (
        <h2>BookInfo</h2>
    )
}


render(<App />, document.getElementById('root'));
