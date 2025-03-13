import React, { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  useEffect(()=>{
    console.log(import.meta.env.VITE_API_URL);
  },[])


  return (
    <div className="section">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="font-weight-bold text-primary heading">
              Popular Properties
            </h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <p>
              <a
                href="#"
                target="_blank"
                className="btn btn-primary text-white py-3 px-4"
                >View all properties</a
              >
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="property-slider-wrap">
              <div className="property-slider row">
                <div className="property-item col-md-4">
                  <a href="property-single.html" className="img">
                    <img src="/assets/images/img_1.jpg" alt="Image" className="img-fluid" />
                  </a>

                  <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                      <span className="d-block mb-2 text-black-50"
                        >5232 California Fake, Ave. 21BC</span
                      >
                      <span className="city d-block mb-3">California, USA</span>

                      <div className="specs d-flex mb-4">
                        <span className="d-block d-flex align-items-center me-3">
                          <span className="icon-bed me-2"></span>
                          <span className="caption">2 beds</span>
                        </span>
                        <span className="d-block d-flex align-items-center">
                          <span className="icon-bath me-2"></span>
                          <span className="caption">2 baths</span>
                        </span>
                      </div>

                      <a
                        href="property-single.html"
                        className="btn btn-primary py-2 px-3"
                        >See details</a
                      >
                    </div>
                  </div>
                </div>
                

                <div className="property-item  col-md-4">
                  <a href="property-single.html" className="img">
                    <img src="/assets/images/img_2.jpg" alt="Image" className="img-fluid" />
                  </a>

                  <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                      <span className="d-block mb-2 text-black-50"
                        >5232 California Fake, Ave. 21BC</span
                      >
                      <span className="city d-block mb-3">California, USA</span>

                      <div className="specs d-flex mb-4">
                        <span className="d-block d-flex align-items-center me-3">
                          <span className="icon-bed me-2"></span>
                          <span className="caption">2 beds</span>
                        </span>
                        <span className="d-block d-flex align-items-center">
                          <span className="icon-bath me-2"></span>
                          <span className="caption">2 baths</span>
                        </span>
                      </div>

                      <a
                        href="property-single.html"
                        className="btn btn-primary py-2 px-3"
                        >See details</a
                      >
                    </div>
                  </div>
                </div>
              

                <div className="property-item  col-md-4">
                  <a href="property-single.html" className="img">
                    <img src="/assets/images/img_3.jpg" alt="Image" className="img-fluid" />
                  </a>

                  <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                      <span className="d-block mb-2 text-black-50"
                        >5232 California Fake, Ave. 21BC</span
                      >
                      <span className="city d-block mb-3">California, USA</span>

                      <div className="specs d-flex mb-4">
                        <span className="d-block d-flex align-items-center me-3">
                          <span className="icon-bed me-2"></span>
                          <span className="caption">2 beds</span>
                        </span>
                        <span className="d-block d-flex align-items-center">
                          <span className="icon-bath me-2"></span>
                          <span className="caption">2 baths</span>
                        </span>
                      </div>

                      <a
                        href="property-single.html"
                        className="btn btn-primary py-2 px-3"
                        >See details</a
                      >
                    </div>
                  </div>
                </div>
               

                <div className="property-item  col-md-4">
                  <a href="property-single.html" className="img">
                    <img src="/assets/images/img_4.jpg" alt="Image" className="img-fluid" />
                  </a>

                  <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                      <span className="d-block mb-2 text-black-50"
                        >5232 California Fake, Ave. 21BC</span
                      >
                      <span className="city d-block mb-3">California, USA</span>

                      <div className="specs d-flex mb-4">
                        <span className="d-block d-flex align-items-center me-3">
                          <span className="icon-bed me-2"></span>
                          <span className="caption">2 beds</span>
                        </span>
                        <span className="d-block d-flex align-items-center">
                          <span className="icon-bath me-2"></span>
                          <span className="caption">2 baths</span>
                        </span>
                      </div>

                      <a
                        href="property-single.html"
                        className="btn btn-primary py-2 px-3"
                        >See details</a
                      >
                    </div>
                  </div>
                </div>
               

                <div className="property-item  col-md-4">
                  <a href="property-single.html" className="img">
                    <img src="/assets/images/img_5.jpg" alt="Image" className="img-fluid" />
                  </a>

                  <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                      <span className="d-block mb-2 text-black-50"
                        >5232 California Fake, Ave. 21BC</span
                      >
                      <span className="city d-block mb-3">California, USA</span>

                      <div className="specs d-flex mb-4">
                        <span className="d-block d-flex align-items-center me-3">
                          <span className="icon-bed me-2"></span>
                          <span className="caption">2 beds</span>
                        </span>
                        <span className="d-block d-flex align-items-center">
                          <span className="icon-bath me-2"></span>
                          <span className="caption">2 baths</span>
                        </span>
                      </div>

                      <a
                        href="property-single.html"
                        className="btn btn-primary py-2 px-3"
                        >See details</a
                      >
                    </div>
                  </div>
                </div>
                

                <div className="property-item  col-md-4">
                  <a href="property-single.html" className="img">
                    <img src="/assets/images/img_6.jpg" alt="Image" className="img-fluid" />
                  </a>

                  <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                      <span className="d-block mb-2 text-black-50"
                        >5232 California Fake, Ave. 21BC</span
                      >
                      <span className="city d-block mb-3">California, USA</span>

                      <div className="specs d-flex mb-4">
                        <span className="d-block d-flex align-items-center me-3">
                          <span className="icon-bed me-2"></span>
                          <span className="caption">2 beds</span>
                        </span>
                        <span className="d-block d-flex align-items-center">
                          <span className="icon-bath me-2"></span>
                          <span className="caption">2 baths</span>
                        </span>
                      </div>

                      <a
                        href="property-single.html"
                        className="btn btn-primary py-2 px-3"
                        >See details</a
                      >
                    </div>
                  </div>
                </div>
                

                <div className="property-item  col-md-4">
                  <a href="property-single.html" className="img">
                    <img src="/assets/images/img_7.jpg" alt="Image" className="img-fluid" />
                  </a>

                  <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                      <span className="d-block mb-2 text-black-50"
                        >5232 California Fake, Ave. 21BC</span
                      >
                      <span className="city d-block mb-3">California, USA</span>

                      <div className="specs d-flex mb-4">
                        <span className="d-block d-flex align-items-center me-3">
                          <span className="icon-bed me-2"></span>
                          <span className="caption">2 beds</span>
                        </span>
                        <span className="d-block d-flex align-items-center">
                          <span className="icon-bath me-2"></span>
                          <span className="caption">2 baths</span>
                        </span>
                      </div>

                      <a
                        href="property-single.html"
                        className="btn btn-primary py-2 px-3"
                        >See details</a
                      >
                    </div>
                  </div>
                </div>
                

                <div className="property-item  col-md-4">
                  <a href="property-single.html" className="img">
                    <img src="/assets/images/img_8.jpg" alt="Image" className="img-fluid" />
                  </a>

                  <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                      <span className="d-block mb-2 text-black-50"
                        >5232 California Fake, Ave. 21BC</span
                      >
                      <span className="city d-block mb-3">California, USA</span>

                      <div className="specs d-flex mb-4">
                        <span className="d-block d-flex align-items-center me-3">
                          <span className="icon-bed me-2"></span>
                          <span className="caption">2 beds</span>
                        </span>
                        <span className="d-block d-flex align-items-center">
                          <span className="icon-bath me-2"></span>
                          <span className="caption">2 baths</span>
                        </span>
                      </div>

                      <a
                        href="property-single.html"
                        className="btn btn-primary py-2 px-3"
                        >See details</a
                      >
                    </div>
                  </div>
                </div>
                

                <div className="property-item  col-md-4">
                  <a href="property-single.html" className="img">
                    <img src="/assets/images/img_1.jpg" alt="Image" className="img-fluid" />
                  </a>

                  <div className="property-content">
                    <div className="price mb-2"><span>$1,291,000</span></div>
                    <div>
                      <span className="d-block mb-2 text-black-50"
                        >5232 California Fake, Ave. 21BC</span
                      >
                      <span className="city d-block mb-3">California, USA</span>

                      <div className="specs d-flex mb-4">
                        <span className="d-block d-flex align-items-center me-3">
                          <span className="icon-bed me-2"></span>
                          <span className="caption">2 beds</span>
                        </span>
                        <span className="d-block d-flex align-items-center">
                          <span className="icon-bath me-2"></span>
                          <span className="caption">2 baths</span>
                        </span>
                      </div>

                      <a
                        href="property-single.html"
                        className="btn btn-primary py-2 px-3"
                        >See details</a
                      >
                    </div>
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

export default Home