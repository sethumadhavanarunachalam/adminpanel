import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import Button from '@mui/material/Button';
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
function App() {
  return (
    
     
  <div> 
     <DashBoard/></div>
  
  );
}

function RightComponents(){

  return<div className='right-components'>
    <RightData/>
  </div>
}

function RightData(){
  return <div className='right-data'>
    <Button className='dash-board' variant='sucess'>
    <SpeedIcon/>
      Dashboard</Button>
    
    <h4>INTERFACE</h4>
  
    <Button variant='sucess'>
      <SettingsIcon/>
      Components</Button>
    
    <Button variant='sucess'>
<BuildIcon/>
      Utilities</Button>


    <h4>ADDONS</h4>
  
    <Button variant='sucess'>
      <FolderIcon/>
      Pages</Button>
    
  
    <Button variant='sucess'>
      <PollIcon/>
      Charts</Button>
<Button variant='sucess'>
   <TableChartIcon/>
  Tables</Button>  

  </div>
}
// const HandleChange = () =>{
//   const [show,setShow] = useState(true)
//     setShow(!show)  
//  {show ? <RightComponents/> : null}
// }

function HeaderBar(){
  return<div className='header-bar'>
    <div>
  <ToggleButton  value="list" aria-label="list">
        <ViewListIcon  className='search-bar' sx={{ fontSize: 40 }} />
      </ToggleButton>
     
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



function LeftDashBoard(){
  return<div className='left-components'>
  <HeaderBar/>
  <UploadButton/>
  <CardData/>
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
