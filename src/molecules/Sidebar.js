import React from "react";
import {Divider, Icon, Menu} from "antd";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {history} from "../App";
import {bindActionCreators} from "redux";
import {logout} from "../actions/user.actions";

const keys = {
    "/": "1",
    "/products": "2",
    "/account-settings": "4",
    "/course-center": "5"
};

class Sidebar extends React.Component {
    handleLogout = (e) => {
        this.props.logout();
    };

    render() {
        return (
            <Menu
                defaultSelectedKeys={[keys[history.location.pathname]]}
                defaultOpenKeys={['sub1']}
                mode="inline"
                inlineCollapsed={true}
                className="dashboard-sidebar"
            >
                <div style={{marginTop: '25px'}}>
                    <img src="/logo.png" width="35px"/>
                </div>
                {/*<Menu.Item key="1">*/}
                    {/*<Icon type="home" />*/}
                    {/*<span>Home</span>*/}
                    {/*<Link to="/" />*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item key="2">*/}
                    {/*<Icon type="snippets" />*/}
                    {/*<span>Catalog</span>*/}
                    {/*<Link to="/products" />*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item key="3">*/}
                    {/*<Icon type="book" />*/}
                    {/*<span>Education</span>*/}
                    {/*<Link to="/course-center" />*/}
                {/*</Menu.Item>*/}
                <Menu.Item key="5">
                    <Icon type="book" />
                    <span>Course - Center</span>
                    <Link to="/course-center" />
                </Menu.Item>
                <Menu.Item onClick={this.handleLogout} style={{position: 'absolute', bottom: '20px'}}>
                    <Icon type="logout" />
                    <span>Logout</span>
                </Menu.Item>
            </Menu>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        logout
    }, dispatch);
}

function mapStateToProps(state)
{
    return {
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);