"use client";
import React, { useRef, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "./client.css";

const Clients = () => {
  const [temp, settemp] = useState(false);
  const [client, setclient] = useState<string[]>([]);
  const [youtubeUrl, setyoutubeUrl] = useState("");
  const [clientName, setclientName] = useState("");

  const firstbtn = useRef<any>();
  const handleAdd = (id: string) => {
    setclient([...client, id]);
    setTimeout(() => {
      firstbtn.current.click();
    }, 100);
  };
  const handleRemove = (id: string) => {
    setclient(client.filter((item) => item !== id));
  };
  return (
    <div className='testimonial_client_div'>
      <div
        className='modal fade scroll modal_popup_width_new sub_popup'
        id='sub_popup'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='sub_popup'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header pt-1 pb-0'>
              <div className='videomainti'>
                <span>{clientName}</span>
              </div>
              <button
                type='button'
                className='close float-left'
                data-dismiss='modal'
                aria-label='Close'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 0 24 24'
                  width='24px'
                  fill='#000000'
                >
                  <path d='M0 0h24v24H0V0z' fill='none'></path>
                  <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'></path>
                </svg>
              </button>
            </div>
            <div className='modal-body'>
              <div className='aftertrelersec'>
                <div className='playforvideo'>
                  <div id='testimonialvid'>
                    {youtubeUrl && (
                      <iframe
                        width='100'
                        height='315'
                        id='video_url'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        style={{ width: "100%", padding: 0 }}
                        data-lf-form-tracking-inspected-yegkb8lwqpjaep3z='true'
                        data-lf-yt-playback-inspected-yegkb8lwqpjaep3z='true'
                        data-lf-vimeo-playback-inspected-yegkb8lwqpjaep3z='true'
                        src={`${youtubeUrl}?autoplay=1&amp;showinfo=0&amp;modestbranding=1&amp;rel=0`}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='services_child'>
        <h2 className='center_under_line'>What Our Clients Say About Us?</h2>
        <p className='desc_txt'>
          We take pride in our services and fortunately we are not the only ones
          who think so. Check out what our clients have to say about us.
        </p>
      </div>
      <div className='testimonial_slider_div testmnial_dynamic'>
        <button className='hidden'>hidden button</button>
        <div className='testimonial_slider' id='client_slider'>
          <OwlCarousel className='owl-theme' loop margin={10} nav>
            <div className='client_box video_box'>
              <a
                href='javascript:void(0)'
                className='videopopup video-wrapper testimonial_v1'
                data-val='https://www.youtube.com/embed/LDnzC5IjAOw'
                data-title='Justin G. Founder &amp; CEO'
                data-toggle='modal'
                data-target='#sub_popup'
                onClick={() => {
                  setclientName("Justin G. Founder & CEO");
                  setyoutubeUrl("https://www.youtube.com/embed/LDnzC5IjAOw");
                }}
              >
                <div className='play_button'>
                  <img
                    className='owl-lazy'
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/Justingant.jpeg`}
                    alt='client_testimonial_img_1'
                    width='364'
                    height='350'
                    style={{ opacity: 1 }}
                  />
                  <div className='play'>
                    <svg
                      className='video-overlay-play-button new_1'
                      viewBox='0 0 200 200'
                    >
                      <circle
                        cx='100'
                        cy='100'
                        r='90'
                        fill='none'
                        strokeWidth='15'
                        stroke='#fff'
                      ></circle>
                      <polygon
                        points='70, 55 70, 145 145, 100'
                        fill='#fff'
                      ></polygon>
                    </svg>
                  </div>
                </div>
              </a>
              <div className='hide-show'>
                <div className='client_name_info'>
                  <h5>Justin G.</h5>
                  <span>(United States)</span>
                </div>
                <p>
                  Moon Technolabs is a pioneer in the WebRTC based project as
                  they have fixed complicated segments of the module by
                  fulfilling different product lines by providing 24X7 customer
                  support. We really recommended Moon Technolabs as they are
                  able to develop products as per the module deadline and
                  project timeline.
                </p>
                <a
                  href='JavaScript:void(0);'
                  className='moreless-button d-show'
                >
                  View More
                </a>
                <a
                  href='JavaScript:void(0);'
                  className='moreless-button d-none'
                >
                  View less
                </a>
              </div>
            </div>
            <div className='item'>
              <div className='client_box video_box'>
                <a
                  href='javascript:void(0)'
                  className='videopopup video-wrapper testimonial_v1'
                  data-val='https://www.youtube.com/embed/ew4FSuJ0-YE'
                  data-title='Ayse D. Co-Founder'
                  data-toggle='modal'
                  data-target='#sub_popup'
                  onClick={() => {
                    setclientName("Ayse D. Co-Founder");
                    setyoutubeUrl("https://www.youtube.com/embed/ew4FSuJ0-YE");
                  }}
                >
                  <div className='play_button'>
                    <img
                      className='owl-lazy'
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/Ayse.jpeg`}
                      alt='client_testimonial_img_1'
                      style={{ opacity: 1 }}
                    />
                    <div className='play'>
                      <svg
                        className='video-overlay-play-button new_1'
                        viewBox='0 0 200 200'
                      >
                        <circle
                          cx='100'
                          cy='100'
                          r='90'
                          fill='none'
                          strokeWidth='15'
                          stroke='#fff'
                        ></circle>
                        <polygon
                          points='70, 55 70, 145 145, 100'
                          fill='#fff'
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                </a>
                <div className='hide-show'>
                  <div className='client_name_info'>
                    <h5>Ayse D.</h5>
                    <span>(France)</span>
                  </div>
                  <p>
                    I highly recommend Moon Technolabs as the quality of service
                    is wonderful. We have hired this company to develop the
                    product based on some complex & technical issues. We get the
                    best quality services as compared with others in the market.
                    Huge Thanks to Moon Technolabs as the team is always ready
                    to give the solution all time.
                  </p>
                  <a
                    href='JavaScript:void(0);'
                    className='moreless-button d-show'
                  >
                    View More
                  </a>
                  <a
                    href='JavaScript:void(0);'
                    className='moreless-button d-none'
                  >
                    View less
                  </a>
                </div>
              </div>
            </div>

            <div className='item'>
              <div className='client_box video_box'>
                <a
                  href='javascript:void(0)'
                  className='videopopup video-wrapper testimonial_v1'
                  data-val='https://www.youtube.com/embed/3FrbEbkAis0'
                  data-title='Flavio S. Founder &amp; Managing Director'
                  data-toggle='modal'
                  data-target='#sub_popup'
                  onClick={() => {
                    setclientName("Flavio S. Founder & Managing Director");
                    setyoutubeUrl("https://www.youtube.com/embed/3FrbEbkAis0");
                  }}
                >
                  <div className='play_button'>
                    <img
                      className='owl-lazy'
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/images_svg/flavio_s.jpg`}
                      alt='client_testimonial_img_1'
                      style={{ opacity: 1 }}
                    />
                    <div className='play'>
                      <svg
                        className='video-overlay-play-button new_1'
                        viewBox='0 0 200 200'
                      >
                        <circle
                          cx='100'
                          cy='100'
                          r='90'
                          fill='none'
                          strokeWidth='15'
                          stroke='#fff'
                        ></circle>
                        <polygon
                          points='70, 55 70, 145 145, 100'
                          fill='#fff'
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                </a>
                <div className='hide-show'>
                  <div className='client_name_info'>
                    <h5>Flavio S.</h5>
                    <span>(Germany)</span>
                  </div>
                  <p>
                    I am happy to recommend Moon Technolabs for their app
                    development services. They successfully developed apps for
                    me, and I am highly satisfied with the overall outcomes. The
                    development team has swiftly addressed the issues with
                    responsive and effective communication to understand the
                    requirement quickly and actively resolve the back-and-forth
                    problems that arose. The team also displayed great expertise
                    in fixing bugs. Whenever issues were identified, they
                    promptly decided on them, demonstrating their technical
                    proficiency and commitment to delivering a high-quality
                    product.
                  </p>
                  <a
                    href='JavaScript:void(0);'
                    className='moreless-button d-show'
                  >
                    View More
                  </a>
                  <a
                    href='JavaScript:void(0);'
                    className='moreless-button d-none'
                  >
                    View less
                  </a>
                </div>
              </div>
            </div>

            <div className='item'>
              <div className='client_box video_box'>
                <a
                  href='javascript:void(0)'
                  className='videopopup video-wrapper testimonial_v1'
                  data-val='https://www.youtube.com/embed/_RUtKvC6mHw'
                  data-title='Jay M. Founder &amp; CEO'
                  data-toggle='modal'
                  data-target='#sub_popup'
                  onClick={() => {
                    setclientName("Jay M. Founder & CEO");
                    setyoutubeUrl("https://www.youtube.com/embed/_RUtKvC6mHw");
                  }}
                >
                  <div className='play_button'>
                    <img
                      className='owl-lazy'
                      alt='client_testimonial_img_1'
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/Jaymartin.jpeg`}
                      style={{ opacity: 1 }}
                    />
                    <div className='play'>
                      <svg
                        className='video-overlay-play-button new_1'
                        viewBox='0 0 200 200'
                      >
                        <circle
                          cx='100'
                          cy='100'
                          r='90'
                          fill='none'
                          strokeWidth='15'
                          stroke='#fff'
                        ></circle>
                        <polygon
                          points='70, 55 70, 145 145, 100'
                          fill='#fff'
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                </a>
                <div className='hide-show'>
                  <div className='client_name_info'>
                    <h5>Jay M.</h5>
                    <span>(United States)</span>
                  </div>
                  <p>
                    Moon Technolabs is the best company that provides advanced
                    apps and websites development services in the USA and
                    Europe. I am a newbie to develop my app with an external
                    team. I am really happy to work with them as I am not that
                    much mobile apps user. Here, the team and specially the CEO
                    of Moon Technolabs helps me to let me know about the
                    benefits of my app to generate revenue. Thanks, Moon
                    Technolabs as I like their components as Trust, Commitment,
                    Quality, and Price.
                  </p>
                  <a
                    href='JavaScript:void(0);'
                    className='moreless-button d-show'
                  >
                    View More
                  </a>
                  <a
                    href='JavaScript:void(0);'
                    className='moreless-button d-none'
                  >
                    View less
                  </a>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box video_box'>
                <a
                  href='javascript:void(0)'
                  className='videopopup video-wrapper testimonial_v1'
                  data-val='https://www.youtube.com/embed/uwgtvJ75kbo'
                  data-title='Yousef A. Challenger BH, Founder'
                  data-toggle='modal'
                  data-target='#sub_popup'
                  onClick={() => {
                    setclientName("Yousef A. Challenger BH, Founder");
                    setyoutubeUrl("https://www.youtube.com/embed/uwgtvJ75kbo");
                  }}
                >
                  <div className='play_button'>
                    <img
                      className='owl-lazy'
                      alt='client_testimonial_img_1'
                      width='364'
                      height='350'
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/YousefA.jpeg`}
                      style={{ opacity: 1 }}
                    />
                    <div className='play'>
                      <svg
                        className='video-overlay-play-button new_1'
                        viewBox='0 0 200 200'
                      >
                        <circle
                          cx='100'
                          cy='100'
                          r='90'
                          fill='none'
                          strokeWidth='15'
                          stroke='#fff'
                        ></circle>
                        <polygon
                          points='70, 55 70, 145 145, 100'
                          fill='#fff'
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                </a>
                <div className='hide-show'>
                  <div className='client_name_info'>
                    <h5>Yousef A.</h5>
                    <span>(Jordan (Middle East))</span>
                  </div>
                  <p>
                    Moon Technolabs provides the best mobile app development
                    solutions and as a team, they are amazing to fulfil my
                    requirements of sports mobile application. I recommend all
                    the time Moon Technolabs. Thanks!
                  </p>
                  <a
                    href='JavaScript:void(0);'
                    className='moreless-button d-show'
                  >
                    View More
                  </a>
                  <a
                    href='JavaScript:void(0);'
                    className='moreless-button d-none'
                  >
                    View less
                  </a>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box video_box'>
                <a
                  href='javascript:void(0)'
                  className='videopopup video-wrapper testimonial_v1'
                  data-val='https://www.youtube.com/embed/2Rq6ziiPhxI'
                  data-title='Jacquis F. Co-Founder & CEO'
                  data-toggle='modal'
                  data-target='#sub_popup'
                  onClick={() => {
                    setclientName("Jacquis F. Co-Founder & CEO");
                    setyoutubeUrl("https://www.youtube.com/embed/2Rq6ziiPhxI");
                  }}
                >
                  <div className='play_button'>
                    <img
                      className='owl-lazy'
                      alt='client_testimonial_img_2'
                      width='364'
                      height='350'
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/Jacquis.png`}
                      style={{ opacity: 1 }}
                    />
                    <div className='play'>
                      <svg
                        className='video-overlay-play-button new_1'
                        viewBox='0 0 200 200'
                      >
                        <circle
                          cx='100'
                          cy='100'
                          r='90'
                          fill='none'
                          strokeWidth='15'
                          stroke='#fff'
                        ></circle>
                        <polygon
                          points='70, 55 70, 145 145, 100'
                          fill='#fff'
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                </a>
                <div className='hide-show'>
                  <div className='client_name_info'>
                    <h5>Jacquis F.</h5>
                    <span>(USA)</span>
                  </div>
                  <p>
                    We have developed mobile apps and web applications using
                    Flutter to provide solutions in cross platforms such as
                    Android, iOS, Linux, macOS, Windows & Web. Here, you can
                    refer to a client testimonial in his own words about our IT
                    services.
                  </p>
                  <a
                    href='JavaScript:void(0);'
                    className='moreless-button d-show'
                  >
                    View More
                  </a>
                  <a
                    href='JavaScript:void(0);'
                    className='moreless-button d-none'
                  >
                    View less
                  </a>
                </div>
              </div>
            </div>

            <div className='item'>
              <div className='client_box video_box'>
                <a
                  href='javascript:void(0)'
                  className='videopopup video-wrapper testimonial_v1'
                  data-val='https://www.youtube.com/embed/Huq-mbO2IBk'
                  data-title='Dr. Sumeet T. Indigo Dermatology, Founder'
                  data-toggle='modal'
                  data-target='#sub_popup'
                  onClick={() => {
                    setclientName("Dr. Sumeet T. Indigo Dermatology, Founder");
                    setyoutubeUrl("https://www.youtube.com/embed/Huq-mbO2IBk");
                  }}
                >
                  <div className='play_button'>
                    <img
                      className='owl-lazy'
                      alt='client_testimonial_img_1'
                      width='364'
                      height='350'
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/DrSumeetThareja.jpeg`}
                      style={{ opacity: 1 }}
                    />
                    <div className='play'>
                      <svg
                        className='video-overlay-play-button new_1'
                        viewBox='0 0 200 200'
                      >
                        <circle
                          cx='100'
                          cy='100'
                          r='90'
                          fill='none'
                          strokeWidth='15'
                          stroke='#fff'
                        ></circle>
                        <polygon
                          points='70, 55 70, 145 145, 100'
                          fill='#fff'
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                </a>
                <div className='client_name_info'>
                  <h5>Dr. Sumeet T.</h5>
                  <span>(USA)</span>
                </div>
                <p>
                  The developer team at Moon Technolabs is really excellent and
                  provides me a great solutions as per my requirements. Thanks
                  Moon Technolabs!
                </p>
              </div>
            </div>

            <div className='item'>
              <div className='client_box video_box'>
                <a
                  href='javascript:void(0)'
                  className='videopopup video-wrapper testimonial_v10'
                  data-val='https://www.youtube.com/embed/BdysDDJuhFA'
                  data-title='Ehis E. Owner'
                  data-toggle='modal'
                  data-target='#sub_popup'
                  onClick={() => {
                    setclientName("Ehis E. Owner");
                    setyoutubeUrl("https://www.youtube.com/embed/BdysDDJuhFA");
                  }}
                >
                  <div className='play_button'>
                    <img
                      className='owl-lazy'
                      alt='client_testimonial_img_1'
                      width='364'
                      height='350'
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/client_porteye.jpg`}
                      style={{ opacity: 1 }}
                    />
                    <div className='play'>
                      <svg
                        className='video-overlay-play-button new_1'
                        viewBox='0 0 200 200'
                      >
                        <circle
                          cx='100'
                          cy='100'
                          r='90'
                          fill='none'
                          strokeWidth='15'
                          stroke='#fff'
                        ></circle>
                        <polygon
                          points='70, 55 70, 145 145, 100'
                          fill='#fff'
                        ></polygon>
                      </svg>
                    </div>
                  </div>
                </a>
                <div className='hide-show'>
                  <div className='client_name_info'>
                    <h5>Ehis E.</h5>
                    <span>(Canada)</span>
                  </div>
                  <p>
                    Moon Technolabs has created a portal by integrations with
                    multiple modules including ETR functionality as per the
                    requirement of the client. Here, the challenging part is to
                    gather information, understand the idea and know about the
                    scope of work in a given timeline. For that Team MTPL has
                    discussed different modules and was clear about the
                    requirements with a deadline and developed a robust
                    solution. I am highly satisfied with their work and I
                    strongly recommend Moon Technolabs.
                  </p>
                  <a
                    href='JavaScript:void(0);'
                    className='moreless-button d-show'
                  >
                    View More
                  </a>
                  <a
                    href='JavaScript:void(0);'
                    className='moreless-button d-none'
                  >
                    View less
                  </a>
                </div>
              </div>
            </div>

            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  Their team did a great job of managing the timeline and
                  communicating their progress throughout the project. They were
                  accommodating in the face of unexpected changes and delivered
                  all key features. The updated app made it easier to track
                  budgets and improved the finance department’s efficiency.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Former IT Director Nevis Island Administration</h5>
                    <span>USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  The new site is high functioning and has experienced an
                  increase in users. The Moon Technolabs Pvt Ltd team’s
                  availability made the collaboration effortless and productive.
                  They fostered a professional environment and produced a final
                  product with no major problems.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>CEO Reliyo</h5>
                    <span>Germany</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  The Moon team was extremely helpful throughout the process.
                  They were willing to explain things that I did not understand
                  and patiently work with me to ensure my asks were met
                  correctly. It's been a pleasure working with them and I would
                  certainly recommend them to anyone.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Matthew J.</h5>
                    <span>United States</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  The team delivered top-tier apps that garnered positive
                  feedback from users and had minimal issues. They excelled at
                  project management and were committed to surpassing
                  expectations.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Co-Founder Safe Surfer</h5>
                    <span>Newzeland</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  WThe client was pleased with the quality of final product,
                  which was delivered on time. Moon Technolabs was responsive
                  throughout the project.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Founder App Development Shop</h5>
                    <span>Boston, MA, USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  The project timeline and estimates were on point and the end
                  client was ultimately happy with the product.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>President Bend Cloud</h5>
                    <span>USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>The team often went further than was expected and needed.</p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Sholem Hurwitz </h5>
                    <span>Nantes, France</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  The work was carried out very well with excellent
                  communication throughout.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Michael H.</h5>
                    <span>United Kingdom</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  Excellent work and very responsive and knowledge iOS
                  developers. Highly recommend them.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Roberto D.</h5>
                    <span>United State</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  It was a pleasure to work with Moon Technolabs. The
                  communication and flexibility on their part was amazing. I
                  will definitely work again with them in future projects.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Corneliu S.</h5>
                    <span>Australia</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  Thank you for the quality of work. Thanks to Chirag and Hiren
                  for the great availability. The project is complex and long
                  but the progress has been steady and always step by step. I
                  keep this partner for my future projects. I am very happy with
                  the quality
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Roman A.</h5>
                    <span>France</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  The client has been happy with both the web design and
                  marketing services provided. The time difference and slight
                  language barrier have been a modest hindrance to
                  collaboration, but have not impacted overall satisfaction.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Sole Proprietor Trendkiste</h5>
                    <span>Germany</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  Highest recommendation, think this was our 5-6 projects, plan
                  to do at least 2-3 more plus they are doing an app. Great
                  guys, have good quality, competitive pricing and have been
                  very honest. I don't take any of those for granted.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Jay M.</h5>
                    <span>United States</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  This was an amazing experience and will use them again in the
                  near future for any mobile app development we will have. Can't
                  say enough of how great this was for the budget and the speed
                  in which everything was done.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Joel M.</h5>
                    <span>United States</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  Moon delivered the solutions we wanted on time and with great
                  technical quality. There were some delays, as are expected in
                  a complex project, but the team addressed them properly. We
                  will continue working with them in the future.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Felipe O.</h5>
                    <span>Ecuador</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  Moon Technolabs have helped me in designing &amp; developing
                  this attractive iPad/iPhone Coloring book app and have
                  supported me from scratch till uploading the app on App
                  stores. I am highly recommending them for the best company in
                  iPhone and iPad app.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Vincent C. </h5>
                    <span>Belgium (Dutch)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  The updated app has yet to launch, but Moon Technolabs Pvt Ltd
                  met every milestone ahead of time without sacrificing quality.
                  Customers can expect an experienced team that provides speedy
                  service and prompt responses to questions or issues. Their
                  timeliness despite time zone differences stood out.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>IT Manager Institute for Intergovernmental Research</h5>
                    <span>USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  The enhanced system eliminated delays, streamlined reporting
                  processes, and simplified every department’s workflow. Moon
                  Technolabs Pvt Ltd communicated clearly and delivered each
                  task on time. Their prompt, thorough approach kept the project
                  on track.
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>
                      Assistant Secretary Ministry of Finance Nevis Island
                      Administration
                    </h5>
                    <span>Germany</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  It was a great experience to working with Moon Technolabs.We
                  have worked on serveral Android App development Projects over
                  the past year and are currently working on the iOS version of
                  one of them. The team is very professional and responsive. In
                  particular, they follow good project management
                  practices,assigning ,me to a Project Manager, Who has been the
                  single…
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Faisal C.</h5>
                    <span>London, United Kingdom</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='client_box'>
                <span className='quote_span'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='svg-inline--fa fa-quote-left fa-w-16'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                </span>
                <p>
                  I have spent the last 3-months working with the team from Moon
                  Technolabs and they have been fantastic to work with. The
                  quality of work is great, very responsive with getting back to
                  me in a timely manner and all the developers understand the
                  tasks well and deliver on time. I will continue to work with
                  Jayanti, Bhanu and all the team members that have helped with
                  our project. I look forward to what we can achieve in the near
                  future. Thanks guys!
                </p>
                <div className='testi_client_content'>
                  <div className='name_position'>
                    <h5>Adam N.</h5>
                    <span>New Zealand</span>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Clients;
