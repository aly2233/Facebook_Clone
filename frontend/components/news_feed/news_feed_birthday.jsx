
import React from 'react';

class NewsFeedBirthday extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='newsfeed-right'>
                <div className='birthdays'>
                    <div className='birthday-icon'></div>
                    <p>No upcoming birthdays</p>
                </div>
                
                <div className='calendar'>
                    <div className='calendar-icon'></div>
                    <p>No upcoming events</p>
                </div>
                
                <div className='credits-container'>
                    <div className='credits'>Inspired by Facebook</div>
                    <div className='copyright-newsfeed'>&copy; Alan Yueh 2022</div>
                </div>
            </div>
        );
    }
}

export default NewsFeedBirthday;