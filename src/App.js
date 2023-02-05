import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import headerBar from './route';
import Button from '@mui/material/Button';
import Accordion from 'react-bootstrap/Accordion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';
import DownloadIcon from '@mui/icons-material/Download';

import { ArcElement} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ToggleButton from '@mui/material/ToggleButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EmailIcon from '@mui/icons-material/Email';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import PollIcon from '@mui/icons-material/Poll';
import TableChartIcon from '@mui/icons-material/TableChart';
import { useState } from 'react';
import ThemeProvider from 'react-bootstrap/Button';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Dashboard } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
function App() {
 
  return (
    
    
    <div className='app-sty'>
      {/* <Example/> */}
      
     <div className='side-bar'>
          <RightData/>
          </div>
          <div>
    
          <Routes>
    <Route path="/dashboard" element={ <DashBoard/>} />
    <Route path="/CustomComponents" element={ <CustomComponents/>} />
    <Route path="/cuscompcards" element={ <CustomComponentsCards/>} />
    <Route path="/btn" element={ <BtnComponents/>} />
    <Route path="/utilisties" element={ <UtilitiesComponents/>} />
    <Route path="/UtilitiesColor" element={ <UtilitiesColor/>} />
    </Routes>
    </div>
    </div>
  
  );
}
function UtilitiesColor(){
  return <div id="wrapper">


      <hr class="sidebar-divider d-none d-md-block"/>

      <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

  

  <div id="content-wrapper" class="d-flex flex-column">

      <div id="content">

          <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

              <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                  <i class="fa fa-bars"></i>
              </button>

              <form
                  class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div class="input-group">
                      <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                          aria-label="Search" aria-describedby="basic-addon2"/>
                      <div class="input-group-append">
                          <button class="btn btn-primary" type="button">
                              <i class="fas fa-search fa-sm"></i>
                          </button>
                      </div>
                  </div>
              </form>

              <ul class="navbar-nav ml-auto">

                  <li class="nav-item dropdown no-arrow d-sm-none">
                      <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-search fa-fw"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                          aria-labelledby="searchDropdown">
                          <form class="form-inline mr-auto w-100 navbar-search">
                              <div class="input-group">
                                  <input type="text" class="form-control bg-light border-0 small"
                                      placeholder="Search for..." aria-label="Search"
                                      aria-describedby="basic-addon2"/>
                                  <div class="input-group-append">
                                      <button class="btn btn-primary" type="button">
                                          <i class="fas fa-search fa-sm"></i>
                                      </button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </li>

                  <li class="nav-item dropdown no-arrow mx-1">
                      <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-bell fa-fw"></i>
                          <span class="badge badge-danger badge-counter">3+</span>
                      </a>
                      <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                          aria-labelledby="alertsDropdown">
                          <h6 class="dropdown-header">
                              Alerts Center
                          </h6>
                          <a class="dropdown-item d-flex align-items-center" href="#">
                              <div class="mr-3">
                                  <div class="icon-circle bg-primary">
                                      <i class="fas fa-file-alt text-white"></i>
                                  </div>
                              </div>
                              <div>
                                  <div class="small text-gray-500">December 12, 2019</div>
                                  <span class="font-weight-bold">A new monthly report is ready to download!</span>
                              </div>
                          </a>
                          <a class="dropdown-item d-flex align-items-center" href="#">
                              <div class="mr-3">
                                  <div class="icon-circle bg-success">
                                      <i class="fas fa-donate text-white"></i>
                                  </div>
                              </div>
                              <div>
                                  <div class="small text-gray-500">December 7, 2019</div>
                                  $290.29 has been deposited into your account!
                              </div>
                          </a>
                          <a class="dropdown-item d-flex align-items-center" href="#">
                              <div class="mr-3">
                                  <div class="icon-circle bg-warning">
                                      <i class="fas fa-exclamation-triangle text-white"></i>
                                  </div>
                              </div>
                              <div>
                                  <div class="small text-gray-500">December 2, 2019</div>
                                  Spending Alert: We've noticed unusually high spending for your account.
                              </div>
                          </a>
                          <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                      </div>
                  </li>

                  <li class="nav-item dropdown no-arrow mx-1">
                      <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fas fa-envelope fa-fw"></i>
                          <span class="badge badge-danger badge-counter">7</span>
                      </a>
                      <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                          aria-labelledby="messagesDropdown">
                          <h6 class="dropdown-header">
                              Message Center
                          </h6>
                          <a class="dropdown-item d-flex align-items-center" href="#">
                              <div class="dropdown-list-image mr-3">
                                  <img class="rounded-circle" src="img/undraw_profile_1.svg"
                                      alt="..."/>
                                  <div class="status-indicator bg-success"></div>
                              </div>
                              <div class="font-weight-bold">
                                  <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                      problem I've been having.</div>
                                  <div class="small text-gray-500">Emily Fowler · 58m</div>
                              </div>
                          </a>
                          <a class="dropdown-item d-flex align-items-center" href="#">
                              <div class="dropdown-list-image mr-3">
                                  <img class="rounded-circle" src="img/undraw_profile_2.svg"
                                      alt="..."/>
                                  <div class="status-indicator"></div>
                              </div>
                              <div>
                                  <div class="text-truncate">I have the photos that you ordered last month, how
                                      would you like them sent to you?</div>
                                  <div class="small text-gray-500">Jae Chun · 1d</div>
                              </div>
                          </a>
                          <a class="dropdown-item d-flex align-items-center" href="#">
                              <div class="dropdown-list-image mr-3">
                                  <img class="rounded-circle" src="img/undraw_profile_3.svg"
                                      alt="..."/>
                                  <div class="status-indicator bg-warning"></div>
                              </div>
                              <div>
                                  <div class="text-truncate">Last month's report looks great, I am very happy with
                                      the progress so far, keep up the good work!</div>
                                  <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                              </div>
                          </a>
                          <a class="dropdown-item d-flex align-items-center" href="#">
                              <div class="dropdown-list-image mr-3">
                                  <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                      alt="..."/>
                                  <div class="status-indicator bg-success"></div>
                              </div>
                              <div>
                                  <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                      told me that people say this to all dogs, even if they aren't good...</div>
                                  <div class="small text-gray-500">Chicken the Dog · 2w</div>
                              </div>
                          </a>
                          <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                      </div>
                  </li>

                  <div class="topbar-divider d-none d-sm-block"></div>

                  <li class="nav-item dropdown no-arrow">
                      <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                          <img class="img-profile rounded-circle"
                              src="img/undraw_profile.svg"/>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                          aria-labelledby="userDropdown">
                          <a class="dropdown-item" href="#">
                              <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                              Profile
                          </a>
                          <a class="dropdown-item" href="#">
                              <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                              Settings
                          </a>
                          <a class="dropdown-item" href="#">
                              <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                              Activity Log
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                              <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                              Logout
                          </a>
                      </div>
                  </li>

              </ul>

          </nav>

          <div class="container-fluid">

              <h1 class="h3 mb-1 text-gray-800">Color Utilities</h1>
              <p class="mb-4">Bootstrap's default utility classes can be found on the official <a
                      href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                  below were created to extend this theme past the default utility classes built into Bootstrap's
                  framework.</p>

              <div class="row">

                  <div class="col-lg-4">

                      <div class="card shadow mb-4">
                          <div class="card-header py-3">
                              <h6 class="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
                          </div>
                          <div class="card-body">
                              <p class="text-gray-100 p-3 bg-dark m-0">.text-gray-100</p>
                              <p class="text-gray-200 p-3 bg-dark m-0">.text-gray-200</p>
                              <p class="text-gray-300 p-3 bg-dark m-0">.text-gray-300</p>
                              <p class="text-gray-400 p-3 bg-dark m-0">.text-gray-400</p>
                              <p class="text-gray-500 p-3 m-0">.text-gray-500</p>
                              <p class="text-gray-600 p-3 m-0">.text-gray-600</p>
                              <p class="text-gray-700 p-3 m-0">.text-gray-700</p>
                              <p class="text-gray-800 p-3 m-0">.text-gray-800</p>
                              <p class="text-gray-900 p-3 m-0">.text-gray-900</p>
                          </div>
                      </div>

                      <div class="card shadow mb-4">
                          <div class="card-header py-3">
                              <h6 class="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
                          </div>
                          <div class="card-body">
                              <p class="text-xs">.text-xs</p>
                              <p class="text-lg mb-0">.text-lg</p>
                          </div>
                      </div>

                  </div>

                  <div class="col-lg-4">

                      <div class="card shadow mb-4">
                          <div class="card-header py-3">
                              <h6 class="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities
                              </h6>
                          </div>
                          <div class="card-body">
                              <div class="px-3 py-5 bg-gradient-primary text-white">.bg-gradient-primary</div>
                              <div class="px-3 py-5 bg-gradient-secondary text-white">.bg-gradient-secondary</div>
                              <div class="px-3 py-5 bg-gradient-success text-white">.bg-gradient-success</div>
                              <div class="px-3 py-5 bg-gradient-info text-white">.bg-gradient-info</div>
                              <div class="px-3 py-5 bg-gradient-warning text-white">.bg-gradient-warning</div>
                              <div class="px-3 py-5 bg-gradient-danger text-white">.bg-gradient-danger</div>
                              <div class="px-3 py-5 bg-gradient-light text-white">.bg-gradient-light</div>
                              <div class="px-3 py-5 bg-gradient-dark text-white">.bg-gradient-dark</div>
                          </div>
                      </div>

                  </div>


                      <div class="card shadow mb-4">
                          <div class="card-header py-3">
                              <h6 class="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities
                              </h6>
                          </div>
                          <div class="card-body">
                              <div class="p-3 bg-gray-100">.bg-gray-100</div>
                              <div class="p-3 bg-gray-200">.bg-gray-200</div>
                              <div class="p-3 bg-gray-300">.bg-gray-300</div>
                              <div class="p-3 bg-gray-400">.bg-gray-400</div>
                              <div class="p-3 bg-gray-500 text-white">.bg-gray-500</div>
                              <div class="p-3 bg-gray-600 text-white">.bg-gray-600</div>
                              <div class="p-3 bg-gray-700 text-white">.bg-gray-700</div>
                              <div class="p-3 bg-gray-800 text-white">.bg-gray-800</div>
                              <div class="p-3 bg-gray-900 text-white">.bg-gray-900</div>
                          </div>
                      </div>
                  </div>

              </div>

          </div>

      </div>

      <footer class="sticky-footer bg-white">
          <div class="container my-auto">
              <div class="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2020</span>
              </div>
          </div>
      </footer>

  



<a class="scroll-to-top rounded" href="#page-top">
  <i class="fas fa-angle-up"></i>
</a>

<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
              </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
              <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
              <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
      </div>
  </div>
</div>
</div>
  
}

