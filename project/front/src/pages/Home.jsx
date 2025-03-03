import React from 'react'
import Venue from '../components/Venue'

const Home = () => {
  return (
    <>
        
        <section>
    </section>
    <section id="speakers" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>Event Speakers</h2>
          <p>Here are some of our speakers</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="speaker">
              <img src="/assets/img/speakers/1.jpg" alt="Speaker 1" className="img-fluid" />
              <div className="details">
                <h3><a href="speaker-details.html">Brenden Legros</a></h3>
                <p>Quas alias incidunt</p>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-google-plus"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="speaker">
              <img src="/assets/img/speakers/2.jpg" alt="Speaker 2" className="img-fluid" />
              <div className="details">
                <h3><a href="speaker-details.html">Hubert Hirthe</a></h3>
                <p>Consequuntur odio aut</p>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-google-plus"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="speaker">
              <img src="/assets/img/speakers/3.jpg" alt="Speaker 3" className="img-fluid" />
              <div className="details">
                <h3><a href="speaker-details.html">Cole Emmerich</a></h3>
                <p>Fugiat laborum et</p>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-google-plus"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="speaker">
              <img src="/assets/img/speakers/4.jpg" alt="Speaker 4" className="img-fluid" />
              <div className="details">
                <h3><a href="speaker-details.html">Jack Christiansen</a></h3>
                <p>Debitis iure vero</p>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-google-plus"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="speaker">
              <img src="/assets/img/speakers/5.jpg" alt="Speaker 5" className="img-fluid" />
              <div className="details">
                <h3><a href="speaker-details.html">Alejandrin Littel</a></h3>
                <p>Qui molestiae natus</p>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-google-plus"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="speaker">
              <img src="/assets/img/speakers/6.jpg" alt="Speaker 6" className="img-fluid" />
              <div className="details">
                <h3><a href="speaker-details.html">Willow Trantow</a></h3>
                <p>Non autem dicta</p>
                <div className="social">
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-facebook"></i></a>
                  <a href=""><i className="fa fa-google-plus"></i></a>
                  <a href=""><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section id="schedule" className="section-with-bg">
      <div className="container wow fadeInUp">
        <div className="section-header">
          <h2>Event Schedule</h2>
          <p>Here is our event schedule</p>
        </div>

        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab">Day 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-2" role="tab" data-toggle="tab">Day 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#day-3" role="tab" data-toggle="tab">Day 3</a>
          </li>
        </ul>

        <h3 className="sub-heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
          necessitatibus voluptatem quis labore perspiciatis quia.</h3>

        <div className="tab-content row justify-content-center">


          <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">

            <div className="row schedule-item">
              <div className="col-md-2"><time>09:30 AM</time></div>
              <div className="col-md-10">
                <h4>Registration</h4>
                <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/1.jpg" alt="Brenden Legros" />
                </div>
                <h4>Keynote <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/2.jpg" alt="Hubert Hirthe" />
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>12:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/3.jpg" alt="Cole Emmerich" />
                </div>
                <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>02:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/4.jpg" alt="Jack Christiansen" />
                </div>
                <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>03:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/5.jpg" alt="Alejandrin Littel" />
                </div>
                <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>04:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/6.jpg" alt="Willow Trantow" />
                </div>
                <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
              </div>
            </div>

          </div>
          
          <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-2">

            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/1.jpg" alt="Brenden Legros" />
                </div>
                <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/2.jpg" alt="Hubert Hirthe" />
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>12:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/3.jpg" alt="Cole Emmerich" />
                </div>
                <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>02:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/4.jpg" alt="Jack Christiansen" />
                </div>
                <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>03:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/5.jpg" alt="Alejandrin Littel" />
                </div>
                <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>04:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/6.jpg" alt="Willow Trantow" />
                </div>
                <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
              </div>
            </div>

          </div>
          
          <div role="tabpanel" className="col-lg-9  tab-pane fade" id="day-3">

            <div className="row schedule-item">
              <div className="col-md-2"><time>10:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/2.jpg" alt="Hubert Hirthe" />
                </div>
                <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>11:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/3.jpg" alt="Cole Emmerich" />
                </div>
                <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>12:00 AM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/1.jpg" alt="Brenden Legros" />
                </div>
                <h4>Libero corrupti explicabo itaque. <span>Brenden Legros</span></h4>
                <p>Facere provident incidunt quos voluptas.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>02:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/4.jpg" alt="Jack Christiansen" />
                </div>
                <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>03:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/5.jpg" alt="Alejandrin Littel" />
                </div>
                <h4>Quos ratione neque expedita asperiores. <span>Alejandrin Littel</span></h4>
                <p>Eligendi quo eveniet est nobis et ad temporibus odio quo.</p>
              </div>
            </div>

            <div className="row schedule-item">
              <div className="col-md-2"><time>04:00 PM</time></div>
              <div className="col-md-10">
                <div className="speaker">
                  <img src="/assets/img/speakers/6.jpg" alt="Willow Trantow" />
                </div>
                <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
              </div>
            </div>

          </div>
          

        </div>

      </div>

    </section>
    <Venue />

    </>
  )
}

export default Home