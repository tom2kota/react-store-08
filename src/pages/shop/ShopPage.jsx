import React, {Component} from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import {collectionsOverviewContainer} from "../../components/collections-overview/collectionOverviewContainer";
import {collectionPageContainer} from "../collection/collectionPageContainer";
import {fetchCollectionsStart} from "../../redux/shop/shopActions";
import './ShopPage.scss';

class ShopPage extends Component {
    collectionsOverviewContainer;

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart()
    }

    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={collectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={collectionPageContainer}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)