function UtilitiesComponents(){
  const navigate = useNavigate("");
  return <div>
    <Button variant="outlined" onClick={()=> (navigate("/UtilitiesColor"))}>Color</Button>
  </div>
}


function BtnComponents(){
  return<div>
      <div id="wrapper"> 


    <hr class="sidebar-divider d-none d-md-block"/>

    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

<div id="content-wrapper" class="d-flex flex-column">

  
    <div id="content">

   
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    
            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                <i class="fa fa-bars"></i>
            </button>

        
            <form
                class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

          
            <ul class="navbar-nav ml-auto">

             
                <li class="nav-item dropdown no-arrow d-sm-none">
                    <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-search fa-fw"></i>
                    </a>
                   
                    <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form class="form-inline mr-auto w-100 navbar-search">
                            <div class="input-group">
                                <input type="text" class="form-control bg-light border-0 small"
                                    placeholder="Search for..." aria-label="Search"
                                    aria-describedby="basic-addon2"/>
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button">
                                        <i class="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                
                <li class="nav-item dropdown no-arrow mx-1">
                    <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-bell fa-fw"></i>
                       
                        <span class="badge badge-danger badge-counter">3+</span>
                    </a>
                    
                    <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown">
                        <h6 class="dropdown-header">
                            Alerts Center
                        </h6>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="mr-3">
                                <div class="icon-circle bg-primary">
                                    <i class="fas fa-file-alt text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div class="small text-gray-500">December 12, 2019</div>
                                <span class="font-weight-bold">A new monthly report is ready to download!</span>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="mr-3">
                                <div class="icon-circle bg-success">
                                    <i class="fas fa-donate text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div class="small text-gray-500">December 7, 2019</div>
                                $290.29 has been deposited into your account!
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="mr-3">
                                <div class="icon-circle bg-warning">
                                    <i class="fas fa-exclamation-triangle text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div class="small text-gray-500">December 2, 2019</div>
                                Spending Alert: We've noticed unusually high spending for your account.
                            </div>
                        </a>
                        <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                    </div>
                </li>

                <li class="nav-item dropdown no-arrow mx-1">
                    <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-envelope fa-fw"></i>
              
                        <span class="badge badge-danger badge-counter">7</span>
                    </a>
                    
                    <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown">
                        <h6 class="dropdown-header">
                            Message Center
                        </h6>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="img/undraw_profile_1.svg"
                                    alt="..."/>
                                <div class="status-indicator bg-success"></div>
                            </div>
                            <div class="font-weight-bold">
                                <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                    problem I've been having.</div>
                                <div class="small text-gray-500">Emily Fowler · 58m</div>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="img/undraw_profile_2.svg"
                                    alt="..."/>
                                <div class="status-indicator"></div>
                            </div>
                            <div>
                                <div class="text-truncate">I have the photos that you ordered last month, how
                                    would you like them sent to you?</div>
                                <div class="small text-gray-500">Jae Chun · 1d</div>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="img/undraw_profile_3.svg"
                                    alt="..."/>
                                <div class="status-indicator bg-warning"></div>
                            </div>
                            <div>
                                <div class="text-truncate">Last month's report looks great, I am very happy with
                                    the progress so far, keep up the good work!</div>
                                <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                            </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <div class="dropdown-list-image mr-3">
                                <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                    alt="..."/>
                                <div class="status-indicator bg-success"></div>
                            </div>
                            <div>
                                <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                    told me that people say this to all dogs, even if they aren't good...</div>
                                <div class="small text-gray-500">Chicken the Dog · 2w</div>
                            </div>
                        </a>
                        <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                    </div>
                </li>

                <div class="topbar-divider d-none d-sm-block"></div>

                
                <li class="nav-item dropdown no-arrow">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                        <img class="img-profile rounded-circle"
                            src="img/undraw_profile.svg"/>
                    </a>
                   
                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </a>
                    </div>
                </li>

            </ul>

        </nav>
     

       
        <div class="container-fluid">

          
            <h1 class="h3 mb-4 text-gray-800">Buttons</h1>

            <div class="row">

                <div class="col-lg-6">

                  
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                        </div>
                        <div class="card-body">
                            <p>Use Font Awesome Icons (included with this theme package) along with the circle
                                buttons as shown in the examples below!</p>
                           
                            <div class="mb-2">
                                <code>.btn-circle</code>
                            </div>
                            <a href="#" class="btn btn-primary btn-circle">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="btn btn-success btn-circle">
                                <i class="fas fa-check"></i>
                            </a>
                            <a href="#" class="btn btn-info btn-circle">
                                <i class="fas fa-info-circle"></i>
                            </a>
                            <a href="#" class="btn btn-warning btn-circle">
                                <i class="fas fa-exclamation-triangle"></i>
                            </a>
                            <a href="#" class="btn btn-danger btn-circle">
                                <i class="fas fa-trash"></i>
                            </a>
                         
                            <div class="mt-4 mb-2">
                                <code>.btn-circle .btn-sm</code>
                            </div>
                            <a href="#" class="btn btn-primary btn-circle btn-sm">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="btn btn-success btn-circle btn-sm">
                                <i class="fas fa-check"></i>
                            </a>
                            <a href="#" class="btn btn-info btn-circle btn-sm">
                                <i class="fas fa-info-circle"></i>
                            </a>
                            <a href="#" class="btn btn-warning btn-circle btn-sm">
                                <i class="fas fa-exclamation-triangle"></i>
                            </a>
                            <a href="#" class="btn btn-danger btn-circle btn-sm">
                                <i class="fas fa-trash"></i>
                            </a>
                         
                            <div class="mt-4 mb-2">
                                <code>.btn-circle .btn-lg</code>
                            </div>
                            <a href="#" class="btn btn-primary btn-circle btn-lg">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="btn btn-success btn-circle btn-lg">
                                <i class="fas fa-check"></i>
                            </a>
                            <a href="#" class="btn btn-info btn-circle btn-lg">
                                <i class="fas fa-info-circle"></i>
                            </a>
                            <a href="#" class="btn btn-warning btn-circle btn-lg">
                                <i class="fas fa-exclamation-triangle"></i>
                            </a>
                            <a href="#" class="btn btn-danger btn-circle btn-lg">
                                <i class="fas fa-trash"></i>
                            </a>
                        </div>
                    </div>

                  
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Brand Buttons</h6>
                        </div>
                        <div class="card-body">
                            <p>Google and Facebook buttons are available featuring each company's respective
                                brand color. They are used on the user login and registration pages.</p>
                            <p>You can create more custom buttons by adding a new color variable in the
                                <code>_variables.scss</code> file and then using the Bootstrap button variant
                                mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                                file.</p>
                            <a href="#" class="btn btn-google btn-block"><i class="fab fa-google fa-fw"></i>
                                .btn-google</a>
                            <a href="#" class="btn btn-facebook btn-block"><i
                                    class="fab fa-facebook-f fa-fw"></i> .btn-facebook</a>

                        </div>
                    </div>

                </div>

                <div class="col-lg-6">

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                        </div>
                        <div class="card-body">
                            <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                                the markup in the examples below. The examples below also use the
                                <code>.text-white-50</code> helper class on the icons for additional styling,
                                but it is not required.</p>
                            <a href="#" class="btn btn-primary btn-icon-split">
                                <span class="icon text-white-50">
                                    <i class="fas fa-flag"></i>
                                </span>
                                <span class="text">Split Button Primary</span>
                            </a>
                            <div class="my-2"></div>
                            <a href="#" class="btn btn-success btn-icon-split">
                                <span class="icon text-white-50">
                                    <i class="fas fa-check"></i>
                                </span>
                                <span class="text">Split Button Success</span>
                            </a>
                            <div class="my-2"></div>
                            <a href="#" class="btn btn-info btn-icon-split">
                                <span class="icon text-white-50">
                                    <i class="fas fa-info-circle"></i>
                                </span>
                                <span class="text">Split Button Info</span>
                            </a>
                            <div class="my-2"></div>
                            <a href="#" class="btn btn-warning btn-icon-split">
                                <span class="icon text-white-50">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </span>
                                <span class="text">Split Button Warning</span>
                            </a>
                            <div class="my-2"></div>
                            <a href="#" class="btn btn-danger btn-icon-split">
                                <span class="icon text-white-50">
                                    <i class="fas fa-trash"></i>
                                </span>
                                <span class="text">Split Button Danger</span>
                            </a>
                            <div class="my-2"></div>
                            <a href="#" class="btn btn-secondary btn-icon-split">
                                <span class="icon text-white-50">
                                    <i class="fas fa-arrow-right"></i>
                                </span>
                                <span class="text">Split Button Secondary</span>
                            </a>
                            <div class="my-2"></div>
                            <a href="#" class="btn btn-light btn-icon-split">
                                <span class="icon text-gray-600">
                                    <i class="fas fa-arrow-right"></i>
                                </span>
                                <span class="text">Split Button Light</span>
                            </a>
                            <div class="mb-4"></div>
                            <p>Also works with small and large button classes!</p>
                            <a href="#" class="btn btn-primary btn-icon-split btn-sm">
                                <span class="icon text-white-50">
                                    <i class="fas fa-flag"></i>
                                </span>
                                <span class="text">Split Button Small</span>
                            </a>
                            <div class="my-2"></div>
                            <a href="#" class="btn btn-primary btn-icon-split btn-lg">
                                <span class="icon text-white-50">
                                    <i class="fas fa-flag"></i>
                                </span>
                                <span class="text">Split Button Large</span>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    

    </div>
  
    <footer class="sticky-footer bg-white">
        <div class="container my-auto">
            <div class="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2020</span>
            </div>
        </div>
    </footer>
  

</div>


</div>

<a class="scroll-to-top rounded" href="#page-top">
<i class="fas fa-angle-up"></i>
</a>


<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
        </div>
    </div>
</div>
</div>

  </div>
}
function CustomComponents(){
  const navigate = useNavigate("");
  return<div className='cus-comp'>
       <Button variant="outlined" onClick={()=>{navigate("/cuscompcards")}}>Cards</Button>
       <Button variant="outlined" onClick={()=>{navigate("/btn")}}>Buttons</Button>
  
  </div>
}
function CustomComponentsCards(){
  const navigate = useNavigate("");
  return<div className='cus-comp'>
    
    <CardData/>
  </div>
}
// function OverAllData(){
//   return <div>
// <DashBoard/>
//   </div>
// }

