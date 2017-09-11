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

// CSS
import './App.css'


class App extends Component {

  state= {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
      voteScore: 6,
      deleted: false 
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: '6ni6ok3ym7mf1p33lnez',
      timestamp: 1468479767190,
      title: 'Learn Redux in 10 minutes!',
      body: 'Just kidding. It takes more than 10 minutes to learn technology.',
      author: 'thingone',
      category: 'redux',
      voteScore: -5,
      deleted: false
    },
    "8xf0y6diyjabvozdd253nd": {
      id: '8xf0y6diyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
      voteScore: 6,
      deleted: false 
		},
    "8xf0y6diyjabvozdd253na": {
      id: '8xf0y6diyjabvozdd253na',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
      voteScore: 6,
      deleted: false 
    },
    "8xf0y6diyjabvozdd253ns": {
      id: '8xf0y6diyjabvozdd253ns',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
      voteScore: 6,
      deleted: false 
    }
  }

  render() {

    const { state } = this

    return (
        <div>

					{/* Navigation */}
					< Header / >
          
          {/* Routes */}

          <Switch>
            
            <Route exact path="/" render={() => (
              < Home posts={state} />
            )}/>
          
            <Route exact path="/new" render={() => (
              < PostForm />
            )}/>
            
            <Route exact path="/post" render={() => (
              < PostView />
            )}/>

            <Route exact path="/category" render={() => (
              < CategoryView posts={state} />
            )}/>
            
          </Switch>

					
					{/* Footer*/}
					< Footer />

        </div>
    )
  }
}

export default App
