import * as React from 'react';
import { Tab } from '@mui/material';
import { TabList,TabContext,TabPanel } from '@mui/lab';
import Closables from './Closables';
import Dynamic from './Dynamic';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Layout() {
  const [selectedTab, setSelectedTab] = useState('1');
  const[searchInput,setSearchInput] = useState(' ');


  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

    useEffect(()=>{
     console.log(searchInput);
    },[searchInput])
 

  return (

    <div>
      <div className="search-bar">
        Orders
        <input 
        type="search" 
        placeholder="Search..." 
        value={searchInput}
        onChange={(e)=> setSearchInput(e.target.value)}
        style={{marginLeft:'20px',marginTop:'10px'}}
        />
      </div>
      <TabContext value={selectedTab}>
         <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab 
            icon={<CloseIcon/>}
            iconPosition='end'
            label="Services" 
            value="3" 
           
            />
            <Tab
            icon={<CloseIcon />}
            iconPosition='end'
            label="About"
             value="2"
        
            />
          </TabList>
          <TabPanel value="3"><Closables/></TabPanel>
        <TabPanel value="2"><Dynamic/></TabPanel>
      </TabContext>
      </div>
  );
}



  