function RightComponents(){
  
  return<div className='right-components'>
    
  </div>
}

function LeftDashBoard(){
  return<div className='left-components'>
  <HeaderBar/>
  <UploadButton/>
  <CardData/>
  </div>

}
function CustomToggle({ children, eventKey }) {
 
  const decoratedOnClick = useAccordionButton(eventKey, () =>
  console.log('totally custom!'),
);

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}




function RightData(){

  const navigate = useNavigate("");
 

  return <div className='right-data'>
  
    <Button variant="contained" onClick={()=>navigate("/dashboard")}>  <SpeedIcon/>Dashboard</Button>

<h4>INTERFACE</h4>
    <Button  variant="contained" onClick={()=>navigate("/CustomComponents")}
      >
      <SettingsIcon/>Components
  
  </Button>
    <Button variant="contained" onClick={()=>(navigate("/utilisties"))}><BuildIcon/>Utilities</Button>
<h4>ADDONS</h4>
    <Button variant="contained"> <FolderIcon/>Pages</Button>
    <Button variant="contained"> <PollIcon/>Charts</Button>
    <Button variant="contained"><TableChartIcon/>Tables</Button>
   
   {/* <AppBar position="static" color="">
        <Toolbar>
   
        
          <Typography onClick={()=>navigate("/dashboard")} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          <Typography onClick={()=>navigate("/")} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            home
          </Typography>
         
        
        </Toolbar>
      </AppBar>
    <Routes>
    <Route path="/dashboard" element={ <DashBoard/>} />
    </Routes> */}



    {/* <Button className='dash-board' variant='sucess'>
    <SpeedIcon/>
      Dashboard</Button>
    
  
    <Button variant='sucess'>
      Components</Button>
    
    <Button variant='sucess'>

      Utilities</Button>


  
    <Button variant='sucess'>
     
      Pages</Button>
    
  
    <Button variant='sucess'>
     
      Charts</Button>
<Button variant='sucess'>
   
  Tables</Button>   */}

  {/* <Box sx={{ flexGrow: 1 }}> */}
      

  </div>
}
// const HandleChange = () =>{
//   const [show,setShow] = useState(true)
//     setShow(!show)  
//  {show ? <RightComponents/> : null}
// }
function PhotoOF(){
  return <div>
    <h1>welcome to my app</h1>
  </div>
}
function HeaderBar(){
  return<div className='header-bar'>
    <div>
  {/* <ToggleButton  value="list" aria-label="list">
        <ViewListIcon  className='search-bar' sx={{ fontSize: 40 }} />
      </ToggleButton> */}
     
      <TextField className='input-sty' id="outlined-basic" label="Search..." variant="outlined"  />
      <SearchIcon sx={{ fontSize: 50 }} className='search-bar'/></div>
      <div className='mail-msg'>
        <div>

      <Badge badgeContent={4} color="primary">
  
      <NotificationsActiveIcon/>
</Badge>
<Badge badgeContent={3} color="primary">
      <EmailIcon/>
      </Badge>
        </div>
      <div className='jow-kuru'>
        <h4>Joseph Kuruvila</h4>
      <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
      </div>
      </div>
  </div>

}

