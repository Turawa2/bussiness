import React from 'react'
import { Link } from 'react-router-dom'

function Panel() {
  return (
    <React.Fragment>

<div id="wrapper">
        <nav className="navbar navbar-default top-navbar" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link class="navbar-brand" to="*"><strong>CAFE</strong></Link>
            </div>

            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                        <i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-messages">
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Doe</strong>
                                    <span className="pull-right text-muted">
                                        <em>Today</em>
                                    </span>
                                </div>
                                <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span className="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem Ipsum has been the industry's standard dummy text ever since an kwilnw...</div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span className="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem Ipsum has been the industry's standard dummy text ever since the...</div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a className="text-center" href="#">
                                <strong>Read All Messages</strong>
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                  
                </li>
               
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                        <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-tasks">
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 1</strong>
                                        <span className="pull-right text-muted">60% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                            <span className="sr-only">60% Complete (success)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 2</strong>
                                        <span className="pull-right text-muted">28% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100" style={{width: "28%"}}>
                                            <span className="sr-only">28% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 3</strong>
                                        <span className="pull-right text-muted">60% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                            <span className="sr-only">60% Complete (warning)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 4</strong>
                                        <span className="pull-right text-muted">85% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
                                            <span className="sr-only">85% Complete (danger)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a className="text-center" href="#">
                                <strong>See All Tasks</strong>
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                 
                </li>
             
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                        <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-alerts">
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-comment fa-fw"></i> New Comment
                                    <span className="pull-right text-muted small">4 min</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span className="pull-right text-muted small">12 min</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-envelope fa-fw"></i> Message Sent
                                    <span className="pull-right text-muted small">4 min</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-tasks fa-fw"></i> New Task
                                    <span className="pull-right text-muted small">4 min</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span className="pull-right text-muted small">4 min</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a className="text-center" href="#">
                                <strong>See All Alerts</strong>
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                
                </li>
            
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                        <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li className="divider"></li>
                        <li><a href="#"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
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
                        <Link to="/chart"><i className="fa fa-bar-chart-o"></i> Charts</Link>
                    </li>
                    <li>
                        <Link to="/panel" className="active-menu"><i className="fa fa-qrcode"></i> Tabs & Panels</Link>
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
    
        <div id="page-wrapper" >
			  <div className="header"> 
                        <h1 className="page-header">
                            Tabs & Panels <small>Nice tabs and panels</small>
                        </h1>
						<ol className="breadcrumb">
					  <li><a href="#">Home</a></li>
					  <li><a href="#">Tabs & Panels</a></li>
					  <li className="active">Data</li>
					</ol> 
									
		</div>
		
            <div id="page-inner"> 
                                 
            <div className="row">
                <div className="col-md-4 col-sm-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Default Panel
                        </div>
                        <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                        </div>
                        <div className="panel-footer">
                            Panel Footer
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Primary Panel
                        </div>
                        <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                        </div>
                        <div className="panel-footer">
                            Panel Footer
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            Success Panel
                        </div>
                        <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                        </div>
                        <div className="panel-footer">
                            Panel Footer
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="row">
                <div className="col-md-4 col-sm-4">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            Info Panel
                        </div>
                        <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                        </div>
                        <div className="panel-footer">
                            Panel Footer
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            Warning Panel
                        </div>
                        <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                        </div>
                        <div className="panel-footer">
                            Panel Footer
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            Danger Panel
                        </div>
                        <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                        </div>
                        <div className="panel-footer">
                            Panel Footer
                        </div>
                    </div>
                </div>
            </div>
      
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Collapsible Accordion Panel Group
                        </div>
                        <div className="panel-body">
                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" className="collapsed">Collapsible Group Item #1</a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse" style={{height: "0px"}}>
                                        <div className="panel-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Collapsible Group Item #2</a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse in" style={{height: "auto"}}>
                                        <div className="panel-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" className="collapsed">Collapsible Group Item #3</a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Basic Tabs
                        </div>
                        <div className="panel-body">
                            <ul className="nav nav-tabs">
                                <li className="active"><a href="#home" data-toggle="tab">Home</a>
                                </li>
                                <li className=""><a href="#profile" data-toggle="tab">Profile</a>
                                </li>
                                <li className=""><a href="#messages" data-toggle="tab">Messages</a>
                                </li>
                                <li className=""><a href="#settings" data-toggle="tab">Settings</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane fade active in" id="home">
                                    <h4>Home Tab</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div className="tab-pane fade" id="profile">
                                    <h4>Profile Tab</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div className="tab-pane fade" id="messages">
                                    <h4>Messages Tab</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div className="tab-pane fade" id="settings">
                                    <h4>Settings Tab</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Pill Tabs
                        </div>
                        <div className="panel-body">
                            <ul className="nav nav-pills">
                                <li className=""><a href="#home-pills" data-toggle="tab">Home</a>
                                </li>
                                <li className=""><a href="#profile-pills" data-toggle="tab">Profile</a>
                                </li>
                                <li className=""><a href="#messages-pills" data-toggle="tab">Messages</a>
                                </li>
                                <li className="active"><a href="#settings-pills" data-toggle="tab">Settings</a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane fade" id="home-pills">
                                    <h4>Home Tab</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div className="tab-pane fade" id="profile-pills">
                                    <h4>Profile Tab</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div className="tab-pane fade" id="messages-pills">
                                    <h4>Messages Tab</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div className="tab-pane fade active in" id="settings-pills">
                                    <h4>Settings Tab</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            <div className="row">
                <div className="col-md-4 col-sm-4">
                    <div className="well">
                        <h4>Normal Well</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="well well-lg">
                        <h4>Large Well</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="well well-sm">
                        <h4>Small Well</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                    </div>
                </div>
            </div>
                 
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron">
                        <h1>Jumbotron</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing.</p>
                        <p>
                            <a className="btn btn-primary btn-lg" role="button">Learn more</a>
                        </p>
                    </div>
                </div>
            </div>
               
				<footer><p>All right reserved. Template by: <a href="../../index.html">WebThemez</a></p></footer>
					</div>
		
            </div>
     
        </div>

   
    </React.Fragment>

  )
}

export default Panel
