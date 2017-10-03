// Libs
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import NewPostForm from './components/NewPostForm'
import PostView from './components/PostView'
import CategoryView from './components/CategoryView'
import Home from './components/Home'
import NotFound from './components/NotFound'

// Actions
import { setCategories, categoriesAreLoading } from './actions/categories'
import { setPosts, postsAreLoading } from './actions/posts'


//Utils
import * as ReadablesAPI from './utils/ReadablesAPI'

// CSS
import './App.css'


class App extends Component {

  componentWillMount() {
    
    this.props.getAllCategories() 
    this.props.getAllPosts()  

  }

  render() {

    const { posts, categories, history } = this.props

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
                < NewPostForm  history={history} />
              )}/>
              
              <Route exact path="/post/:id" render={({ match }) => (
                < PostView 
                  postId={match.params.id}
                  posts={posts}
                />
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

function mapStateToProps (state, props) {
  return {
    categories: state.categories,
    posts: state.posts,
    loadingCategories: state.categoriesAreLoading,
    loadingPosts: state.loadingPosts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getAllCategories: () => {
      dispatch(categoriesAreLoading(true))
      ReadablesAPI.getAllCategories().then(categories => {
        dispatch(setCategories(categories))
        dispatch(categoriesAreLoading(false))
      })
    },
    getAllPosts: () => {
      dispatch(postsAreLoading(true))
      ReadablesAPI.getAllPosts().then(posts => {
        dispatch(setPosts(posts))
        dispatch(postsAreLoading(false))
      })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