function UploadButton(){
  return<div className='upload-btn'>
    
    <h3>Dashboard</h3>
    <Button className='upload-button' variant="contained" component="label">
  <DownloadIcon/>
  Generate Report
  <input hidden accept="image/*" multiple type="file" />
</Button></div>
}





















ChartJS.register(ArcElement, Tooltip, Legend);

export const datas = {
  labels: ['Direct', 'Referral', 'Social'],
  datasets: [
    {
      label: '# of Votes',
      data: [55,30,15],
      backgroundColor: [
        'rgba(78,115,223,1)',
        'rgba(28,200,138,1)',
        'rgba(54,185,204,1)',
        
      ],
      borderColor: [
        'rgba(78,115,223,1)',
        'rgba(28,200,138,1)',
        'rgba(54,185,204,1)',
        
      ],
      borderWidth: 1,
    },
  ],
};

export function StackedPiechart() {
  return <div className='pie-chart'><Pie data={datas} /></div>;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  // Legend
);

export const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: 'top' ,
    // },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      // label: 'Dataset 1',
      data: [10,20,30,40,5,60,70],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      // label: 'Dataset 2',
      data: [20,30,40,50,60,70,80],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function StackedChart() {
  return <div className='chart-style'><Line options={options} data={data}/></div>;
}






