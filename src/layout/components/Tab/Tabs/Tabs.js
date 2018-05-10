import React from 'react';
import Header from 'Components/Header';

class Tabs extends React.Component {

    state = {
        activeTabIndex: 0
    };

    handleTabClick = (tabIndex) => {
        if (tabIndex != this.state.activeTabIndex) {
            this.setState({
                activeTabIndex: tabIndex
            });
        }
    }

    // Encapsulate <Tabs/> component API as props for <Tab/> children
    renderChildrenWithTabsApiAsProps = () => {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick: this.handleTabClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
            });
        });
    }

    // Render current active tab content
    renderActiveTabContent = () => {
        const { children } = this.props;
        const { activeTabIndex } = this.state;
        if (children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    }

    render() {
        return (
            <div className="tabs">
                <Header>
                    <div className="col-6 col-md-6 col-lg-6 d-flex align-self-center tab">
                        <ul>
                            {this.renderChildrenWithTabsApiAsProps()}
                        </ul>
                    </div>
                    <div className="col-6 col-md-6 col-lg-6 d-flex align-self-center justify-content-end text-right">
                        <a href="#" className="btn">Raw Tracking File</a>
                        <a href="#" className="btn">Raw Tracking File</a>
                    </div>
                </Header>
                <div className="tabs-active-content">
                    {this.renderActiveTabContent()}
                </div>
            </div>
        );
    }
}

export default Tabs;