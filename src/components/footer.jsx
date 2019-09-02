import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/footer.css';
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
                    <NavLink to="/all" exact activeStyle={{ color: "red" }} className="btn icon-btn">All</NavLink>
                    <NavLink to="/active" exact activeStyle={{ color: "red" }} className="btn icon-btn">Active</NavLink>
                    <NavLink to="/completed" exact activeStyle={{ color: "red" }} className="btn icon-btn">Completed</NavLink>
                </div>
                <div className="col-2" style={{ textAlign: 'right', padding: 0 }}>
                    <button disabled={!completedCount} className="btn icon-btn" onClick={() => onClear()}>Clear</button>
                </div>
            </div>
        </div>);
    }
}

export default Footer;