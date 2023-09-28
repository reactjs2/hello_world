import React from "react";
import Clients from "./clients";

const TopService = () => {
  return (
    <section className='top_service_section_div'>
      <div className='container'>
        <div className='top_section_child'>
          <div className='services_child'>
            <h2 className='center_under_line'>
              Top IT Development Services and Solutions Company Accredited By
            </h2>
          </div>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 no_padding top_margin'>
            <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12 left_padding_zero'>
              <div
                className='it_service_child wow fadeInUp'
                data-wow-delay='0.2s'
              >
                <div className='it_img_div'>
                  <img
                    className='lazy'
                    alt='solution1'
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/solution1.jpg`}
                    width='103'
                    height='30'
                  />
                </div>
                <div className='service_rating'>
                  <span>4.9</span>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star-half-alt'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 536 512'
                    className='svg-inline--fa fa-star-half-alt fa-w-17'
                  >
                    <path
                      fill='currentColor'
                      d='M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z'
                      className=''
                    ></path>
                  </svg>
                </div>
                <div className='service_desc'>
                  <p>
                    Got 4.9 Stars by Recognized as "Top App Development Company"
                    by Clutch.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
              <div
                className='it_service_child wow fadeInUp'
                data-wow-delay='0.2s'
              >
                <div className='it_img_div'>
                  <img
                    className='lazy'
                    alt='solution2'
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/solution2.jpg`}
                    width='117'
                    height='35'
                  />
                </div>
                <div className='service_rating'>
                  <span>JSS 100%</span>
                </div>
                <div className='service_desc'>
                  <p>
                    Got "Top Rated" Badge with 100% of Job Success on Upwork.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
              <div
                className='it_service_child wow fadeInUp'
                data-wow-delay='0.2s'
              >
                <div className='it_img_div'>
                  <img
                    className='lazy'
                    alt='solution3'
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/solution3.jpg`}
                    width='154'
                    height='30'
                  />
                </div>
                <div className='service_rating'>
                  <span>4.8</span>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star-half-alt'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 536 512'
                    className='svg-inline--fa fa-star-half-alt fa-w-17'
                  >
                    <path
                      fill='currentColor'
                      d='M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z'
                      className=''
                    ></path>
                  </svg>
                </div>
                <div className='service_desc'>
                  <p>
                    Got 4.8 Stars as "Top Mobile App Development Company" by
                    GoodFirms.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12 right_padding_zero'>
              <div
                className='it_service_child wow fadeInUp'
                data-wow-delay='0.2s'
              >
                <div className='it_img_div'>
                  <img
                    className='lazy'
                    alt='solution4'
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/solution4.jpg`}
                    width='107'
                    height='40'
                  />
                </div>
                <div className='service_rating'>
                  <span>5.0</span>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='star'
                    className='svg-inline--fa fa-star fa-w-18'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                    ></path>
                  </svg>
                </div>
                <div className='service_desc'>
                  <p>
                    Got 5.0 Stars as "Professional Development Services Company
                    for Hiring" by Bark.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='trustable_client_div'>
          <div className='services_child'>
            <h2 className='center_under_line'>Our Esteemed Clients</h2>
          </div>
          <div className='trust_client_child'>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_1.jpg`}
                width='163'
                height='47'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_2.jpg`}
                width='144'
                height='40'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_3.jpg`}
                width='120'
                height='41'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_4.jpg`}
                width='134'
                height='78'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_5.jpg`}
                width='140'
                height='40'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_6.jpg`}
                width='162'
                height='47'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_7.jpg`}
                width='63'
                height='63'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_8.jpg`}
                width='67'
                height='57'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_9.jpg`}
                width='159'
                height='25'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_10.jpg`}
                width='150'
                height='48'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_11.jpg`}
                width='60'
                height='60'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_12.jpg`}
                width='50'
                height='55'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_13.jpg`}
                width='119'
                height='40'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_14.jpg`}
                width='119'
                height='40'
              />
            </div>
            <div className='trust_logo wow fadeInDown' data-wow-delay='0.2s'>
              <img
                className='lazy'
                loading='lazy'
                alt='white_cap'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/client_15.jpg`}
                width='112'
                height='40'
              />
            </div>
          </div>
        </div>

        {/* <Clients /> */}
        <div className='media_partner_div'>
          <div className='services_child'>
            <h2 className='center_under_line'>
              Our Developed Applications Have Been Featured In
            </h2>
          </div>
          <div className='media_section_main'>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media1'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/pcmag_logo.svg`}
                width='51'
                height='62'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media2'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/newyorktimes.svg`}
                width='156'
                height='21'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media3'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/mashable_logo.svg`}
                width='146'
                height='26'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media4'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/microsoft_logo.svg`}
                width='50'
                height='50'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media5'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/techcrunch_logo.svg`}
                width='80'
                height='40'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media6'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/the_telegraph_logo.svg`}
                width='136'
                height='23'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media7'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/capterra.svg`}
                width='125'
                height='28'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media8'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/crowd.svg`}
                width='136'
                height='38'
              />{" "}
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media9'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/better_business_bureau.svg`}
                width='44'
                height='80'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media10'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/clutch.svg`}
                width='118'
                height='34'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media11'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/cnet.svg`}
                width='75'
                height='55'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media12'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/entrepreneur.svg`}
                width='140'
                height='28'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media13'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/inc.svg`}
                width='102'
                height='35'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media14'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/forbes.svg`}
                width='109'
                height='42'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media15'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/wikipedia.svg`}
                width='68'
                height='65'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media16'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/yourstory.svg`}
                width='118'
                height='24'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media17'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/apple_store.svg`}
                width='151'
                height='36'
              />
            </div>
            <div className='media_logo'>
              <img
                className='lazy'
                alt='media18'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/google_pay.svg`}
                width='150'
                height='36'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopService;
