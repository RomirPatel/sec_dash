import React from 'react';
import EventStream from './EventSteam';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChartPie, FaCog, FaStream, FaUser } from 'react-icons/fa';
import './Dashboard.css'; 

const Dashboard = () => {
    return (
        <div className="d-flex bg-dark min-vh-100">
            {/* Sidebar */}
            <div className="sidebar bg-dark d-flex flex-column align-items-start p-2" style={{ width: '220px' }}>
                <nav className="nav flex-column w-100">
                    <a href="#" className="nav-link text-light d-flex align-items-center my-1 hover-effect">
                        <FaStream className="me-1" /> <small>Event Stream</small>
                    </a>
                    <a href="#" className="nav-link text-light d-flex align-items-center my-1 hover-effect">
                        <FaChartPie className="me-1" /> <small>Reports</small>
                    </a>
                    <a href="#" className="nav-link text-light d-flex align-items-center my-1 hover-effect">
                        <FaCog className="me-1" /> <small>Settings</small>
                    </a>
                    <a href="#" className="nav-link text-light d-flex align-items-center my-1 hover-effect">
                        <FaUser className="me-1" /> <small>Profile</small>
                    </a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="content flex-grow-1 bg-dark text-light">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-3">
                    <a className="navbar-brand fw-bold fs-5 ms-3" href="#">Cybersecurity Dashboard</a>

                    <div className="ms-auto d-flex align-items-center gap-2 me-3">
                        {/* Search Bar */}
                        <input
                            type="text"
                            className="form-control bg-secondary text-light rounded-pill border-0 me-1"
                            placeholder="Search..."
                            style={{ fontSize: '0.875rem' }} // Smaller font size
                        />
                        
                        {/* Profile Dropdown */}
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary rounded-circle p-0 d-flex align-items-center justify-content-center"
                                type="button"
                                id="profileDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ width: '35px', height: '35px' }} // Smaller button
                            >
                                <i className="bi bi-person-circle fs-5"></i>
                            </button>
                            <ul
                                className="dropdown-menu dropdown-menu-end bg-dark border-0 shadow"
                                aria-labelledby="profileDropdown"
                            >
                                <li><a className="dropdown-item text-light" href="#">Profile</a></li>
                                <li><a className="dropdown-item text-light" href="#">Settings</a></li>
                                <li><hr className="dropdown-divider bg-secondary" /></li>
                                <li><a className="dropdown-item text-light" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid">
                    <div className="row">
                        {/* Event Stream Section */}
                        <div className="col-lg-8 mb-3">
                            <div className="card bg-dark text-light shadow-sm rounded-2 border-0" style={{ height: '250px' }}>
                                <div className="card-header bg-dark border-bottom border-dark rounded-top">
                                    <h6 className="mb-0">Event Stream</h6>
                                </div>
                                <div
                                    className="card-body p-1"
                                    style={{
                                        maxHeight: '200px',
                                        overflowY: 'auto',
                                        scrollbarWidth: 'none',
                                        msOverflowStyle: 'none',
                                    }}
                                >
                                    <EventStream />
                                </div>
                            </div>
                        </div>

                        {/* Reports Section */}
                        <div className="col-lg-4 mb-3">
                            <div className="card bg-dark text-light shadow-sm rounded-2 border-0" style={{ height: '250px' }}>
                                <div className="card-header bg-dark border-bottom border-dark rounded-top">
                                    <h6 className="mb-0">Reports</h6>
                                </div>
                                <div className="card-body d-flex align-items-center justify-content-center p-2">
                                    <div className="report-placeholder">
                                        <p className="text-center" style={{ fontSize: '0.875rem' }}>Pie chart or other report visualizations go here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Settings Section */}
                        <div className="col-lg-4 mb-3">
                            <div className="card bg-dark text-light shadow-sm rounded-2 border-0" style={{ height: '250px' }}>
                                <div className="card-header bg-dark border-bottom border-dark rounded-top">
                                    <h6 className="mb-0">Settings</h6>
                                </div>
                                <div className="card-body d-flex align-items-center justify-content-center p-2">
                                    <div className="settings-placeholder">
                                        <p className="text-center" style={{ fontSize: '0.875rem' }}>Settings options go here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