function DashBoard(){

  return<div className='DashBoard'>
    <RightComponents/> 
    <LeftDashBoard/>
  </div>

}



function CardData(){
  const BorderLinearProgress = styled(LinearProgress)(({  }) => ({
    height: 5,
    borderRadius: 5,
    // [`&.${linearProgressClasses.colorPrimary}`]: {
    //   backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    // },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: '#36b9cc',
    },
  }));
  return<div>
  <div className='card-data'>
    <div className='card-1'>
      <p className='earning-monthly'><b>Earning (Monthly)</b></p>
      <div className='card-design-log'>
      <h3>$40,000</h3>
      <CalendarTodayIcon/>
      </div>
    </div>
    <div className='card-2'>
    <p className='earning-anu'><b>Earning (Annual)</b></p>
     <div className='card-design-log'> <h3>$215,000</h3>
      <AttachMoneyIcon/></div>
    </div>
    <div className='card-3'>
      <div>
    <p className='task'><b>Task</b></p></div>
    <div className='h3-progress'>
     <div className='card-design-log'>
     <h3>50%</h3>
    <AssignmentIcon/>
    </div>
    <BorderLinearProgress variant="determinate" value={50}/>
    </div>
      

    </div>
    <div className='card-4'>
    <p className='pending'><b>Pending Requests</b></p>
     <div className='card-design-log'>
     <h3>18</h3>
      <QuestionAnswerIcon/>
     </div>
    </div>
  </div>
    <div className='charts-design'>
    <StackedChart/>
    <StackedPiechart/>
    </div>
    <div className='near-pro'>
    < Projects/>
    <NearProjects/></div>
  </div>
}

