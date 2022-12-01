import React, { Component } from "react";
import { connect } from "react-redux";
import { latestNews, articleNews } from "../actions";
import { bindActionCreators } from "redux";// not required if we use proptype

// import propTypes from 'prop-types'

import ArticleNews from "../component/Home/ArticleNews";
import LatestNews from "../component/Home/LatestNews";
import GalleryNews from "../component/Home/GalleryNews";

class Home extends Component {

    componentDidMount(){
        this.props.latestNews();
        // this.props.articleNews();
        // this.props.dispatch(latestNews())
        // this.props.dispatch(articleNews())
        
    }
    render() {
        return(
            <div>
                <LatestNews latestdata={this.props.articledata.latest}/>
                <ArticleNews articledata={this.props.articledata.artdata}/>                
                <GalleryNews/>
            </div>
        )
    }
}

//will receive state
function mapStateToProps(state) {
    console.log(state);
    return{
        // articledata: state.articles
        articledata: state.articles
    }
}

//will dispatch action
function mapDispatchToProps(dispatch) {
    return bindActionCreators({latestNews, articleNews}, dispatch)
}

// new method
// Home.protoTypes={
//     dispatch:propTypes.func
// }

export default connect (mapStateToProps, mapDispatchToProps)(Home)
// export default connect (mapStateToProps)(Home)