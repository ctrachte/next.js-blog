import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faList,
  faCode,
  faFileExport,
  faPlug,
  faHandHolding,
  faQuestionCircle,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.initRef = React.createRef();

    this.state = { collapsed: true };

    this.Open = this.Open.bind(this);
    this.hoverMenu = this.hoverMenu.bind(this);
    this.Close = this.Close.bind(this);
  }

  hoverMenu(event) {
    event.preventDefault();
    this.state.collapsed ? this.Open() : this.Close();
  }
  Open() {
    this.setState({ collapsed: false });
  }
  Close() {
    this.setState({ collapsed: true });
  }

  render() {
    return (
      <div className="SideMenuContainer">
        <ProSidebar
          collapsed={this.state.collapsed}
          onMouseEnter={this.hoverMenu}
          onMouseLeave={this.hoverMenu}
        >
          <Menu>
            <MenuItem
              onClick={this.props.AboutScroll}
              icon={<FontAwesomeIcon icon={faQuestionCircle} />}
            >
              About
            </MenuItem>
            <MenuItem
              onClick={this.props.DependenciesScroll}
              icon={<FontAwesomeIcon icon={faHandshake} />}
            >
              Dependencies
            </MenuItem>
            <MenuItem
              onClick={this.props.GettingStartedScroll}
              icon={<FontAwesomeIcon icon={faPlug} />}
            >
              Getting Started
            </MenuItem>
            <SubMenu title="Options" icon={<FontAwesomeIcon icon={faList} />}>
              <MenuItem onClick={this.props.DatepickerScroll}>
                Initialization
              </MenuItem>
              <MenuItem onClick={this.props.DatepickerScroll}>
                singleDate
              </MenuItem>
              <MenuItem onClick={this.props.DatepickerScroll}>
                presetMenu{" "}
              </MenuItem>
              <MenuItem onClick={this.props.DatepickerScroll}>
                militaryTime{" "}
              </MenuItem>
              <MenuItem onClick={this.props.DatepickerScroll}>
                autoClose
              </MenuItem>
              <MenuItem onClick={this.props.DatepickerScroll}>
                leadingTrailingDates
              </MenuItem>
              <MenuItem onClick={this.props.DatepickerScroll}>
                clearDates
              </MenuItem>
              <MenuItem onClick={this.props.DatepickerScroll}>
                clearDates
              </MenuItem>
              <MenuItem onClick={this.props.DatepickerScroll}>
                defaults
              </MenuItem>
              <MenuItem onClick={this.props.DatepickerScroll}>
                startDateLabel
              </MenuItem>
              <MenuItem onClick={this.props.DatepickerScroll}>
                endDateLabel
              </MenuItem>
            </SubMenu>
            <SubMenu title="Methods" icon={<FontAwesomeIcon icon={faCode} />}>
              <MenuItem onClick={this.props.DatepickerScroll}>
                .value()
              </MenuItem>
              <MenuItem onClick={this.props.DatepickerScroll}>
                .openCalendar()
              </MenuItem>
              <MenuItem onClick={this.props.DatepickerScroll}>
                .closeCalendar()
              </MenuItem>
            </SubMenu>
            <MenuItem
              onClick={this.props.DatepickerScroll}
              icon={<FontAwesomeIcon icon={faHammer} />}
            >
              Datepicker Sandbox
            </MenuItem>
            <MenuItem
              onClick={this.props.DatepickerScroll}
              icon={<FontAwesomeIcon icon={faFileExport} />}
            >
              Sandbox Export
            </MenuItem>
          </Menu>
        </ProSidebar>
      </div>
    );
  }
}

export default SideMenu;
