import * as React from 'react';
import { useState } from 'react';
import { Tab ,Grid,Button} from '@mui/material';
import { TabList,TabContext,TabPanel } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';

export default function Closables() {
  const [selectedTab, setSelectedTab] = useState('1');

  const[tabs,setTabs] = useState([]);
  const[panels,setPanels] = useState([]);
  const[tabIndex,setTabIndex] = useState(2);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleTabOptions = () =>{

    setSelectedTab(`${tabIndex}`)

    setTabIndex(tabIndex+1)
  }

  const Salesorders = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : `Sales Orders ${tabIndex}`
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border: '10px solid black'}}></div>
        }
    ])

      handleTabOptions();
  }

  const Storeorders = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : `Store Orders ${tabIndex}`
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border:'15px',border: '10px solid black'}}></div>
        }
    ])
      handleTabOptions();
  }

  
  const Allocationtemplate = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : `Allocation Template ${tabIndex}`
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border:'15px',border: '10px solid black'}}></div>
        }
    ])
      handleTabOptions();
  }
  const Sourcingrules = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : `Sourcing Rules ${tabIndex}`
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border:'15px',border: '10px solid black'}}></div>
        }
    ])
      handleTabOptions();
  }
  const Adjustonhandinventory = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : `Adjust On Hand Inventory ${tabIndex}`
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border:'15px',border: '10px solid black'}}></div>
        }
    ])
      handleTabOptions();
  }
  const Inventorybyfacility = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : `Inventory By Facility ${tabIndex}`
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border:'15px',border: '10px solid black'}}></div>
        }
    ])
      handleTabOptions();
  }
  const Devtools = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : `Dev Tools ${tabIndex}`
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border:'15px',border: '10px solid black'}}></div>
        }
    ])
      handleTabOptions();
  }
  const Items = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : `Items ${tabIndex}`
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border:'15px',border: '10px solid black'}}></div>
        }
    ])
      handleTabOptions();
  }
  const Transactions = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : `Transactions ${tabIndex}`
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border:'10px',border: '10px solid black'}}></div>
        }
    ])
      handleTabOptions();
  }

const handleTabClose = (value) =>{
    const tabArr = tabs.filter(t => t.value !== value);
    setTabs(tabArr);

    const panelArr = panels.filter(p => p.value !== value)
    setPanels(panelArr);
}

  return (
      
     <div className='container' style={{border:'5px solid black'}}>
      <TabContext value={selectedTab}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Services-Info" value="1" />
            {tabs.map(tab => (
                  <Tab 
                  icon={<CloseIcon onClick={()=> handleTabClose(tab.value)}/>} iconPosition='end'
                  key={tab.value} 
                  label={tab.label} 
                  value={tab.value}/>
            ))}
          </TabList>
        <TabPanel value="1">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Salesorders}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex'}}
                >
                    Sales Orders
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Storeorders}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    Store Orders
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Allocationtemplate}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    Allocation Template
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Sourcingrules}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    Sourcing Rules
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Adjustonhandinventory}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    Adjustonhandinventory
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Inventorybyfacility}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    Inventorybyfacility
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Devtools}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    Devtools
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Items}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    Items
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Transactions}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    ransactions
                </a>
                </Grid>
            </Grid>
        </TabPanel>
        {panels.map(panel => (
            <TabPanel key={panel.value} value={panel.value}>
                {panel.child()}
            </TabPanel>
        ))}

      </TabContext>
      </div>
  );
}