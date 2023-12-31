import React from "react";
import getConfig from "next/config";
import Link from "next/link";
import Image from "next/image";
import HeaderForm from "../clientform/headerform";
import "../../css/header.css";
const Header = ({ children }: any) => {
  const { publicRuntimeConfig } = getConfig();
  return (
    <>
      <HeaderForm />
      <div className='lds-roller_parent' style={{ display: "none" }}>
        <div className='lds-roller'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <header className='main_header header'>
        <div className='container'>
          <div className='text-center'>
            <ul className='header_top'>
              <li className='remove_space'>
                <a href='tel:+1(620)330-9814'>
                  <svg
                    className='class_desktop_hide'
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
                      fill='#2583e9'
                      d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'
                      className=''
                    ></path>
                  </svg>
                  <Image
                    width={18}
                    height={12}
                    className='lazy mobile_hide_banner us_show_banner'
                    src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MAIN}/usa-flag.svg`}
                    alt='usa_flag'
                  />
                  <span className='mobile_hide'>+1 (620) 330-9814</span>
                </a>
              </li>
              <li className='mobile_hide_banner remove_space'>
                <a href='tel:+91-79-40055109'>
                  <svg
                    className='class_desktop_hide'
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
                      fill='#2583e9'
                      d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'
                      className=''
                    ></path>
                  </svg>
                  <Image
                    width={18}
                    height={12}
                    className='lazy mobile_hide_banner'
                    src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MAIN}/ind_flag.svg`}
                    alt='india_flag'
                  />
                  <span className='mobile_hide'>+91-79-40055109</span>
                </a>
              </li>
              <li>
                <a
                  href='mailto:sales@moontechnolabs.com'
                  className='mail'
                  aria-label='mail'
                >
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='envelope'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    width='1.1em'
                    height='1.1em'
                  >
                    <path
                      fill='#ff7a2f'
                      d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
                      className=''
                    ></path>
                  </svg>
                  <span className='mobile_hide'>sales@moontechnolabs.com</span>
                </a>
              </li>
              <li>
                <a
                  href='https://join.skype.com/invite/b3tUaT5cMXZG'
                  className='skype'
                  aria-label='skype'
                >
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='skype'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    width='1.1em'
                    height='1.1em'
                  >
                    <path
                      fill='#00aff0'
                      d='M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z'
                      className=''
                    ></path>
                  </svg>
                  <span className='mobile_hide'>Moon Technolabs</span>
                </a>
              </li>
              <li>
                <a
                  href='#modal_calandry'
                  data-toggle='modal'
                  data-target='#modal_calandry'
                  id='calendly_btn'
                  aria-label='calendly'
                >
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='far'
                    data-icon='calendar-alt'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    width='1.1em'
                    height='1.1em'
                  >
                    <path
                      fill='#f35341'
                      d='M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z'
                      className=''
                    ></path>
                  </svg>
                  <span className='mobile_hide'>Schedule Meeting</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='top_header_div'>
          <div className='container'>
            <div className='top_headerpart'>
              <div className='main_logo'>
                <Link href='/'>
                  <Image
                    width={100}
                    height={100}
                    className='showindia lazy'
                    src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MAIN}/moon_new_logo.svg`}
                    alt='main_logo'
                  />
                  <p className='sticky'></p>
                </Link>
              </div>
              <div className='navbar_toggle_wrap'>
                <button
                  type='button'
                  className='navbar-toggle x collapsed'
                  data-toggle='collapse'
                  aria-label='navbar'
                  data-target='.navbar-collapse'
                >
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fal'
                    data-icon='bars'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                    width='1.6em'
                    height='1.6em'
                  >
                    <path
                      fill='currentColor'
                      d='M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z'
                      className=''
                    ></path>
                  </svg>
                </button>
              </div>
              <div className='menu_bar navbar-collapse collapse'>
                <nav className='navbar'>
                  <ul className='nav navbar-nav main_menu' data-id='accodian'>
                    <li className='megamenu'>
                      <a href='#' className='arrow-toggle' data-id='aboutus'>
                        <span>
                          About Us
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fal'
                            data-icon='angle-down'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 256 512'
                            width='16px'
                            height='16px'
                          >
                            <path
                              fill='currentColor'
                              d='M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z'
                              className=''
                            ></path>
                          </svg>
                        </span>
                      </a>
                      <ul className='submenu mobile_toggle small_width aboutus'>
                        <li>
                          <a
                            href="{{ secure_asset('/corporate-events') }}"
                            className="{{ request()->is('corporate-events') ? 'mega_menu_active' : ''  }}"
                          >
                            Corporate Events
                          </a>
                        </li>
                        <li>
                          <a
                            href="{{ secure_asset('/message-from-ceo') }}"
                            className="{{ request()->is('message-from-ceo') ? 'mega_menu_active' : ''  }}"
                          >
                            Message from CEO
                          </a>
                        </li>
                        <li>
                          <a
                            href="{{ secure_asset('/life-at-mtpl') }}"
                            className="{{ request()->is('life-at-mtpl') ? 'mega_menu_active' : ''  }}"
                          >
                            Life @ MTPL
                          </a>
                        </li>
                        <li>
                          <a
                            href="{{ secure_asset('/awards-certificates') }}"
                            className="{{ request()->is('awards-certificates') ? 'mega_menu_active' : ''  }}"
                          >
                            Awards & Certificates
                          </a>
                        </li>
                        <li>
                          <a
                            href="{{ secure_asset('/business-model') }}"
                            className="{{ request()->is('business-model') ? 'mega_menu_active' : ''  }}"
                          >
                            Digital Business Model
                          </a>
                        </li>
                        <li>
                          <a
                            href="{{ secure_asset('/testimonials') }}"
                            className="{{ request()->is('testimonials') ? 'mega_menu_active' : ''  }}"
                          >
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <a
                            href="{{ secure_asset('/partnership-with-us') }}"
                            className="{{ request()->is('partnership-with-us') ? 'mega_menu_active' : ''  }}"
                          >
                            Joint Partner Program
                          </a>
                        </li>
                        <li>
                          <a
                            href="{{ secure_asset('/career-with-us') }}"
                            className="{{ request()->is('career-with-us') ? 'mega_menu_active' : ''  }}"
                          >
                            Careers
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='megamenu'>
                      <a href='#' className='arrow-toggle' data-id='services'>
                        <span>
                          Services
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fal'
                            data-icon='angle-down'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 256 512'
                            width='16px'
                            height='16px'
                          >
                            <path
                              fill='currentColor'
                              d='M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z'
                              className=''
                            ></path>
                          </svg>
                        </span>
                      </a>
                      <ul className='submenu mobile_toggle full_width services inner-nav'>
                        <li className='desktop_hide'>
                          <a href='#;' className='arrow-toggle-inner'>
                            <span>
                              App Development
                              <svg
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fal'
                                data-icon='angle-down'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 256 512'
                                width='16px'
                                height='16px'
                              >
                                <path
                                  fill='currentColor'
                                  d='M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z'
                                  className=''
                                ></path>
                              </svg>
                            </span>
                          </a>
                          <ul className='nav inner-nav mobile_toggle-inner w-50 w-3'>
                            <li>
                              <a
                                href="{{ secure_asset('/services/ios-app-development') }}"
                                className="{{ request()->is('services/ios-app-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ios_app.svg`}
                                      alt='ios_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ios_app_hover.svg`}
                                      alt='ios_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    iOS Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/android-app-development-company') }}"
                                className="{{ request()->is('services/android-app-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/and_app.svg`}
                                      alt='and_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/and_app_hover.svg`}
                                      alt='and_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Android Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/react-native-app-development-company') }}"
                                className="{{ request()->is('services/react-native-app-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/react_app.svg`}
                                      alt='react_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/react_app_hover.svg`}
                                      alt='react_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    React Native App Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/flutter-app-development-company') }}"
                                className="{{ request()->is('services/flutter-app-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/flu_app.svg`}
                                      alt='flu_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/flu_app_hover.svg`}
                                      alt='flu_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Flutter App Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/windows-app-development-company') }}"
                                className="{{ request()->is('services/windows-app-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/win_app.svg`}
                                      alt='win_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/win_app_hover.svg`}
                                      alt='win_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Windows App Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/wearable-devices-app-development') }}"
                                className="{{ request()->is('services/wearable-devices-app-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/wea_app.svg`}
                                      alt='wea_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/wea_app_hover.svg`}
                                      alt='wea_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Wearable App Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/SaaS-application-development') }}"
                                className="{{ request()->is('services/SaaS-application-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/saas_app.svg`}
                                      alt='saas_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/saas_app_hover.svg`}
                                      alt='saas_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    SaaS Application Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/custom-software-development-company') }}"
                                className="{{ request()->is('services/custom-software-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/cus_app.svg`}
                                      alt='cus_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/cus_app_hover.svg`}
                                      alt='cus_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Custom Software Development
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='desktop_hide'>
                          <a href='#;' className='arrow-toggle-inner'>
                            <span>
                              Web Development
                              <svg
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fal'
                                data-icon='angle-down'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 256 512'
                                width='16px'
                                height='16px'
                              >
                                <path
                                  fill='currentColor'
                                  d='M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z'
                                  className=''
                                ></path>
                              </svg>
                            </span>
                          </a>
                          <ul className='nav inner-nav mobile_toggle-inner w-50 w-3'>
                            <li>
                              <a
                                href="{{ secure_asset('/services/node-js-development-company') }}"
                                className="{{ request()->is('services/node-js-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/nodejs_app.svg`}
                                      alt='nodejs_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/nodejs_app_hover.svg`}
                                      alt='nodejs_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    NodeJS Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/angularJS-development-company') }}"
                                className="{{ request()->is('services/angularJS-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/angular_app.svg`}
                                      alt='angular_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/angular_app_hover.svg`}
                                      alt='angular_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Angular Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/reactjs-development-company') }}"
                                className="{{ request()->is('services/reactjs-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/rt_app.svg`}
                                      alt='rt_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/rt_app_hover.svg`}
                                      alt='rt_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    ReactJS Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/php-development-company') }}"
                                className="{{ request()->is('services/php-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/php_app.svg`}
                                      alt='php_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/php_app_hover.svg`}
                                      alt='php_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    PHP Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/laravel-development-company') }}"
                                className="{{ request()->is('services/laravel-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/laravel_app.svg`}
                                      alt='laravel_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/laravel_app_hover.svg`}
                                      alt='laravel_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Laravel Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/python-development-company') }}"
                                className="{{ request()->is('services/python-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/py_app.svg`}
                                      alt='py_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/py_app_hover.svg`}
                                      alt='py_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Python Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/codeigniter-app-development') }}"
                                className="{{ request()->is('services/codeigniter-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ci_app.svg`}
                                      alt='ci_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ci_app_hover.svg`}
                                      alt='ci_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    CodeIgniter Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/eCommerce-website-development-company') }}"
                                className="{{ request()->is('services/eCommerce-website-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ecom_app.svg`}
                                      alt='ecom_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ecom_app_hover.svg`}
                                      alt='ecom_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    eCommerce Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/wordpress-development-company') }}"
                                className="{{ request()->is('services/wordpress-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/wp_app.svg`}
                                      alt='wp_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/wp_app_hover.svg`}
                                      alt='wp_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    WordPress Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/progressive-web-app-development') }}"
                                className="{{ request()->is('services/progressive-web-app-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/pwa_app.svg`}
                                      alt='pwa_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/pwa_app_hover.svg`}
                                      alt='pwa_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Progressive Web App development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/asp-net-web-development') }}"
                                className="{{ request()->is('services/asp-net-web-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/asp.net_app.svg`}
                                      alt='ecom_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/aspnet_hover.svg`}
                                      alt='ecom_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    ASP.NET development
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='desktop_hide'>
                          <a href='#;' className='arrow-toggle-inner'>
                            <span>
                              Digital Transformation
                              <svg
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fal'
                                data-icon='angle-down'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 256 512'
                                width='16px'
                                height='16px'
                              >
                                <path
                                  fill='currentColor'
                                  d='M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z'
                                  className=''
                                ></path>
                              </svg>
                            </span>
                          </a>
                          <ul className='nav inner-nav mobile_toggle-inner w-50 w-3'>
                            <li>
                              <a
                                href="{{ secure_asset('/services/iot-development-company') }}"
                                className="{{ request()->is('services/iot-development-company') ? 'mega_menu_active' : ''  }}"
                                rel='other-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_iot.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_iot_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    IoT App Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/blockchain-development-services') }}"
                                className="{{ request()->is('blockchain-development-services') ? 'mega_menu_active' : ''  }}"
                                rel='other-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_blockchain.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_blockchain_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Blockchain Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/webrtc-development-company') }}"
                                className="{{ request()->is('services/webrtc-development-company') ? 'mega_menu_active' : ''  }}"
                                rel='other-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_webrtc.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_webrtc_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    WebRTC Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/asterisk-development-company') }}"
                                className="{{ request()->is('services/asterisk-development-company') ? 'mega_menu_active' : ''  }}"
                                rel='other-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_asterisk.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_asterisk_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Asterisk Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/cloud-app-development') }}"
                                className="{{ request()->is('services/cloud-app-development') ? 'mega_menu_active' : ''  }}"
                                rel='other-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_cloud.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_cloud_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Cloud App Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/metaverse-development') }}"
                                className="{{ request()->is('services/metaverse-development') ? 'mega_menu_active' : ''  }}"
                                rel='other-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_meta.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_meta_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Metaverse Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/ar-vr-development-company') }}"
                                className="{{ request()->is('services/ar-vr-development-company') ? 'mega_menu_active' : ''  }}"
                                rel='other-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_arvr.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_arvr_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    AR/VR Development
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/ai-ml-app-development') }}"
                                className="{{ request()->is('services/ai-ml-app-development') ? 'mega_menu_active' : ''  }}"
                                rel='other-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_ai-ml.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_ai-ml_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    AI/ML Development
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='desktop_hide'>
                          <a href='#;' className='arrow-toggle-inner'>
                            <span>
                              Other Services
                              <svg
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fal'
                                data-icon='angle-down'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 256 512'
                                width='16px'
                                height='16px'
                              >
                                <path
                                  fill='currentColor'
                                  d='M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z'
                                  className=''
                                ></path>
                              </svg>
                            </span>
                          </a>
                          <ul className='nav inner-nav mobile_toggle-inner w-50 w-3'>
                            <li>
                              <a
                                href="{{ secure_asset('/ui-ux-design-services') }}"
                                className="{{ request()->is('ui-ux-design-services') ? 'mega_menu_active' : ''  }}"
                                rel='digital-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_uiux.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_uiux_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>UI/UX Design</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/search-engine-optimization-services') }}"
                                className="{{ request()->is('services/search-engine-optimization-services') ? 'mega_menu_active' : '' }}"
                                rel='digital-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_seo.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_seo_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Search Engine Optimization (SEO)
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/social-media-optimization-services') }}"
                                className="{{ request()->is('services/social-media-optimization-services') ? 'mega_menu_active' : ''  }}"
                                rel='digital-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_smo.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_smo_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Social Media Optimization (SMO)
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/pay-per-click-management-services') }}"
                                className="{{ request()->is('services/pay-per-click-management-services') ? 'mega_menu_active' : ''  }}"
                                rel='digital-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_ppc.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_ppc_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Pay Per Click (PPC)
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/aso-app-store-optimization-services') }}"
                                className="{{ request()->is('aso-app-store-optimization-services') ? 'mega_menu_active' : ''  }}"
                                rel='digital-developmenmt'
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_apo.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_apo_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    App Store Optimization (ASO)
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <ul
                            className='nav centered nav-tabs hide_mobile link_hover'
                            role='tablist'
                          >
                            <li role='presentation' className='active'>
                              <a
                                href="{{ secure_asset('/services/mobile-app-development') }}"
                                className='tab-a'
                                data-id='tab-a'
                              >
                                App Development
                              </a>
                            </li>
                            <li role='presentation'>
                              <a
                                href="{{ secure_asset('/services/web-application-development-company') }}"
                                className='tab-b'
                                data-id='tab-b'
                              >
                                Web Development
                              </a>
                            </li>
                            <li role='presentation'>
                              <a href='#;' className='tab-d' data-id='tab-d'>
                                Digital Transformation
                              </a>
                            </li>
                            <li role='presentation'>
                              <a href='#;' className='tab-c' data-id='tab-c'>
                                Other Services
                              </a>
                            </li>
                          </ul>
                          <div className='tab-content hide_mobile link_hover_div'>
                            <div
                              role='tabpanel'
                              className='tab-pane fade in active'
                              id='tab-a'
                            >
                              <ul className='nav w-50 w-3'>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/ios-app-development') }}"
                                    className="{{ request()->is('services/ios-app-development') ? 'mega_menu_active' : ''  }}"
                                    rel='app-development'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ios_app.svg`}
                                          alt='ios_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ios_app_hover.svg`}
                                          alt='ios_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        iOS Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/android-app-development-company') }}"
                                    className="{{ request()->is('services/android-app-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='app-development'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/and_app.svg`}
                                          alt='and_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/and_app_hover.svg`}
                                          alt='and_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Android Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/react-native-app-development-company') }}"
                                    className="{{ request()->is('services/react-native-app-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='app-development'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/react_app.svg`}
                                          alt='react_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/react_app_hover.svg`}
                                          alt='react_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        React Native App Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/flutter-app-development-company') }}"
                                    className="{{ request()->is('services/flutter-app-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='app-development'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/flu_app.svg`}
                                          alt='flu_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/flu_app_hover.svg`}
                                          alt='flu_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Flutter App Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/windows-app-development-company') }}"
                                    className="{{ request()->is('services/windows-app-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='app-development'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/win_app.svg`}
                                          alt='win_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/win_app_hover.svg`}
                                          alt='win_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Windows App Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/wearable-devices-app-development') }}"
                                    className="{{ request()->is('services/wearable-devices-app-development') ? 'mega_menu_active' : ''  }}"
                                    rel='app-development'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/wea_app.svg`}
                                          alt='wea_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/wea_app_hover.svg`}
                                          alt='wea_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Wearable App Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/SaaS-application-development') }}"
                                    className="{{ request()->is('services/SaaS-application-development') ? 'mega_menu_active' : ''  }}"
                                    rel='app-development'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/saas_app.svg`}
                                          alt='saas_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/saas_app_hover.svg`}
                                          alt='saas_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        SaaS Application Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/custom-software-development-company') }}"
                                    className="{{ request()->is('services/custom-software-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='app-development'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/cus_app.svg`}
                                          alt='cus_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/cus_app_hover.svg`}
                                          alt='cus_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Custom Software Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              role='tabpanel'
                              className='tab-pane fade'
                              id='tab-b'
                            >
                              <ul className='nav w-50 w-3'>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/node-js-development-company') }}"
                                    className="{{ request()->is('services/node-js-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='web-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/nodejs_app.svg`}
                                          alt='nodejs_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/nodejs_app_hover.svg`}
                                          alt='nodejs_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        NodeJS Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/angularJS-development-company') }}"
                                    className="{{ request()->is('services/angularJS-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='web-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/angular_app.svg`}
                                          alt='angular_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/angular_app_hover.svg`}
                                          alt='angular_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Angular Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/reactjs-development-company') }}"
                                    className="{{ request()->is('services/reactjs-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='web-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/rt_app.svg`}
                                          alt='rt_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/rt_app_hover.svg`}
                                          alt='rt_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        ReactJS Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/php-development-company') }}"
                                    className="{{ request()->is('services/php-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='web-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/php_app.svg`}
                                          alt='php_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/php_app_hover.svg`}
                                          alt='php_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        PHP Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('services/laravel-development-company') }}"
                                    className="{{ request()->is('services/laravel-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='web-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/laravel_app.svg`}
                                          alt='laravel_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/laravel_app_hover.svg`}
                                          alt='laravel_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Laravel Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href=" {{ secure_asset('/services/python-development-company') }}"
                                    className="{{ request()->is('services/python-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='web-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/py_app.svg`}
                                          alt='py_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/py_app_hover.svg`}
                                          alt='py_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Python Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/codeigniter-development-company') }}"
                                    className="{{ request()->is('services/codeigniter-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='web-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ci_app.svg`}
                                          alt='ci_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ci_app_hover.svg`}
                                          alt='ci_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        CodeIgniter Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/eCommerce-website-development-company') }}"
                                    className="{{ request()->is('services/eCommerce-website-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='web-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ecom_app.svg`}
                                          alt='ecom_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ecom_app_hover.svg`}
                                          alt='ecom_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        eCommerce Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/wordpress-development-company') }}"
                                    className="{{ request()->is('services/wordpress-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='web-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/wp_app.svg`}
                                          alt='wp_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/wp_app_hover.svg`}
                                          alt='wp_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        WordPress Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/progressive-web-app-development') }}"
                                    className="{{ request()->is('services/progressive-web-app-development') ? 'mega_menu_active' : ''  }}"
                                    rel='web-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/pwa_app.svg`}
                                          alt='pwa_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/pwa_app_hover.svg`}
                                          alt='pwa_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Progressive Web App development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/asp-net-web-development') }}"
                                    className="{{ request()->is('services/asp-net-web-development') ? 'mega_menu_active' : ''  }}"
                                    rel='web-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/asp.net_app.svg`}
                                          alt='ecom_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/aspnet_hover.svg`}
                                          alt='ecom_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        ASP.NET development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              role='tabpanel'
                              className='tab-pane fade'
                              id='tab-c'
                            >
                              <ul className='nav w-50 w-3'>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/ui-ux-design') }}"
                                    className="{{ request()->is('services/ui-ux-design') ? 'mega_menu_active' : ''  }}"
                                    rel='digital-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_uiux.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_uiux_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        UI/UX Design
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/search-engine-optimization-services') }}"
                                    className="{{ request()->is('services/search-engine-optimization-services') ? 'mega_menu_active' : ''  }}"
                                    rel='digital-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_seo.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_seo_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Search Engine Optimization (SEO)
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/social-media-optimization-services') }}"
                                    className="{{ request()->is('services/social-media-optimization-services') ? 'mega_menu_active' : ''  }}"
                                    rel='digital-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_smo.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_smo_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Social Media Optimization (SMO)
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/pay-per-click-management-services') }}"
                                    className="{{ request()->is('services/pay-per-click-management-services') ? 'mega_menu_active' : ''  }}"
                                    rel='digital-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_ppc.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_ppc_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Pay Per Click (PPC)
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/aso-app-store-optimization-services') }}"
                                    className="{{ request()->is('aso-app-store-optimization-services') ? 'mega_menu_active' : ''  }}"
                                    rel='digital-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_apo.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_apo_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        App Store Optimization (ASO)
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              role='tabpanel'
                              className='tab-pane fade'
                              id='tab-d'
                            >
                              <ul className='nav w-50 w-3'>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/iot-development-company') }}"
                                    className="{{ request()->is('services/iot-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='other-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_iot.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_iot_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        IoT App Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/blockchain-development') }}"
                                    className="{{ request()->is('services/blockchain-development') ? 'mega_menu_active' : ''  }}"
                                    rel='other-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_blockchain.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_blockchain_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Blockchain Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/webrtc-development-company') }}"
                                    className="{{ request()->is('services/webrtc-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='other-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_blockchain.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_webrtc_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        WebRTC Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/asterisk-development-company') }}"
                                    className="{{ request()->is('services/asterisk-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='other-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_asterisk.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_asterisk_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Asterisk Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/cloud-app-development') }}"
                                    className="{{ request()->is('services/cloud-app-development') ? 'mega_menu_active' : ''  }}"
                                    rel='other-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_cloud.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_cloud_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Cloud App Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/metaverse-development') }}"
                                    className="{{ request()->is('services/metaverse-development') ? 'mega_menu_active' : ''  }}"
                                    rel='other-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_meta.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_meta_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        Metaverse Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/ar-vr-development-company') }}"
                                    className="{{ request()->is('services/ar-vr-development-company') ? 'mega_menu_active' : ''  }}"
                                    rel='other-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_arvr.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_arvr_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        AR/VR Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="{{ secure_asset('/services/ai-ml-app-development') }}"
                                    className="{{ request()->is('services/ai-ml-app-development') ? 'mega_menu_active' : ''  }}"
                                    rel='other-developmenmt'
                                  >
                                    <div className='link-media'>
                                      <div className='icon-46'>
                                        <Image
                                          width={100}
                                          height={100}
                                          className='normal lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_ai-ml.svg`}
                                          alt='web_app'
                                        />
                                        <Image
                                          width={100}
                                          height={100}
                                          className='hover lazy'
                                          src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_ai-ml_hover.svg`}
                                          alt='web_app'
                                        />
                                      </div>
                                      <div className='media-body'>
                                        AI/ML Development
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className='megamenu'>
                      <a href='#' className='arrow-toggle' data-id='solutions'>
                        <span>
                          Solutions
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fal'
                            data-icon='angle-down'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 256 512'
                            width='16px'
                            height='16px'
                          >
                            <path
                              fill='currentColor'
                              d='M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z'
                              className=''
                            ></path>
                          </svg>
                        </span>
                      </a>
                      <ul className='submenu mobile_toggle full_width solutions'>
                        <li>
                          <ul className='nav w-50 w-3'>
                            <li>
                              <a
                                href="{{ secure_asset('/solution/healthcare-app-development') }}"
                                className="{{ request()->is('solution/healthcare-app-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_healthcare.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_healthcare_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Healthcare App
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/grocery-delivery-app-development-company') }}"
                                className="{{ request()->is('services/grocery-delivery-app-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_grocery.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_grocery_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>Grocery App</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/food-delivery-app-development-company') }}"
                                className="{{ request()->is('services/food-delivery-app-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_food.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_food_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Food Delivery App
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/ecommerce-mobile-app-development-company') }}"
                                className="{{ request()->is('services/ecommerce-mobile-app-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_ecommerce.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_ecommerce_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    eCommerce Mobile App
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/restaurant-app-development-company') }}"
                                className="{{ request()->is('services/restaurant-app-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_hotal.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_hotal_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Hotel & Restaurant App
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/educational-app-development') }}"
                                className="{{ request()->is('services/educational-app-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_elearn.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_elearn_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Online eLearning
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/salon-booking-app-development') }}"
                                className="{{ request()->is('services/salon-booking-app-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_beauty.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_beauty_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Beauty Care and Salon Booking App
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/taxi-booking-app-development-company') }}"
                                className="{{ request()->is('services/taxi-booking-app-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_taxi.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_taxi_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Taxi Booking App
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/fitness-app-development-company') }}"
                                className="{{ request()->is('services/fitness-app-development-company') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_fitness.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_fitness_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Fitness and Wellness App
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/sports-app-development') }}"
                                className="{{ request()->is('services/sports-app-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_sports.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_sports_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Sports Mobile App
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/travel-app-development') }}"
                                className="{{ request()->is('services/travel-app-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_travel.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_travel_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Travel & Tourism Mobile App
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/dating-app-development') }}"
                                className="{{ request()->is('services/dating-app-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_dating.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_dating_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>Dating App</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/cryptocurrency-wallet-app-development') }}"
                                className="{{ request()->is('services/cryptocurrency-wallet-app-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_crypto.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_crypto_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Crypto Wallet App
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/celebrity-look-alike-app') }}"
                                className="{{ request()->is('celebrity-look-alike-app') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_celebrity.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_celebrity_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Celebrity Look Alike App
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/services/flower-delivery-app-development') }}"
                                className="{{ request()->is('services/flower-delivery-app-development') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_flower.svg`}
                                      alt='web_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy/'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/menu_flower_hover.svg`}
                                      alt='web_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Flower Delivery App
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className='megamenu'>
                      <a href='#' className='arrow-toggle' data-id='hire'>
                        <span>
                          Hire Dedicated
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fal'
                            data-icon='angle-down'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 256 512'
                            width='16px'
                            height='16px'
                          >
                            <path
                              fill='currentColor'
                              d='M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z'
                              className=''
                            ></path>
                          </svg>
                        </span>
                      </a>
                      <ul className='submenu mobile_toggle full_width hire'>
                        <li>
                          <ul className='nav w-50 w-3'>
                            <li>
                              <a
                                href="{{ secure_asset('/hire-dedicated-developer/ios') }}"
                                className="{{ request()->is('hire-dedicated-developer/ios') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ios_app.svg`}
                                      alt='ios_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/ios_app_hover.svg`}
                                      alt='ios_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Hire iOS Developer
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/hire-dedicated-developer/android') }}"
                                className="{{ request()->is('hire-dedicated-developer/android') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/and_app.svg`}
                                      alt='and_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/and_app_hover.svg`}
                                      alt='and_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Hire Android Developer
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/hire-dedicated-developer/flutter') }}"
                                className="{{ request()->is('hire-dedicated-developer/flutter') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/flu_app.svg`}
                                      alt='flu_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/flu_app_hover.svg`}
                                      alt='flu_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Hire Flutter Developer
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/hire-dedicated-developer/full-stack') }}"
                                className="{{ request()->is('hire-dedicated-developer/full-stack') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/fs_app.svg`}
                                      alt='fs_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/fs_app_hover.svg`}
                                      alt='fs_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Hire Full Stack Developer
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/hire-dedicated-developer/angularjs') }}"
                                className="{{ request()->is('hire-dedicated-developer/angularjs') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/angular_app.svg`}
                                      alt='angular_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/angular_app_hover.svg`}
                                      alt='angular_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Hire Angular Developer
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/hire-dedicated-developer/reactjs') }}"
                                className="{{ request()->is('hire-dedicated-developer/reactjs') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/rt_app.svg`}
                                      alt='rt_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/rt_app_hover.svg`}
                                      alt='rt_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Hire ReactJS Developer
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/hire-dedicated-developer/nodejs') }}"
                                className="{{ request()->is('hire-dedicated-developer/nodejs') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/nodejs_app.svg`}
                                      alt='nodejs_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/nodejs_app_hover.svg`}
                                      alt='nodejs_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Hire NodeJS Developer
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="{{ secure_asset('/hire-dedicated-developer/python') }}"
                                className="{{ request()->is('hire-dedicated-developer/python') ? 'mega_menu_active' : ''  }}"
                              >
                                <div className='link-media'>
                                  <div className='icon-46'>
                                    <Image
                                      width={100}
                                      height={100}
                                      className='normal lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/py_app.svg`}
                                      alt='py_app'
                                    />
                                    <Image
                                      width={100}
                                      height={100}
                                      className='hover lazy'
                                      src={`${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_URL}/${publicRuntimeConfig.NEXT_PUBLIC_IMAGE_MEGA}/py_app_hover.svg`}
                                      alt='py_app'
                                    />
                                  </div>
                                  <div className='media-body'>
                                    Hire Python Developer
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="{{ secure_asset('/portfolios') }}">Portfolio</a>
                    </li>
                    <li>
                      <a href='https://www.moontechnolabs.com/blog/'>Blogs</a>
                    </li>
                    <li>
                      <Link href='/contactus'>Contact Us</Link>
                    </li>
                    <li className='contact_link'>
                      <a
                        id='popup_btn_id'
                        data-target='#get_a_free_quote'
                        data-toggle='modal'
                      >
                        Get A Free Quote
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export default Header;
