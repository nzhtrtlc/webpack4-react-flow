import React from 'react';
import './Tab.scss';

class Tab extends React.Component {

    handleTabClick = (event) => {
        event.preventDefault();
        this.props.onClick(this.props.tabIndex);
    }

    render() {
        return (
            <li>
                <a className={`${this.props.linkClassName} ${this.props.isActive ? 'active' : ''}`}
                   onClick={this.handleTabClick}>
                    {this.props.title}
                </a>
            </li>
        );
    }
}

export default Tab;