import React, { useEffect, useState } from 'react'
import SidebarMenu from '../SidebarMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faPhone, faSignIn, fagasPumpSlash, faCarSide, faUser, faUsers, faUserXmark, faGasPump } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
const usericon = <FontAwesomeIcon icon={faUser} />
const users = <FontAwesomeIcon icon={faUsers} />
const vehicle = <FontAwesomeIcon icon={faCar} />
const onleave = <FontAwesomeIcon icon={faUserXmark} />
const carpark = <FontAwesomeIcon icon={faCarSide} />
const fuel = <FontAwesomeIcon icon={faGasPump} />
export default function Dashboard() {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const user=1;
//const API_PATH=`${SERVER_URL}dashboard.php`;
const [fleetdata, setfleetdata] = useState()
 const API_PATH='http://localhost:8000/dashboard.php';
  useEffect(() => {
    axios({
      method: 'post',
      url: `${API_PATH}`,
      data: user
    })
    .then((res)=>{
      setfleetdata(res.data)
    }).catch(error => console.log(error.message));
  }, [])
  
  return (
    <div className='wrapper-holder'>
      {<SidebarMenu />}
      <div className="main-panel ps-container">
        <div className="content">
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                      <div className="card-icon">
                        {users}
                      </div>
                    
                      <p className="card-category">Drivers  </p>
                      <h3 className="card-title">{fleetdata?fleetdata.drivercount:0}
                      </h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons text-danger" />
                        <a href="<?=base_url();?>drivers">Total drivers </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        {vehicle}  {vehicle}
                      </div>
                      <p className="card-category">Total Vehicles</p>
                      {/* <h3 class="card-title"><?=@$total_vehicles?></h3>*/}
                      <h3 className="card-title">{fleetdata?fleetdata.totalvehiclecount:0}</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons text-danger" />
                    
                        <a href="<?=base_url();?>vehicles-all">Total Vehicles</a>
                       
                        <a href="<?=base_url();?>vehicles">Total Vehicles</a>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                      <div className="card-icon">
                        {onleave}
                      </div>
                      <p className="card-category">On Leave</p>
                      <h3 className="card-title">{fleetdata?fleetdata.driverleavescount:0}</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons text-danger" />
                        <a href="<?=base_url();?>drivers">On leave</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        {carpark}
                      </div>
                      <p className="card-category">Idle Vehicles</p>
                      <h3 className="card-title">{fleetdata?fleetdata.freevehiclecount:0}</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons text-danger" />
                        {/*?php if($role==1){
					?*/}
                        <a href="<?=base_url();?>vehicles-all">Idle Vehicles</a>
                        {/*?php }else{  ?*/}
                        <a href="<?=base_url();?>vehicles">Idle Vehicles</a>
                        {/*?php } ?*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        {vehicle}
                      </div>
                      <p className="card-category">Active Vehicles</p>
                      <h3 className="card-title">{fleetdata?fleetdata.vehiclecount:0}</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons text-danger" />
                        {/*?php if($role==1){
					?*/}
                        <a href="<?=base_url();?>vehicles-all">Assigned vehicles</a>
                        {/*?php }else{  ?*/}
                        <a href="<?=base_url();?>vehicles">Assigned vehicles</a>
                        {/*?php } ?*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-info card-header-icon">
                      <div className="card-icon">
                        {fuel}
                      </div>
                      <p className="card-category">Limit Exceeds</p>
                      <h3 className="card-title">{/*?=$f_count?*/}</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <a href="<?=base_url();?>fuel-excess-report/<?=$month?>">List Driver</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                      <div className="card-icon">
                        {usericon}
                      </div>
                      <p className="card-category">Idle Drivers </p>
                      <h3 className="card-title">{fleetdata?fleetdata.idledrivercount:0}</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <a href="<?=base_url();?>idle-drivers">List Driver</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div></div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="card-header card-header-tabs card-header-primary">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <span className="nav-tabs-title">Tasks:</span>
                      <ul className="nav nav-tabs" data-tabs="tabs">
                        <li className="nav-item">
                          <a className="nav-link active" href="#drivers" data-toggle="tab">
                            <i className="fa fa-users" /> Drivers
                            <div className="ripple-container" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#vehicles" data-toggle="tab">
                            <i className="fa fa-car" /> Vehicles
                            <div className="ripple-container" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#leaves" data-toggle="tab">
                            <i className="fa fa-user-times" /> Leaves
                            <div className="ripple-container" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active" id="drivers">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" defaultValue />
                                  <span className="form-check-sign">
                                    <span className="check" />
                                  </span>
                                </label>
                              </div></td>
                            <td style={{ color: 'red' }}>ddddddddddddddddddddddd</td>
                          </tr></tbody></table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
        <div className="card">
          <div className="card-header card-header-warning">
            <h4 className="card-title">Employees Status</h4>
            <p className="card-category" style={{color: '#fff !important', fontWeight: '400!important'}}>New employees on {/*?=date('F-Y')?*/}</p>
          </div>
          <div className="card-body table-responsive">
            <table className="table table-hover">
              <thead className="text-warning">
                <tr><th>ID</th>
                  <th>Name</th>
                  <th>Nationality</th>
                  <th>Joined date</th>
                </tr></thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>dddd</td>
                  <td>2323</td>
                  <td>wewewee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
