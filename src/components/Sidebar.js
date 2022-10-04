import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link , useParams, NavLink } from 'react-router-dom'
import '../Style.css' 
import '../styles/material-dashboard.css'
import '../styles/material-dashboard.min.css'
import '../styles/material-dashboard-rtl.css'
import '../styles/mystyle.css'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom, faPhone, faSignIn, faSquarePhone, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
const usericon = <FontAwesomeIcon icon={faSignIn} />

export default function Sidebar() {
  let navigate = useNavigate();
 
  return (
    <div>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="76x76" href="<?=base_url()?>assets/img/apple-icon.png" />
        <link rel="icon" type="image/png" href="<?=base_url()?>assets/img/fav_logo.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>
          Timexpress Vehicle &amp; Courier System
        </title>
        <meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport" />
 
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
  
        
       
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{__html: "\nlabel.bmd-label-floating{\n\tcolor: #736b6b !important;\n    font-size: 14px !important;\n    font-weight: 700 !important;\n}\nlabel {\n\tcolor: #736b6b !important;\n    font-size: 14px !important;\n    font-weight: 700 !important;\n}\n" }} />
        <div className="wrapper1 ">
          <div className="sidebar" data-color="purple" data-background-color="white" data-image="<?=base_url()?>assets/img/sidebar-1.jpg">
           
            <div className="logo"><a href="<?=base_url()?>dashboard" className="simple-text logo-normal">
                <img src="<?=base_url()?>assets/img/fav_logo.png" id="icon" alt="User Icon" style={{width: '20%'}} />
              </a></div>


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
                elemBefore: () =>    <i className="material-icons"/>
              
              },
              {
                title: 'Users',
                itemId: '/management',
               elemBefore: () => usericon,
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
         
          </div></div>
  )
}
