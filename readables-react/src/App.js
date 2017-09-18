// Libs
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import PostForm from './components/PostForm'
import PostView from './components/PostView'
import CategoryView from './components/CategoryView'
import Home from './components/Home'
import NotFound from './components/NotFound'

//Utils
import * as ReadablesAPI from './utils/ReadablesAPI'

// CSS
import './App.css'


class App extends Component {

  state = {
    posts: [],
    categories: []
  }
  componentDidMount = () => {
    
    ReadablesAPI.getAllPosts().then(data => {
        this.setState({ posts: data })
    })

    ReadablesAPI.getAllCategories().then(data => {
      this.setState({ categories: data })
    })

  }
  
  


  render() {

    const { posts, categories } = this.state

    return (
        <div className="app">

          <div className="main-wrapper">

            {/* Navigation */}

            < Header / >
            
            {/* Routes */}

            <Switch >
              
              <Route exact path="/" render={({ match }) => (
                < Home 
                  posts={ posts } 
                  categories={ categories }
                />
              )}/>
            
              <Route exact path="/new" render={({ match }) => (
                < PostForm />
              )}/>
              
              <Route exact path="/post" render={({ match }) => (
                < PostView />
              )}/>

              <Route exact path="/category/:url"  render={({ match }) => (
                < CategoryView 
                  posts={posts}
                  categoryPath={match.params.url}
                />
              )}/>
              
              <Route render={() => (
                <NotFound/>
              )}/>
              
            </Switch>
            
            </div>
            
					{/* Footer*/}

          < Footer />
          
        </div>
    )
  }
}

export default App
