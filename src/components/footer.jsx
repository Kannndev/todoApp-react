import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
import { helper } from './../helpers/helper';

class Footer extends Component {
    state = {}
    render() {
        const { count, onClear, completedCount } = this.props;
        return (<div className="todo footer-container">
            <div className="form-control todo-text footer">
                <div className="col-3" style={{ textAlign: 'left', padding: 0 }}>
                    <span>
                        {count} {helper.getPunctuation(count)} left
                    </span>
                </div>
                <div className="col-7" style={{ padding: 0 }}>
                    <NavLink to="/all" exact activeStyle={{ color: "red" }} className="btn">All</NavLink>
                    <NavLink to="/active" exact activeStyle={{ color: "red" }} className="btn">Active</NavLink>
                    <NavLink to="/completed" exact activeStyle={{ color: "red" }} className="btn">Completed</NavLink>
                </div>
                <div className="col-2" style={{ textAlign: 'right', padding: 0 }}>
                    <button disabled={!completedCount} className="btn" onClick={() => onClear()}>Clear</button>
                </div>
            </div>
        </div>);
    }
}

export default Footer;