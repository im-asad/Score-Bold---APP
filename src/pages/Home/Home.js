import React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '10vw', margin: '0 auto'}}>
                    <div>
                        <h2 style={{width: '100%'}}>Landing Page</h2>
                        <Link style={{display: 'block'}} className="underline" to="/login">
                            Login
                        </Link>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Home;
