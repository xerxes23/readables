// Libs
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewPostForm from './NewPostForm'
import PostEdit from './PostEdit'
import PostView from './PostView'
import CategoryView from '../components/CategoryView'
import Home from '../components/Home'
import NotFound from '../components/NotFound'

// Actions
import { setCategories, categoriesAreLoading } from '../actions/categories'
import { setPosts, postsAreLoading } from '../actions/posts'


//Utils
import * as ReadablesAPI from '../utils/ReadablesAPI'
import { objectToArray} from '../utils/utils.js'

// CSS
import '../App.css'


class App extends Component {

	componentWillMount = () => {
		
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
								history={ history }
							/>
						)}/>
						
						<Route exact path="/new" render={({ match }) => (
							< NewPostForm  
								history={history} 
							/>
						)}/>
						
						<Route exact path="/edit/:id" render={({ match }) => (
							< PostEdit 
								history={history}
								post={posts.find(post => post.id === match.params.id)}
								postId={match.params.id}
							/>
						)}/>

						<Route exact path="/:category/:id" render={({ match }) => (
							< PostView 
								postId={match.params.id}
								posts={posts}
								history={history}
							/>
						)}/>

						<Route exact path="/:url"  render={({ match }) => (
							< CategoryView 
								posts={posts}
								categoryPath={match.params.url}
								history={history}
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

const mapStateToProps = (state, props) => ({
    categories: state.categories,
    posts: objectToArray(state.posts),
    loadingCategories: state.categoriesAreLoading,
    loadingPosts: state.loadingPosts
})

const mapDispatchToProps  = (dispatch) => ({
    getAllCategories() {
      dispatch(categoriesAreLoading(true))
      ReadablesAPI.getAllCategories().then(categories => {
        dispatch(setCategories(categories))
        dispatch(categoriesAreLoading(false))
      })
    },
    getAllPosts() {
      dispatch(postsAreLoading(true))
      ReadablesAPI.getAllPosts().then(posts => {
        dispatch(setPosts(posts))
        dispatch(postsAreLoading(false))
      })
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
