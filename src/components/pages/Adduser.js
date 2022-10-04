import React from 'react'
import SidebarMenu from '../SidebarMenu'
import '../../Style.css' 
import '../../Style.css' 
import '../../styles/material-dashboard.css'
import '../../styles/material-dashboard.min.css'
import '../../styles/material-dashboard-rtl.css'
export default function Adduser() {
  return (
    <div className='wrapper-holder'>
    {<SidebarMenu />}
    <div className="main-panel ps-container">
    <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Add User</h4>
                  <p className="card-category">Complete your profile</p>
                </div>
                <div className="card-body">
                  <form id="myform" encType="multipart/form-data">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">Name</label>
                          <input type="text" id="first_name" name="first_name" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">Username</label>
                          <input type="text" id="username" name="username" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="bmd-label-floating">password</label>
                          <input type="text" id="password" name="password" className="form-control" />
                        </div>
                      </div>
                    </div>                    <div className="row">                      <div className="col-md-4">                        <div className="form-group">                          <label className="bmd-label-floating">Email</label>                          <input type="text" id="email" name="email" className="form-control" />                      </div>                    </div>                      <div className="col-md-4">                        <div className="form-group">                          <label className="bmd-label-floating">Phone No</label>                          <input type="text" id="phone" name="phone" className="form-control" />                      </div>                    </div>					                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className>Branch</label>
                          <select id="branch" name="branch[]" className="form-control selectpicker" multiple data-live-search="true">
                            {/*?php if(!empty($branches)){
						  foreach($branches as $branch){ ?*/}
                            <option value="<?=$branch->id;?>">{/*?=$branch-*/}branch;?&gt;</option>
                            {/*?php 	  }
					  }?*/}
                          </select>
                        </div>
                      </div>
                    </div>
                    {/*--------------------------------------------------------------------------*/}
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.min.css" />
                    {/*--------------------------------------------------------------------------*/}
                    <p id="sign" />
                    <a className="btn btn-primary pull-right" onclick="submit_user()" style={{color: '#fff !important'}}>Add User</a>
                    <div className="clearfix" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}
