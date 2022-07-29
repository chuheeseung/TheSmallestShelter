import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import MyInfo from "../MyPage/MyInfo";
import "./MyPage.css";
import MyLikeAnimal from "./MyLikeAnimal";

class Tabs extends Component {
  static childContextTypes = {
    activeIndex: PropTypes.number.isRequired,
    onSelectTab: PropTypes.func.isRequired
  };

  static defaultProps = {
    defaultActiveIndex: 0
  };

  state = {
    activeIndex: this.props.defaultActiveIndex
  };

  getChildContext() {
    return {
      activeIndex: this.state.activeIndex,
      onSelectTab: this.selectTabIndex
    };
  }

  selectTabIndex = activeIndex => {
    this.setState({ activeIndex });
  };

  render() {
    return <div className="Tabs">{this.props.children}</div>;
  }
}

class TabList extends Component {
  static contextTypes = {
    activeIndex: PropTypes.number.isRequired,
    onSelectTab: PropTypes.func.isRequired
  };

  render() {
    const { activeIndex } = this.context;
    const children = Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        onSelect: () => this.context.onSelectTab(index)
      });
    });
    return <div className="tabs">{children}</div>;
  }
}

class Tab extends Component {
  render() {
    const { isActive, isDisabled, onSelect } = this.props;
    return (
      <div
        className={
          isDisabled ? "tab disabled" : isActive ? "tab active" : "tab"
        }
        onClick={isDisabled ? null : onSelect}
      >
        {this.props.children}
      </div>
    );
  }
}

class TabPanels extends Component {
  static contextTypes = {
    activeIndex: PropTypes.number.isRequired
  };

  render() {
    const { children } = this.props;
    const { activeIndex } = this.context;
    return <div className="panels">{children[activeIndex]}</div>;
  }
}

class TabPanel extends Component {
  render() {
    return this.props.children;
  }
}

function MyPage() {
    return (
      <div>
        <Tabs defaultActiveIndex={0}>
          <TabList>
            <Tab>
              개인정보
            </Tab>
            <Tab>
              나의 관심동물
            </Tab>
            <Tab> {/*<Tab isDisabled>*/}
              쪽지목록
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel><MyInfo></MyInfo></TabPanel>
            <TabPanel><MyLikeAnimal/></TabPanel>
            <TabPanel>SPACE</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    );
  }

export default MyPage;
