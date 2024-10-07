import * as React from 'react';
import { useState } from 'react';
import { Tab ,Grid,Button} from '@mui/material';
import { TabList,TabContext,TabPanel } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';

export default function Base() {
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




  const Ordernoone = () =>{
    const newTab = {
        value : `${tabIndex}`,
        label : '1760047022'
    }
    setTabs([newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border: '10px solid black'}}>
                <div style={{marginTop:'80px',marginRight:'400px'}}>
                <h3 style={{marginRight:'50px'}}>Tracking Details:</h3>
                <a href='#'>FEGFYFFUGLW</a>
                <br/>
                <h3 style={{marginRight:'50px'}}>Invoice Details:</h3>
                <a href='#'>Inv001</a>
                </div>
                
            </div>
        }
    ])

      handleTabOptions();
  }

  const Ordernotwo = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : '1760047023'
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border:'15px',border: '10px solid black'}}>
                               <div style={{marginTop:'80px',marginRight:'400px'}}>

                                    <h3 style={{marginRight:'50px'}}>Tracking Details:</h3>
                                    <a href='#' >FEGFYFFUGLW</a>
                                    <br/>
                                    <h3 style={{marginRight:'50px'}}>Invoice Details:</h3>
                                    <a href='#'>Inv001</a>
                                    </div>
                           </div>
        }
    ])
      handleTabOptions();
  }

  
  const Ordernothree = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : '1760047024'
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border:'15px',border: '10px solid black'}}>
                 <div style={{marginTop:'80px',marginRight:'400px'}}>

                    <h3 style={{marginRight:'50px'}}>Tracking Details:</h3>
                    <a href='#'>FEGFYFFUGLW</a>
                    <br/>
                    <h3 style={{marginRight:'50px'}}>Invoice Details:</h3>
                    <a href='#'>Inv001</a>
                    </div>
                </div>
        }
    ])
      handleTabOptions();
  }
  const Ordernofour = () =>{

 
    const newTab = {
        value : `${tabIndex}`,
        label : '1760047025'
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div 
                          style={{height:'400px',
                            width:"800px",border:'15px',
                            border: '10px solid black'}}>
                                 <div style={{marginTop:'80px',marginRight:'400px'}}>

                                <h3 style={{marginRight:'50px'}}>Tracking Details:</h3>
                                <a href='#'>FEGFYFFUGLW</a>
                                <br/>
                                <h3 style={{marginRight:'50px'}}>Invoice Details:</h3>
                                <a href='#'>Inv001</a>
                                </div>
                            </div>
        }
    ])
      handleTabOptions();
  }
  const Ordernofive = () =>{


    const newTab = {
        value : `${tabIndex}`,
        label : '1760047026'
    }
    setTabs([...tabs,newTab])

    setPanels([
        ...panels,
        {
            value : `${tabIndex}`,
            child : () => <div style={{height:'400px',width:"800px",border:'15px',border: '10px solid black'}}>
                               <div style={{marginTop:'80px',marginRight:'400px'}}>

                                <h3 style={{marginRight:'50px'}}>Tracking Details:</h3>
                                <a href='#'>FEGFYFFUGLW</a>
                                <br/>
                                <h3 style={{marginRight:'50px'}}>Invoice Details:</h3>
                                <a href='#'>Inv001</a>
                                </div>
                         </div>
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
            <Tab label="Orders-info" value="1" />
            {tabs.map(tab => (
                  <Tab 
                  icon={<CloseIcon onClick={()=> handleTabClose(tab.value)}/>} iconPosition='end'
                  key={tab.value} 
                  label={tab.label} 
                  value={tab.value}/>
            ))}
          </TabList>
        <TabPanel value="1" style={{marginBottom:'50px'}}>
        <h3 style={{marginRight:'1000px',marginTop:'20px'}}>OrderID</h3>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Ordernoone}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex'}}
                >
                 1760047022
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Ordernotwo}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    1760047023
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Ordernothree}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    1760047024
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Ordernofour}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    1760047025
                </a>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <a
                href='#'
                onClick={Ordernofive}
                style={{marginRight:'250px',color:'black',fontSize:'20px',justifycontent: 'none',display:'flex',marginTop:'10px'}}
                >
                    1760047026
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