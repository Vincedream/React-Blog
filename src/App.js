import React, { Component } from 'react';
import { Redirect, Link, Route, Switch } from "react-router-dom";
import './index.css'
import About from './container/about/about';
import Article from './container/article/article';
import Category from './container/category/category';
import Photography from './container/photography/photography';
import Header from './components/header/header';
import Nav from './components/nav/nav';
class App extends Component {
  render() {
    return (
      <div style={{width:'960px',margin:'0 auto'}} >
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={Article} />
          <Route path="/category" component={Category} />
          <Route path="/photography" component={Photography} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}
export default App;
