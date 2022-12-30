import { Breadcrumb, Input } from 'antd';
import React from 'react';
import "../../Helper/style.css";
import "./notice.css";


const NoticeBoard = () => {
    return (
        <div className='w-100'>
            <div className="Anotice">
                
            
            {/* =======//heading====== */}
            <div className='mx-2 mt-3 mb-4 '>
                <h4>Notice</h4>
                <Breadcrumb
                    style={{
                        margin: '0px 0 16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Notice</Breadcrumb.Item>
                    <Breadcrumb.Item>list</Breadcrumb.Item>
                </Breadcrumb>
            </div>
      {/* =============== */}

            <div className="row">
                {/* <!-- Add Notice Area Start Here --> */}
                <div className="col-4-xxxl mb-3 col-12">
                    <div className="card height-auto">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Create A Notice</h3>
                                </div>
                                {/* <div className="dropdown">
                                    <a className="dropdown-toggle" href="#" role="button"
                                        data-toggle="dropdown" aria-expanded="false">...</a>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red"></i>Close</a>
                                        <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                        <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                    </div>
                                </div> */}
                            </div>
                            <form className="new-added-form">
                                <div className="row">
                                    <div className="col-12-xxxl col-lg-6 col-12 mb-3 form-group">
                                        <label>Title</label>
                                        <input type="text" placeholder="" className="form-control"/>
                                    </div>
                                    <div className="col-12-xxxl col-lg-6 col-12 mb-3 form-group">
                                        <label>Details</label>
                                        <input type="text" placeholder="" className="form-control"/>
                                    </div>
                                    <div className="col-12-xxxl col-lg-6 col-12 mb-3 form-group">
                                        <label>Posted By </label>
                                        {/* <input type="text" placeholder="" className="form-control"/>
                                            <i className="fas fa-user"></i> */}
                                             <Input size="large" style={{padding:"10px",outline:"none"}} placeholder="" prefix={<i className="fas fa-user"></i>} />
                                    </div>
                                    <div className="col-12-xxxl col-lg-6 col-12 mb-3 form-group">
                                        <label>Date</label>
                                        {/* <input type="text" placeholder="" className="form-control air-datepicker"/>
                                            <i className="far fa-calendar-alt"></i> */}
                                            <Input size="large" style={{padding:"10px",outline:"none"}} placeholder="" prefix={<i className="far fa-calendar-alt"></i>} />
                                    </div>
                                    <div className="col-12 form-group mg-t-8">
                                        <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark mx-2">Save</button>
                                        <button type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <!-- Add Notice Area End Here -->
                <!-- All Notice Area Start Here --> */}
                <div className="col-8-xxxl col-12">
                    <div className="card height-auto">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>Notice Board</h3>
                                </div>
                                {/* <div className="dropdown">
                                    <a className="dropdown-toggle" href="#" role="button"
                                        data-toggle="dropdown" aria-expanded="false">...</a>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#"><i className="fas fa-times text-orange-red"></i>Close</a>
                                        <a className="dropdown-item" href="#"><i className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                        <a className="dropdown-item" href="#"><i className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                    </div>
                                </div> */}
                            </div>
                            <form className="mg-b-20">
                                <div className="row gutters-8">
                                    <div className="col-lg-5 mb-3 col-12 form-group">
                                        <input type="text" placeholder="Search by Date ..." className="form-control"/>
                                    </div>
                                    <div className="col-lg-5 mb-3 col-12 form-group">
                                        <input type="text" placeholder="Search by Title ..." className="form-control"/>
                                    </div>
                                    <div className="col-lg-2 col-12 form-group">
                                        <button type="submit" className="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                                    </div>
                                </div>
                            </form>
                            <div className="notice-board-wrap">
                                <div className="notice-list">
                                    <div className="post-date bg-skyblue">16 June, 2019</div>
                                    <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                                        text of the printing Great School manag mene esom  text of the printing manag
                                        mene esom  text of the printing.</a></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-yellow">16 June, 2019</div>
                                    <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                                        text of the printing Great School manag mene esom  text of the printing manag
                                        mene esom  text of the printing.</a></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-pink">16 June, 2019</div>
                                    <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                                        text of the printing Great School manag mene esom  text of the printing manag
                                        mene esom  text of the printing.</a></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-skyblue">16 June, 2019</div>
                                    <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                                        text of the printing Great School manag mene esom  text of the printing manag
                                        mene esom  text of the printing.</a></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-yellow">16 June, 2019</div>
                                    <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                                        text of the printing Great School manag mene esom  text of the printing manag
                                        mene esom  text of the printing.</a></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-pink">16 June, 2019</div>
                                    <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                                        text of the printing Great School manag mene esom  text of the printing manag
                                        mene esom  text of the printing.</a></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-skyblue">16 June, 2019</div>
                                    <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                                        text of the printing Great School manag mene esom  text of the printing manag
                                        mene esom  text of the printing.</a></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-yellow">16 June, 2019</div>
                                    <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                                        text of the printing Great School manag mene esom  text of the printing manag
                                        mene esom  text of the printing.</a></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                                <div className="notice-list">
                                    <div className="post-date bg-pink">16 June, 2019</div>
                                    <h6 className="notice-title"><a href="#">Great School Great School manag mene esom
                                        text of the printing Great School manag mene esom  text of the printing manag
                                        mene esom  text of the printing.</a></h6>
                                    <div className="entry-meta">  Jennyfar Lopez / <span>5 min ago</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            );
};

            export default NoticeBoard;