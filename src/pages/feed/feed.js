import React, { Component, Fragment } from "react"
import { Helmet } from "react-helmet"
import FeedCard from "../../components/feedCard"
import Navbar from "../../components/navbar"
import stories from "../../components/feedCard/stories.json"

class Feed extends Component {
    state = {
        stories
    }

    render(){

        const feedCSS = {
            headingFont: {
                fontFamily: "'Russo One', sans-serif",
                marginLeft: "10px",
                color: "black"
            }
        }
        return(
           <Fragment>
               <Helmet>
                   <style>{'body { background-color: #96b5c9; }'}</style>
               </Helmet>
               

               
               <Navbar />
               <h4 style={feedCSS.headingFont}>News</h4>
               {this.state.stories.map(story => (
                   <FeedCard 
                   image = {story.image}
                   link = {story.link}
                   title = {story.title}
                   source = {story.source}
                   />
               ))}

            
               
           </Fragment> 
        )
    }
}

export default Feed