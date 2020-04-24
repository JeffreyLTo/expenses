import React, { Component } from 'react';


// Quick navbar for front end, just to add some more color to application
class Navbar extends Component {
    render() {
        return(
            <div className="navbar navbar-light bg-dark">
                <div className ="container">
                    <h2 className="text-white">Expenses Tracker</h2>
                </div>
            </div>
        )

    }
}

export default Navbar