import React from "react";
import SignupContainer from './session/signup_container'
import LoginContainer from "./session/login_container"
import ProfileContainer from "./profile/profile_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import NewsFeedContainer from "./news_feed/news_feed_container";
import { Route } from 'react-router-dom';
import { AuthRoute } from '../utils/route_utils';
import { ProtectedRoute } from '../utils/route_utils';
import Modal from "./modal/modal";
import { Switch } from "react-router-dom";

export default () => (
    <div>
        <Modal/>
        <header>
            <Route exact path="/profile/:userId" component={NavBarContainer} />
            <Route exact path="/newsfeed" component={NavBarContainer} />
        </header>
        <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route exact path="/signup" component={SignupContainer} />
            <Route exact path="/profile/:userId" component={ProfileContainer} />
            <Route exact path="/newsfeed" component={NewsFeedContainer} />
        </Switch>
    </div>
)