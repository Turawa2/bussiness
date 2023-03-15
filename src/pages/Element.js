import React from 'react'
import { Link } from 'react-router-dom'

function Element() {
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
		<div id="sideNav" href="#"><i className="fa fa-caret-right"></i></div>
  {/* kghirhigthgitjhirjir */}
            <div className="sidebar-collapse">
                <ul className="nav" id="main-menu">

                    <li>
                        <Link to="*"><i className="fa fa-dashboard"></i> Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/element"  className="active-menu"><i className="fa fa-desktop"></i> UI Elements</Link>
                    </li>
					<li>
                        <Link to="/chart"><i className="fa fa-bar-chart-o"></i> Charts</Link>
                    </li>
                    <li>
                        <Link to="/panel"><i className="fa fa-qrcode"></i> Tabs & Panels</Link>
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
                            UI Elements <small>This is your UI elements section</small>
                        </h1>
                        <ol class="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">UI Elements </a></li>
                            <li class="active">Data</li>
                        </ol>

                    </div>
                    <div id="page-inner">


                        <div class="row">

                            <div class="col-md-12">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Messages
                                    </div>

                                    <div class="panel-body">
                                        <div class="alert alert-success">
                                            <strong>Well done!</strong> You successfully read this important alert message.
                                        </div>
                                        <div class="alert alert-info">
                                            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                                        </div>
                                        <div class="alert alert-warning">
                                            <strong>Warning!</strong> Best check yo self, you're not looking too good.
                                        </div>
                                        <div class="alert alert-danger">
                                            <strong>Oh snap!</strong> Change a few things up and try submitting again.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Simple Progress Bars
                                    </div>

                                    <div class="panel-body">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                                <span class="sr-only">40% Complete (success)</span>
                                            </div>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                <span class="sr-only">20% Complete</span>
                                            </div>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                                <span class="sr-only">60% Complete (warning)</span>
                                            </div>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                                <span class="sr-only">80% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Progress Bars
                                    </div>

                                    <div class="panel-body">
                                        <div class="progress progress-striped">
                                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                                <span class="sr-only">40% Complete (success)</span>
                                            </div>
                                        </div>
                                        <div class="progress progress-striped">
                                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                <span class="sr-only">20% Complete</span>
                                            </div>
                                        </div>
                                        <div class="progress progress-striped">
                                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                                <span class="sr-only">60% Complete (warning)</span>
                                            </div>
                                        </div>
                                        <div class="progress progress-striped">
                                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                                <span class="sr-only">80% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Animated Progress Bars
                                    </div>

                                    <div class="panel-body">
                                        <div class="progress progress-striped active">
                                            <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                                <span class="sr-only">40% Complete (success)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Stacked Progress Bars
                                    </div>

                                    <div class="panel-body">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-success" style={{ width: "35%" }}>
                                                <span class="sr-only">35% Complete (success)</span>
                                            </div>
                                            <div class="progress-bar progress-bar-warning" style={{ width: "20%" }}>
                                                <span class="sr-only">20% Complete (warning)</span>
                                            </div>
                                            <div class="progress-bar progress-bar-danger" style={{ width: "10%" }}>
                                                <span class="sr-only">10% Complete (danger)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-md-7">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Simple Buttons Examples
                                    </div>

                                    <div className="panel-body">

                                        <h4>Default Button</h4>
                                        <a href="#" className="btn btn-default m-2"   style={{margin: "5px"}}>default</a>
                                        <a href="#" className="btn btn-primary m-2"  style={{margin: "5px"}}>primary</a>
                                        <a href="#" className="btn btn-danger m-2" style={{margin: "5px"}}>danger </a>
                                        <a href="#" className="btn btn-success m-2" style={{margin: "5px"}}>success</a>
                                        <a href="#" className="btn btn-info m-2" style={{margin: "5px"}}>info</a> 
                                        <a href="#" className="btn btn-warning m-2" style={{margin: "5px"}}>warning</a>


                                        <h4>Small Button</h4>
                                        <a href="#" className="btn btn-default btn-sm m-2 " style={{margin: "5px"}}>default</a>
                                        <a href="#" className="btn btn-primary btn-sm m-2" style={{margin: "5px"}}>primary</a>
                                        <a href="#" className="btn btn-danger btn-sm m-2" style={{margin: "5px"}}>danger</a>
                                        <a href="#" className="btn btn-success btn-sm m-2" style={{margin: "5px"}}>success</a>
                                        <a href="#" className="btn btn-info btn-sm m-2" style={{margin: "5px"}}>info</a>
                                        <a href="#" className="btn btn-warning btn-sm m-2 " style={{margin: "5px"}}>warning</a>


                                        <h4>Large Button</h4>

                                        <a href="#" className="btn btn-default btn-lg  m-2" style={{margin: "5px"}}>default</a>
                                        <a href="#" className="btn btn-primary btn-lg  m-2" style={{margin: "5px"}}>primary</a>
                                        <a href="#" className="btn btn-danger btn-lg  m-2" style={{margin: "5px"}}>danger</a>
                                        <a href="#" className="btn btn-success btn-lg  m-2" style={{margin: "5px"}}>success</a>
                                        <a href="#" className="btn btn-info btn-lg m-2" style={{margin: "5px"}}>info</a>


                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Button Dropdowns
                                    </div>

                                    <div class="panel-body">
                                        <h4>Simple Button Dropdown Examples </h4>
                                        <div style={{ marginTop: "10px" }}>

                                            <div class="btn-group">
                                                <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle">Action <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div style={{ margin: "5px" }} class="btn-group">
                                                <button data-toggle="dropdown" class="btn btn-danger dropdown-toggle">Danger <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div style={{ margin: "5px" }} class="btn-group">
                                                <button data-toggle="dropdown" class="btn btn-warning dropdown-toggle">Danger <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>


                                            <div class="btn-group">
                                                <button data-toggle="dropdown" className="btn btn-success dropdown-toggle m-2 mt-2">Success <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div class="btn-group">
                                                <button data-toggle="dropdown" className="btn btn-info dropdown-toggle m-2 mt-2" style={{margin: "5px"}}>Info <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div class="btn-group">
                                                <button data-toggle="dropdown" class="btn btn-default dropdown-toggle">Default <span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <h4>Split Button Dropdown Examples </h4>

                                        <div style={{ margin: "5px" }} class="btn-toolbar">

                                            <div class="btn-group">
                                                <button class="btn btn-primary">Action</button>
                                                <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle"><span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div class="btn-group">
                                                <button class="btn btn-danger">Danger</button>
                                                <button data-toggle="dropdown" class="btn btn-danger dropdown-toggle"><span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div class="btn-group">
                                                <button class="btn btn-warning">Warning</button>
                                                <button data-toggle="dropdown" class="btn btn-warning dropdown-toggle"><span class="caret"></span></button>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li class="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>

                                            <div class="btn-group" style={{marginTop: "5px"}}>
                                                <button className="btn btn-success" >Success</button>
                                                <button data-toggle="dropdown" className="btn btn-success dropdown-toggle"><span className="caret"></span></button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <div className="btn-group" style={{marginTop: "5px"}}>
                                                <button className="btn btn-info" >Info</button>
                                                <button data-toggle="dropdown" className="btn btn-info dropdown-toggle"><span className="caret"></span></button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>

                                        </div>


                                        <h4>Buttons With Icons</h4>

                                        <button className="btn btn-default" style={{margin: "2px"}}><i className=" fa fa-refresh "></i> Update</button>
                                        <button className="btn btn-primary" style={{margin: "2px"}}><i className="fa fa-edit "></i> Edit</button>
                                        <button className="btn btn-danger" style={{margin: "2px"}}><i className="fa fa-pencil"></i> Delete</button>




                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Circle Icon Buttons
                                    </div>

                                    <div className="panel-body">
                                        <br /> <br />
                                        <button type="button" className="btn btn-default btn-circle"style={{margin: "2px"}}><i className="fa fa-check"></i>
                                        </button>
                                        <button type="button" className="btn btn-primary btn-circle" style={{margin: "2px"}}><i className="fa fa-list"></i>
                                        </button>
                                        <button type="button" className="btn btn-success btn-circle" style={{margin: "2px"}}><i className="fa fa-link"></i>
                                        </button>
                                        <button type="button" className="btn btn-info btn-circle" style={{margin: "2px"}}><i className="fa fa-check"></i>
                                        </button>
                                        <button type="button" className="btn btn-warning btn-circle" style={{margin: "2px"}}><i className="fa fa-money"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-circle" style={{margin: "2px"}}><i className="fa fa-heart"></i>
                                        </button>
                                        <br />
                                        <p>
                                            Get more components at official bootstrap website i.e getbootstrap.com or <a href="http://getbootstrap.com/components/" target="_blank">click here</a> .
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Icons Examples :
                                    </div>

                                    <div class="panel-body">
                                        <br />
                                        <i class="fa fa-flask "></i>

                                        <i class="fa fa-flask fa-2x"></i>
                                        <i class="fa fa-flask fa-3x"></i>
                                        <i class="fa fa-flask fa-4x"></i>
                                        <i class="fa fa-flask fa-5x"></i>
                                        <br />
                                        <p>
                                            Get more Icons at official fortawesome website   <a href="http://fortawesome.github.io/Font-Awesome/" target="_blank" >Click here</a> .
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-6">


                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Modals Example
                                    </div>
                                    <div class="panel-body">
                                        <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                                            Click  Launch Demo Modal
                                        </button>
                                        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                        <h4 class="modal-title" id="myModalLabel">Modal title Here</h4>
                                                    </div>
                                                    <div class="modal-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Sample Text
                                    </div>
                                    <div class="panel-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloreullamco laboris nisi ut aliquip ex ea commodo

                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer><p>All right reserved. Template by: <a href="../../index.html">WebThemez</a></p></footer>
                    </div>

                </div>

            </div>

            {/* <script src="../..public/assests/js/jquery-1.10.2.js"></script>

            <script src="../..public/assests/js/bootstrap.min.js"></script>

            <script src="../..public/assests/js/jquery.metisMenu.js"></script>

            <script src="../..public/assests/js/custom-scripts.js"></script> */}
          
             {/* import Olodo from '../../public/assests/js/olodo' */}
        </React.Fragment>
    )
}

export default Element
