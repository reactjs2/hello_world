"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Homeform from "./components/homeform";
import "./footer.css";
const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      <footer className='main_footer_div footer_inner'>
        <div className='container'>
          {pathname.includes("contactus") ? (
            <div className='contact_us_padding'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 no_padding'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 right_padding_zero'>
                  <div className='location_div_main'>
                    <h2 className='location_title'>Location</h2>
                    <div className='address_div_child'>
                      <div className='flag_country'>
                        <img
                          className='lazy'
                          loading='lazy'
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/us_flag.svg`}
                          alt='Moon Technolabs USA Location'
                          width='35'
                          height='27'
                        />
                        <span>United States</span>
                      </div>
                      <p>
                        <span className='d-block'>
                          500 N Michigan Avenue, #600,
                        </span>{" "}
                        <span className='d-block'>Chicago IL 60611 </span>
                      </p>
                      <p className='multi-add-wrap'>
                        <span className='d-block'>
                          150 W. 25th Street, STE 403,
                        </span>
                        <span className='d-block'>
                          New York City, NYC 10001
                        </span>
                        <span className='d-block '>
                          <b>
                            <a
                              className='ind_phone'
                              id='sales_us_phone'
                              href='tel:+1(620)330-9814'
                            >
                              <svg
                                style={{
                                  verticalAlign: "-3px",
                                  marginRight: "5px",
                                }}
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fas'
                                data-icon='phone-alt'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                                width='1em'
                                height='1em'
                              >
                                <path
                                  fill='#ffffff'
                                  d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'
                                  className=''
                                ></path>
                              </svg>{" "}
                              +1 (620) 330-9814{" "}
                            </a>
                            <a
                              style={{
                                marginLeft: "10px",
                                display: "inline-block",
                                verticalAlign: "3px",
                              }}
                              target='_blank'
                              href='https://api.whatsapp.com/send?phone=+1(620)330-9814&amp;text=Hi'
                            >
                              <img
                                style={{ verticalAlign: "-8px" }}
                                src='https://cdn.moontechnolabs.com/live/images/images_svg/whatsapp.svg'
                                alt='whatsapp'
                              />
                            </a>
                          </b>
                        </span>
                      </p>
                    </div>
                    <div className='address_div_child'>
                      <div className='flag_country'>
                        <img
                          className='lazy'
                          loading='lazy'
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/india_flag.svg`}
                          alt='india_flag'
                          width='38'
                          height='27'
                        />
                        <span>India</span>
                      </div>
                      <p>
                        <span className='d-block '>
                          C-105, Ganesh Meridian,
                        </span>{" "}
                        <span className='d-block'>
                          S.G.Hwy, Ahmedabad, GJ 380060
                        </span>{" "}
                        <span className='d-block '>
                          <b>
                            <a
                              className='ind_phone mobile_hide_banner'
                              id='sales_ind_phone'
                              href='tel:+91-79-40055109'
                            >
                              {" "}
                              <svg
                                style={{
                                  verticalAlign: "-3px",
                                  marginRight: "5px",
                                }}
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fas'
                                data-icon='phone-alt'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                                width='1em'
                                height='1em'
                              >
                                <path
                                  fill='#ffffff'
                                  d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'
                                  className=''
                                ></path>
                              </svg>{" "}
                              +91-79-40055109{" "}
                            </a>
                          </b>
                        </span>
                      </p>
                    </div>
                    <div className='contact_space'>
                      <div className='contact_company'>
                        <img
                          className='lazy'
                          loading='lazy'
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/white_skype_icon.svg`}
                          alt='white_skype_icon'
                          width='21'
                          height='21'
                        />
                        <span>
                          {" "}
                          <a href='https://join.skype.com/invite/b3tUaT5cMXZG'>
                            Moon Technolabs
                          </a>
                        </span>
                      </div>
                      <div className='contact_company'>
                        <img
                          className='lazy'
                          loading='lazy'
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/white_mail_icon.svg`}
                          alt='white_mail_icon'
                          width='21'
                          height='21'
                        />
                        <span>
                          <a
                            className='ind_email sales_ind_event'
                            id='sales_ind_event2'
                            href='mailto:sales@moontechnolabs.com'
                          >
                            sales@moontechnolabs.com
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 left_padding_zero'>
                  <div className='location_div_main contact_div'>
                    <h2 className='location_title'>Awards</h2>
                    <div className='award_main_div'>
                      <div className='award_img_div'>
                        <img
                          className='lazy'
                          loading='lazy'
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/gesia.png`}
                          alt='gesia'
                        />
                      </div>
                      <div className='award_img_div'>
                        <img
                          className='lazy'
                          loading='lazy'
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/clutch1.png`}
                          alt='clutch1'
                        />
                      </div>
                      <div className='award_img_div'>
                        <img
                          className='lazy'
                          loading='lazy'
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/clutch2.png`}
                          alt='clutch2'
                        />
                      </div>
                      <div className='award_img_div'>
                        <img
                          className='lazy'
                          loading='lazy'
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/clutch3.png`}
                          alt='clutch3'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 no_padding'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 left_padding_zero'>
                <Homeform />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 right_padding_zero'>
                <div className='location_div_main'>
                  <h2 className='location_title'>Awards</h2>
                  <div className='award_main_div'>
                    <div className='award_img_div'>
                      <img
                        className='lazy'
                        loading='lazy'
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/gesia.png`}
                        alt='gesia'
                      />
                    </div>
                    <div className='award_img_div'>
                      <img
                        className='lazy'
                        loading='lazy'
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/clutch1.svg`}
                        alt='clutch1'
                      />
                    </div>
                    <div className='award_img_div'>
                      <img
                        className='lazy'
                        loading='lazy'
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/clutch2.svg`}
                        alt='clutch2'
                      />
                    </div>
                    <div className='award_img_div'>
                      <img
                        className='lazy'
                        loading='lazy'
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/clutch3.svg`}
                        alt='clutch3'
                      />
                    </div>
                  </div>
                </div>
                <div className='location_div_main'>
                  <h2 className='location_title'>Location</h2>
                  <div className='address_div_child'>
                    <div className='flag_country'>
                      <img
                        className='lazy'
                        loading='lazy'
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/us_flag.svg`}
                        alt='Moon Technolabs USA Location'
                        width='35'
                        height='27'
                      />
                      <span>United States</span>
                    </div>
                    <p>
                      <span className='d-block'>
                        500 N Michigan Avenue, #600,
                      </span>{" "}
                      <span className='d-block '>Chicago IL 60611 </span>
                    </p>
                    <p className='multi-add-wrap'>
                      <span className='d-block'>
                        150 W. 25th Street, STE 403,
                      </span>
                      <span className='d-block'>New York City, NYC 10001</span>
                      <span className='d-block '>
                        <b>
                          <a
                            className='ind_phone'
                            id='sales_us_phone'
                            href='tel:+1(620)330-9814'
                          >
                            {" "}
                            <svg
                              style={{
                                verticalAlign: "-3px",
                                marginRight: "5px",
                              }}
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fas'
                              data-icon='phone-alt'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 512 512'
                              width='1em'
                              height='1em'
                            >
                              <path
                                fill='#ffffff'
                                d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'
                                className=''
                              ></path>
                            </svg>{" "}
                            +1 (620) 330-9814{" "}
                          </a>
                          <a
                            style={{
                              marginLeft: "10px",
                              display: "inline-block",
                              verticalAlign: "3px",
                            }}
                            target='_blank'
                            href='https://api.whatsapp.com/send?phone=+1(620)330-9814&amp;text=Hi'
                          >
                            <img
                              style={{ verticalAlign: "-8px" }}
                              src='https://cdn.moontechnolabs.com/live/images/images_svg/whatsapp.svg'
                              alt='whatsapp'
                            />
                          </a>
                        </b>
                      </span>
                    </p>
                  </div>
                  <div className='address_div_child'>
                    <div className='flag_country'>
                      <img
                        className='lazy'
                        loading='lazy'
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/india_flag.svg`}
                        alt='india_flag'
                        width='38'
                        height='27'
                      />
                      <span>India</span>
                    </div>
                    <p>
                      <span className='d-block '>C-105, Ganesh Meridian,</span>{" "}
                      <span className='d-block'>
                        S.G.Hwy, Ahmedabad, GJ 380060
                      </span>{" "}
                      <span className='d-block '>
                        <b>
                          <a
                            className='ind_phone mobile_hide_banner'
                            id='sales_ind_phone'
                            href='tel:+91-79-40055109'
                          >
                            {" "}
                            <svg
                              style={{
                                verticalAlign: "-3px",
                                marginRight: "5px",
                              }}
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fas'
                              data-icon='phone-alt'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 512 512'
                              width='1em'
                              height='1em'
                            >
                              <path
                                fill='#ffffff'
                                d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'
                                className=''
                              ></path>
                            </svg>{" "}
                            +91-79-40055109{" "}
                          </a>
                        </b>
                      </span>
                    </p>
                  </div>
                  <div className='contact_space'>
                    <div className='contact_company'>
                      <img
                        className='lazy'
                        loading='lazy'
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/white_skype_icon.svg`}
                        alt='white_skype_icon'
                        width='21'
                        height='21'
                      />
                      <span>
                        {" "}
                        <a href='https://join.skype.com/invite/b3tUaT5cMXZG'>
                          Moon Technolabs
                        </a>
                      </span>
                    </div>
                    <div className='contact_company'>
                      <img
                        className='lazy'
                        loading='lazy'
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/white_mail_icon.svg`}
                        alt='white_mail_icon'
                        width='21'
                        height='21'
                      />
                      <span>
                        <a
                          className='ind_email sales_ind_event'
                          id='sales_ind_event2'
                          href='mailto:sales@moontechnolabs.com'
                        >
                          sales@moontechnolabs.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className='footer_contact'>
                    <div className='connect_with_us'>
                      <h4>Connect With Us.</h4>
                      <div className='form-group'>
                        <div className='newsletter_wrap'>
                          <input
                            type='text'
                            name='newsletter_footer'
                            placeholder='Subscribe to our newsletter'
                            className='form-control newslater_input'
                          />
                          <a
                            draggable='true'
                            className='call_api submit_newslater connect_submit_btn'
                            id='newsletter_submit_btn_id'
                          >
                            <img
                              loading='lazy'
                              className='lazy'
                              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
                              width='18'
                              height='12'
                              alt='Moon Technolabs'
                            />
                          </a>
                        </div>
                        <div
                          id='newsLetterMessage'
                          style={{ color: "red" }}
                        ></div>
                        <div
                          id='emptyemailMessage'
                          style={{ display: "none", color: "red" }}
                        >
                          Please enter email Id
                        </div>
                        <div
                          id='errormailMessage'
                          style={{ display: "none", color: "red" }}
                        >
                          Invalid Email Id. Please enter again
                        </div>
                        <div
                          id='alreadymailMessage'
                          style={{ display: "none", color: "red" }}
                        >
                          This email Id is already registered with us
                        </div>
                        <div
                          id='successmailMessage'
                          style={{ display: "none", color: "green" }}
                        >
                          Subscribed Successfully
                        </div>
                        <div
                          id='suspErrorMessage'
                          style={{ display: "none", color: "red" }}
                        >
                          We can't proceed as a suspicious activity has been
                          detected while submitting the form
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 no_padding'>
            <div className='ftr_social_icon'>
              <h6 className='social_title'>
                Stay Connected With Our Social Network
              </h6>
              <div className='social_icon'>
                <a
                  href='https://www.facebook.com/moontechnolabs/'
                  target='_blank'
                  aria-label='Social-FB'
                >
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='facebook-f'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 320 512'
                    width='1em'
                    height='1em'
                  >
                    <path
                      fill='#ffffff'
                      d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
                      className=''
                    ></path>
                  </svg>
                </a>
                <a
                  href='https://twitter.com/moontechnolabs'
                  target='_blank'
                  aria-label='Social-Twitter'
                >
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='twitter'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    width='1em'
                    height='1em'
                  >
                    <path
                      fill='#ffffff'
                      d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
                      className=''
                    ></path>
                  </svg>
                </a>
                <a
                  href='https://www.instagram.com/moontechnolabs/'
                  target='_blank'
                  aria-label='Social-Instagram'
                >
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='instagram'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    width='1em'
                    height='1em'
                  >
                    <path
                      fill='#ffffff'
                      d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                      className=''
                    ></path>
                  </svg>
                </a>
                <a
                  href='https://www.pinterest.com/moontechnolabs/'
                  target='_blank'
                  aria-label='Social-Pinterest'
                >
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='pinterest-p'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                    width='1em'
                    height='1em'
                  >
                    <path
                      fill='#ffffff'
                      d='M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z'
                      className=''
                    ></path>
                  </svg>
                </a>
                <a
                  href='https://www.linkedin.com/company/moon-technolabs-pvt-ltd'
                  target='_blank'
                  aria-label='Social-LinkedIn'
                >
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='linkedin-in'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    width='1em'
                    height='1em'
                  >
                    <path
                      fill='#ffffff'
                      d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
                      className=''
                    ></path>
                  </svg>
                </a>
                <a
                  href='https://www.youtube.com/@moontechnolabs'
                  target='_blank'
                  aria-label='Social-LinkedIn'
                >
                  {" "}
                  <svg
                    width='21'
                    height='15'
                    viewBox='0 0 21 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.9278 2.5788C19.701 1.73538 19.036 1.07051 18.1927 0.843407C16.6521 0.421875 10.4895 0.421875 10.4895 0.421875C10.4895 0.421875 4.32719 0.421875 2.78658 0.827425C1.9595 1.05429 1.27829 1.7355 1.05143 2.5788C0.645996 4.11929 0.645996 7.31406 0.645996 7.31406C0.645996 7.31406 0.645996 10.5249 1.05143 12.0493C1.27853 12.8926 1.94328 13.5575 2.7867 13.7846C4.34341 14.2062 10.4897 14.2062 10.4897 14.2062C10.4897 14.2062 16.6521 14.2062 18.1927 13.8007C19.0361 13.5737 19.701 12.9088 19.9281 12.0655C20.3334 10.5249 20.3334 7.33028 20.3334 7.33028C20.3334 7.33028 20.3496 4.11929 19.9278 2.5788ZM8.52748 10.2655V4.36262L13.652 7.31406L8.52748 10.2655Z'
                      fill='white'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='btm_footer_padding'>
            <div className='btm_footer'>
              <div className='ftr_connect_links'>
                <div className='ftr_links_wrap'>
                  <div className='ftr_links'>
                    <h4>Trending Services</h4>
                    <ul>
                      <li>
                        <a href="{{secure_asset('/services/mobile-app-development')}}">
                          Mobile Apps Development
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/web-application-development-company')}}">
                          Web Application Development
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/eCommerce-website-development-company')}}">
                          eCommerce App Development
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/asp-net-web-development')}}">
                          ASP .Net Application Development
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/on-demand-development')}}">
                          On-Demand App Development
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/hire-dedicated-developer')}}">
                          Hire Development Team
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='ftr_links'>
                    <h4>Business Solutions</h4>
                    <ul>
                      <li>
                        <a href="{{secure_asset('/services/blockchain-development')}}">
                          Blockchain Solutions
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/webrtc-development-company')}}">
                          WebRTC Solutions
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/video-streaming-app-development')}}">
                          Video App Solutions
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/asterisk-development-company')}}">
                          Asterisk Solutions
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/iot-development-company')}}">
                          IoT Solutions
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/ar-vr-development-company')}}">
                          AR/VR Solutions
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='ftr_links tech_links_details'>
                    <h4>Technologies</h4>
                    <ul>
                      <li>
                        <a href="{{secure_asset('/services/android-app-development-company')}}">
                          Android
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/ios-app-development')}}">
                          iOS
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/xamarin-app-development-company')}}">
                          Xamarin
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/ionic-app-development-company')}}">
                          Ionic
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/react-native-app-development-company')}}">
                          React Native
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/flutter-app-development-company')}}">
                          Flutter
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/laravel-development-company')}}">
                          Laravel
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/codeigniter-development-company')}}">
                          Codeigniter
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/node-js-development-company')}}">
                          Node.js
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/angularJS-development-company')}}">
                          Angular
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/reactjs-development-company')}}">
                          ReactJS
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='ftr_links'>
                    <h4>On-Demand Solutions</h4>
                    <ul>
                      <li>
                        <a href="{{secure_asset('/services/grocery-delivery-app-development-company')}}">
                          Grocery Delivery App
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/taxi-booking-app-development-company')}}">
                          Taxi Booking App
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/educational-app-development')}}">
                          eLearning App
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/restaurant-app-development-company')}}">
                          Restaurant Booking App
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/solution/healthcare-app-development')}}">
                          Telemedicine App
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/services/food-delivery-app-development-company')}}">
                          Food Delivery App
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='ftr_links company_links_details'>
                    <h4>Company</h4>
                    <ul>
                      <li>
                        <a href="{{secure_asset('/about-us')}}">About Us</a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/awards-certificates')}}">
                          Awards
                        </a>
                      </li>
                      <li className='hire_tag'>
                        <a href="{{secure_asset('/career-with-us')}}">
                          <span>Jobs</span>{" "}
                          <span className='tag-line'>We are Hiring!</span>
                        </a>
                      </li>
                      <li>
                        <a
                          target='_blank'
                          href="{{secure_asset('/Moon-Technolabs-Corporate-Profile.pdf')}}"
                        >
                          Why Us?
                        </a>
                      </li>
                      <li>
                        <a href='/blog'>Blog</a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/portfolios')}}">Portfolio</a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/business-model')}}">
                          Business Model
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/testimonials')}}">
                          Client Testimonials
                        </a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/contact-us')}}">Contact Us</a>
                      </li>
                      <li>
                        <a href="{{secure_asset('/partnership-with-us')}}">
                          Join Partner Program
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='footer_copyright'>
            <div className='copyright_wrap'>
              <span>© 2009 Moon Technolabs Pvt. Ltd. All Rights Reserved.</span>
              <div className='img_wrap'>
                <img
                  className='lazy'
                  loading='lazy'
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/dmca_protected.jpg`}
                  alt='dmca'
                />
              </div>
            </div>
            <ul className='policy_wrap'>
              <li>
                <a href="{{secure_asset('/privacy-policy')}}">Privacy Policy</a>
              </li>
              <li>
                <a href="{{secure_asset('/terms-of-use')}}">Terms Of Use</a>
              </li>
              <li>
                <a href="{{secure_asset('/sitemap.html')}}">Site Map</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
