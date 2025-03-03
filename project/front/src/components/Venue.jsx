import React from 'react'

const Venue = () => {
  return (
    <section id="venue" className="wow fadeInUp">

      <div className="container-fluid">

        <div className="section-header">
          <h2>Event Venue</h2>
          <p>Event venue location info and gallery</p>
        </div>

        <div className="row no-gutters">
          <div className="col-lg-6 venue-map">
           
          </div>

          <div className="col-lg-6 venue-info">
            <div className="row justify-content-center">
              <div className="col-11 col-lg-8">
                <h3>Downtown Conference Center, New York</h3>
                <p>Iste nobis eum sapiente sunt enim dolores labore accusantium autem. Cumque beatae ipsam. Est quae sit qui voluptatem corporis velit. Qui maxime accusamus possimus. Consequatur sequi et ea suscipit enim nesciunt quia velit.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container-fluid venue-gallery-container">
        <div className="row no-gutters">

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/1.jpg" className="venobox" data-gall="venue-gallery">
                <img src="/assets/img/venue-gallery/1.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/2.jpg" className="venobox" data-gall="venue-gallery">
                <img src="/assets/img/venue-gallery/2.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/3.jpg" className="venobox" data-gall="venue-gallery">
                <img src="/assets/img/venue-gallery/3.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/4.jpg" className="venobox" data-gall="venue-gallery">
                <img src="/assets/img/venue-gallery/4.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/5.jpg" className="venobox" data-gall="venue-gallery">
                <img src="/assets/img/venue-gallery/5.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/6.jpg" className="venobox" data-gall="venue-gallery">
                <img src="/assets/img/venue-gallery/6.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/7.jpg" className="venobox" data-gall="venue-gallery">
                <img src="/assets/img/venue-gallery/7.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="venue-gallery">
              <a href="img/venue-gallery/8.jpg" className="venobox" data-gall="venue-gallery">
                <img src="/assets/img/venue-gallery/8.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Venue