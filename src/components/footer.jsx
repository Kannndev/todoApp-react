import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

class Footer extends Component {
    state = {}
    render() {
        const { count } = this.props;
        return (<div className="todo footer-container">
            <div className="form-control todo-text footer">
                <div className="col-3" style={{ textAlign: 'left', padding: 0 }}>
                    <span>
                        {count}
                    </span>
                </div>
                <div className="col-7" style={{ padding: 0 }}>
                    <NavLink to="/all" exact activeStyle={{ color: "red" }} className="btn">All</NavLink>
                    <NavLink to="/active" exact activeStyle={{ color: "red" }} className="btn">Active</NavLink>
                    <NavLink to="/completed" exact activeStyle={{ color: "red" }} className="btn">Completed</NavLink>
                </div>
                <div className="col-2" style={{ textAlign: 'right', padding: 0 }}>
                    <button className="btn">Clear</button>
                </div>
            </div>
        </div>);
    }
}

export default Footer;