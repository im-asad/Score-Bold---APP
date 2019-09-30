import React from "react";
import {Route} from "react-router-dom";

import Sidebar from "../../molecules/Sidebar";
import Catalog from "../../templates/Catalog/Catalog";
import Product from "../../templates/Product/Product";
import AccountSettings from "../../templates/Account/Account";
import CourseAdmin from "../../templates/CourseAdmin/CourseAdmin";
import DashboardHome from "../../templates/Home/Home";
import Education from "../../templates/Education/Education";
import Course from "../../templates/Course/Course";
import Chapter from "../../templates/Chapter/Chapter";

import "./Dashboard.css";

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <Sidebar />
                <div className="dashboard-container">
                    <Route exact path="/" component={DashboardHome} />
                    <Route exact path="/products" component={Catalog} />
                    <Route exact path="/products/:productId" component={Product} />
                    {/*<Route exact path="/course-center" component={Education} />*/}
                    <Route exact path="/account-settings" component={AccountSettings} />
                    <Route exact path="/course-center" component={CourseAdmin} />
                    <Route exact path="/course-center/:courseId" component={Course} />
                    <Route exact path="/course-center/:courseId/chapter/:chapterId" component={Chapter} />
                </div>
            </div>
        )
    }
}

export default Dashboard;
