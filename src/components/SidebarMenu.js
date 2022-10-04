import React from 'react'
import { useNavigate, Link , useParams, NavLink } from 'react-router-dom'
import '../Style.css' 
import '../styles/material-dashboard.css'
import '../styles/material-dashboard.min.css'
import '../styles/material-dashboard-rtl.css'

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom, faPhone, faSignIn, faSquarePhone, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
const usericon = <FontAwesomeIcon icon={faUser} />
export default function SidebarMenu() {
    let navigate = useNavigate();
  return (
    <div className="sidebar">
    <div className="logo">
        <img src="https://fleetp.com/assets/img/fav_logo.png" id="icon" alt="User Icon" />
    </div>
    <>
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/dashboard"
            onSelect={({itemId}) => {
              // maybe push to the route
             navigate(`${itemId}`)
             
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () =>    usericon
              
              },
              {
                title: 'Users',
                itemId: '/management',
                elemBefore: () =>    usericon,
                subNav: [
                  {
                    title: 'Add User',
                    itemId: '/add-user',
                    // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                 //   elemBefore: () => <Icon name="cloud-snow" />,
                  },
                  {
                    title: 'Users List',
                    itemId: '/dashboard',
                   // elemBefore: () => <Icon name="coffee" />,
                  },
                ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
            ]}
          />
      </>
</div>
  )
}