function NearProjects(){
  return<div className='near-project'>
    <h2 className='illu-h'>Illustrations</h2>
    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.

Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
  </div>
}
function Projects(){

  
  const BorderLinearProgress1 = styled(LinearProgress)(({  }) => ({
    height: 10,
    borderRadius: 5,
    // [`&.${linearProgressClasses.colorPrimary}`]: {
    //   backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    // },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: '#e74a3b',
    },
  }));
  const BorderLinearProgress2 = styled(LinearProgress)(({  }) => ({
    height: 10,
    borderRadius: 5,
    // [`&.${linearProgressClasses.colorPrimary}`]: {
    //   backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    // },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: '#f6c23e',
    },
  }));
  const BorderLinearProgress3 = styled(LinearProgress)(({  }) => ({
    height: 10,
    borderRadius: 5,
    // [`&.${linearProgressClasses.colorPrimary}`]: {
    //   backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    // },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: '#4e73df',
    },
  }));
  const BorderLinearProgress4 = styled(LinearProgress)(({  }) => ({
    height: 10,
    borderRadius: 5,
    // [`&.${linearProgressClasses.colorPrimary}`]: {
    //   backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    // },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: '#4e73df',
    },
  }));
  const BorderLinearProgress5 = styled(LinearProgress)(({  }) => ({
    height: 10,
    borderRadius: 5,
    // [`&.${linearProgressClasses.colorPrimary}`]: {
    //   backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    // },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: '#1cc88a',
    },
  }));

  return<div className='pro-ject'>
    <h2 className='pro-colo'>Projects</h2>
    <h3 className='flex-pro'>
      <div className='flex-pros'>
     <div className='pro-name-sty-1'> Server Migration</div>
     <h3 className='pro-per'>20%</h3></div>
     <div className='pro-sty'>
    <BorderLinearProgress1  variant="determinate" value={20}/>
    </div></h3>
    <h3 className='flex-pro'>
    <div className='flex-pros'>
     <div className='pro-name-sty-2'> Sales Tracking</div>
     <h3 className='pro-per'>40%</h3></div>
     <div className='pro-sty'>
    <BorderLinearProgress2  variant="determinate" value={40}/>
    </div></h3>
    <h3 className='flex-pro'>
    <div className='flex-pros'>
     <div className='pro-name-sty-3'> Customer Database</div>
     <h3 className='pro-per'>60%</h3></div>
     <div className='pro-sty'>
    <BorderLinearProgress3  variant="determinate" value={60}/>
    </div></h3>
    <h3 className='flex-pro'>
    <div className='flex-pros'>
     <div className='pro-name-sty-4'> Payout Details</div>
     <h3 className='pro-per'>80%</h3></div>
     <div className='pro-sty'>
    <BorderLinearProgress4  variant="determinate" value={80}/>
    </div></h3>
    <h3 className='flex-pro'>
    <div className='flex-pros'>
     <div className='pro-name-sty-5'> Account Setup</div>
     <h3 className='pro-per'>Complete!</h3></div>
     <div className='pro-sty'>
    <BorderLinearProgress5  variant="determinate" value={100}/>
    </div></h3>

  </div>
}
export default App;
