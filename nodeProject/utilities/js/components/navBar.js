import React from 'react'
import {AppBar, Tabs, Tab} from '@material-ui/core'
import {Link} from 'react-router-dom'

const npNavBar = () => {
    return (
      <AppBar title="My App" position="sticky">
        <Tabs>
            <Tab 
              label="Home"
              component={Link}
              value="/"
              to="/"/>
            <Tab 
              label="Add User"
              component={Link}
              value="/addUser"
              to="/addUser"/>
            <Tab 
              label="Item 3" 
              component={Link}
              value="/"
              to="/"/>
            <Tab label="Item 4" 
              component={Link}
              value="/"
              to="/"/>
        </Tabs>
      </AppBar>
    )
}

export default npNavBar
