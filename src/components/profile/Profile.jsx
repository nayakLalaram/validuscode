import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../profile/Profile.css"
import ActivityTable from './tabs/ActivityTable';
import InforMation from './tabs/InforMation';
import PasswordPage from './tabs/PasswordPage';
import Header from '../common/Headers' 
import Navigation from '../common/Navigation' 

const Profile = () => {
  return (
    <>

    <Header />
    <Navigation />
    <div className='lg:ml-[270px] mt-[70px]'>
        <div className="">
        <Tabs className="">
          <TabList className="new_tabs border-b-[1px] border-[#00000033] profile_page">
            <Tab>PERSONAL INFORMATION</Tab>
            <Tab>
PASSWORD & 2FA</Tab>
            <Tab>ACTIVITY LOG</Tab>
            
          </TabList>

          <TabPanel>
           <InforMation/>
          </TabPanel>
          <TabPanel>
            <PasswordPage/>
          </TabPanel>
          <TabPanel>
         <ActivityTable/>
          </TabPanel>
          
        </Tabs>
      </div>
    </div>
    </>
  )
}

export default Profile;