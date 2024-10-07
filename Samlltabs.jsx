import * as React from 'react';
import { useState } from 'react';
import { Tab ,Grid,Button} from '@mui/material';
import { TabList,TabContext,TabPanel } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';

export default function Smalltabs() {
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

  const Invoices = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : `Invoices ${tabIndex}`
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

  const Trackingdetails = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : `Tracking ${tabIndex}`
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
            <Tab label="About-Info" value="1" />
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
                onClick={Invoices}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    Invoices
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Trackingdetails}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                  Tracking Details
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