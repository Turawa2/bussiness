import React from 'react'
import { Link } from 'react-router-dom'



function Chart() {
    return (
        <React.Fragment>

            <div id="wrapper">
                <nav class="navbar navbar-default top-navbar" role="navigation">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link class="navbar-brand" to="*"><strong>CAFE</strong></Link>
                    </div>

                    <ul class="nav navbar-top-links navbar-right">
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                                <i class="fa fa-envelope fa-fw"></i> <i class="fa fa-caret-down"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-messages">
                                <li>
                                    <a href="#">
                                        <div>
                                            <strong>John Doe</strong>
                                            <span class="pull-right text-muted">
                                                <em>Today</em>
                                            </span>
                                        </div>
                                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <strong>John Smith</strong>
                                            <span class="pull-right text-muted">
                                                <em>Yesterday</em>
                                            </span>
                                        </div>
                                        <div>Lorem Ipsum has been the industry's standard dummy text ever since an kwilnw...</div>
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <strong>John Smith</strong>
                                            <span class="pull-right text-muted">
                                                <em>Yesterday</em>
                                            </span>
                                        </div>
                                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the...</div>
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a class="text-center" href="#">
                                        <strong>Read All Messages</strong>
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>

                        </li>

                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                                <i class="fa fa-tasks fa-fw"></i> <i class="fa fa-caret-down"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-tasks">
                                <li>
                                    <a href="#">
                                        <div>
                                            <p>
                                                <strong>Task 1</strong>
                                                <span class="pull-right text-muted">60% Complete</span>
                                            </p>
                                            <div class="progress progress-striped active">
                                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                                    <span class="sr-only">60% Complete (success)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <p>
                                                <strong>Task 2</strong>
                                                <span class="pull-right text-muted">28% Complete</span>
                                            </p>
                                            <div class="progress progress-striped active">
                                                <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100" style={{ width: "28%" }}>
                                                    <span class="sr-only">28% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <p>
                                                <strong>Task 3</strong>
                                                <span class="pull-right text-muted">60% Complete</span>
                                            </p>
                                            <div class="progress progress-striped active">
                                                <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                                    <span class="sr-only">60% Complete (warning)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <p>
                                                <strong>Task 4</strong>
                                                <span class="pull-right text-muted">85% Complete</span>
                                            </p>
                                            <div class="progress progress-striped active">
                                                <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>
                                                    <span class="sr-only">85% Complete (danger)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a class="text-center" href="#">
                                        <strong>See All Tasks</strong>
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>

                        </li>

                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                                <i class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-alerts">
                                <li>
                                    <a href="#">
                                        <div>
                                            <i class="fa fa-comment fa-fw"></i> New Comment
                                            <span class="pull-right text-muted small">4 min</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                                            <span class="pull-right text-muted small">12 min</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <i class="fa fa-envelope fa-fw"></i> Message Sent
                                            <span class="pull-right text-muted small">4 min</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <i class="fa fa-tasks fa-fw"></i> New Task
                                            <span class="pull-right text-muted small">4 min</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <i class="fa fa-upload fa-fw"></i> Server Rebooted
                                            <span class="pull-right text-muted small">4 min</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a class="text-center" href="#">
                                        <strong>See All Alerts</strong>
                                        <i class="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>

                        </li>

                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                                <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-user">
                                <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                                </li>
                                <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                                </li>
                                <li class="divider"></li>
                                <li><a href="#"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                                </li>
                            </ul>

                        </li>

                    </ul>
                </nav>

                <nav className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav" id="main-menu">

                    <li>
                        <Link to="*"><i className="fa fa-dashboard"></i> Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/element"><i className="fa fa-desktop"></i> UI Elements</Link>
                    </li>
					<li>
                        <Link to="/chart" className="active-menu"><i className="fa fa-bar-chart-o"></i> Charts</Link>
                    </li>
                    <li>
                        <Link to="/panel" ><i className="fa fa-qrcode"></i> Tabs & Panels</Link>
                    </li>
                    
                    <li>
                        <Link to="/table"><i className="fa fa-table"></i> Responsive Tables</Link>
                    </li>
                    <li>
                        <Link to="/form"><i className="fa fa-edit"></i> Forms </Link>
                    </li>


                    <li>
                        <a href="#"><i className="fa fa-sitemap"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                      
                    </li>
                  
                </ul>

            </div>

        </nav>
    
                <div id="page-wrapper">
                    <div class="header">
                        <h1 class="page-header">
                            Charts <small>Show up your stats</small>
                        </h1>
                        <ol class="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Charts</a></li>
                            <li class="active">Data</li>
                        </ol>

                    </div>
                    <div id="page-inner">

                        <div class="row">


                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Bar Chart
                                    </div>
                                    <div class="panel-body">
                                        <div id="morris-bar-chart"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Area Chart
                                    </div>
                                    <div class="panel-body">
                                        <div id="morris-area-chart"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="row">

                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Line Chart
                                    </div>
                                    <div class="panel-body">
                                        <div id="morris-line-chart"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Donut Chart
                                    </div>
                                    <div class="panel-body">
                                        <div id="morris-donut-chart"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <footer><p>All right reserved. Template by: <a href="../../index.html">WebThemez</a></p></footer> */}
                    </div>

                </div>

            </div>
        

            <script src="../../public/assests/js/jquery-1.10.2.js"></script>

            <script src="../../public/assests/js/bootstrap.min.js"></script>


            <script src="../../public/assests/js/jquery.metisMenu.js"></script>

            <script src="../../public/assests/js/morris/raphael-2.1.0.min.js"></script>
            <script src="../../public/assests/js/morris/morris.js"></script>


            <script src="../../public/assests/js/easypiechart.js"></script>
            <script src="../../public/assests/js/easypiechart-data.js"></script>

            <script src="../../public/assests/js/Lightweight-Chart/jquery.chart.js"></script>

            <script src="../../public/assests/js/custom-scripts.js"></script>

{/* import Olodo from '../../public/assests/js/olodo' */}
        </React.Fragment>
    )
}

export default Chart
