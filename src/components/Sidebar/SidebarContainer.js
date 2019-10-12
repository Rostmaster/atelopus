import Sidebar from "./Sidebar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar
    };
};

const mapDispatchToProps = () => {
    return {};
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarContainer;
