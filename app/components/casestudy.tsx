"use client";
import React, { useState } from "react";

const CaseStudy = () => {
  const [tab, settab] = useState("all_filter");
  return (
    <section className='casestudy_section_div'>
      <div className='container'>
        <h2 className='center_under_line'>Case Studies</h2>
        <p className='desc_txt'>
          Here's a rundown of some of the projects that we have undertaken.
          These case studies will help you understand how we take care of our
          clients and their requirements in detailed manner.{" "}
        </p>

        <div className='casestudy_block_main'>
          <div className='button-group filters-button-group filters'>
            <div className='highlight_filter'>
              <button
                onClick={() => settab("all_filter")}
                className={`button portfolio_filter filter-all ${
                  tab === "all_filter" ? "filtersIndicator" : ""
                }`}
              >
                All
              </button>
              <button
                onClick={() => settab("ios")}
                className={`button portfolio_filter filter-ios' ${
                  tab === "ios" ? "filtersIndicator" : ""
                }`}
              >
                iOS
              </button>
              <button
                onClick={() => settab("android")}
                className={`button portfolio_filter filter-android ${
                  tab === "android" ? "filtersIndicator" : ""
                }`}
              >
                Android
              </button>
              <button
                onClick={() => settab("web")}
                className={`button portfolio_filter filter-web ${
                  tab === "web" ? "filtersIndicator" : ""
                }`}
              >
                Web
              </button>
              <button
                onClick={() => settab("mac")}
                className={`button portfolio_filter filter-mac ${
                  tab === "mac" ? "filtersIndicator" : ""
                }`}
              >
                macOS
              </button>
              <button
                onClick={() => settab("windows")}
                className={`button portfolio_filter filter-windows ${
                  tab === "windows" ? "filtersIndicator" : ""
                }`}
              >
                Windows
              </button>
            </div>
          </div>
          <div className='grid grid_wrap'>
            <div
              className={`element-item ios android web mac windows all_filter ${
                "element-item ios android web mac windows all_filter".includes(
                  tab
                )
                  ? "highlighted_opacity"
                  : ""
              }`}
            >
              <a href="{{ secure_asset('/portfolio/moon-invoice')}}">
                <div className='img_hover_zoom'>
                  <img
                    className='lazy'
                    loading='lazy'
                    alt='moon_invoice'
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/moon_invoice.svg`}
                    width='273'
                    height='205'
                  />
                  <figcaption>
                    <figure>
                      <div>
                        <h4>Moon Invoice</h4>
                        <h5>Business Industry</h5>
                        <span>
                          A top-notch application to make the work of invoicing
                          easy and hassle-free.
                        </span>
                      </div>
                    </figure>
                  </figcaption>
                </div>
                <span className='hide_filter_div'></span>
              </a>
              <h4>Moon Invoice</h4>
              <div className='pro_tag_div'>
                <span>iOS</span>
                <span>Android</span>
                <span>Web</span>
                <span>macOS</span>
                <span>Windows</span>
              </div>
            </div>
            <div
              className={`element-item web all_filter ${
                "element-item web all_filter".includes(tab)
                  ? "highlighted_opacity"
                  : ""
              }`}
            >
              <a href="{{ secure_asset('/portfolio/reliyo')}}">
                <div className='img_hover_zoom'>
                  <img
                    className='lazy'
                    loading='lazy'
                    alt='reliyo'
                    // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                    // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'reliyo.jpeg'; ?>"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/reliyo.svg`}
                    width='273'
                    height='205'
                  />
                  <figcaption>
                    <figure>
                      <div>
                        <h4>Reliyo</h4>
                        <h5>News Industry</h5>
                        <span>
                          A politically and editorial writing platform where
                          everyone can share their views.
                        </span>
                      </div>
                    </figure>
                  </figcaption>
                </div>
                <span className='hide_filter_div'></span>
              </a>
              <h4>Reliyo</h4>
              <div className='pro_tag_div'>
                <span>Web</span>
              </div>
            </div>
            <div
              className={`element-item ios android all_filter ${
                "element-item ios android all_filter".includes(tab)
                  ? "highlighted_opacity"
                  : ""
              }`}
            >
              <a href="{{ secure_asset('/portfolio/challengers2020')}}">
                <div className='img_hover_zoom'>
                  <img
                    className='lazy'
                    loading='lazy'
                    alt='chanllangers'
                    // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                    // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'chanllangers.jpeg'; ?>"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/chanllangers.svg`}
                    width='273'
                    height='205'
                  />
                  <figcaption>
                    <figure>
                      <div>
                        <h4>Challengers2020</h4>
                        <h5>Sports Industry</h5>
                        <span>
                          A sports platform that gives football players a pitch
                          to showcase their skills.
                        </span>
                      </div>
                    </figure>
                  </figcaption>
                </div>
                <span className='hide_filter_div'></span>
              </a>
              <h4>Challengers2020</h4>
              <div className='pro_tag_div'>
                <span>iOS</span>
                <span>Android</span>
              </div>
            </div>
            <div
              className={`element-item ios android mac all_filter ${
                "element-item ios android mac all_filter".includes(tab)
                  ? "highlighted_opacity"
                  : ""
              }`}
            >
              <a href="{{ secure_asset('/portfolio/moon-dialer')}}">
                <div className='img_hover_zoom'>
                  <img
                    className='lazy'
                    loading='lazy'
                    alt='moon_diler'
                    // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                    // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'images_svg/moon_diler.jpg'; ?>"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/moon_diler.svg`}
                    width='273'
                    height='205'
                  />
                  <figcaption>
                    <figure>
                      <div>
                        <h4>Moon Dialer</h4>
                        <h5>Business Industry</h5>
                        <span>
                          VOIP calling worldwide, Built-In within app calling or
                          Skype or FaceTime and many more
                        </span>
                      </div>
                    </figure>
                  </figcaption>
                </div>
                <span className='hide_filter_div'></span>
              </a>
              <h4>Moon Dialer</h4>
              <div className='pro_tag_div'>
                <span>iOS</span>
                <span>Android</span>
                <span>macOS</span>
              </div>
            </div>
            <div
              className={`element-item ios android all_filter ${
                "element-item ios android all_filter".includes(tab)
                  ? "highlighted_opacity"
                  : ""
              }`}
            >
              <a href="{{ secure_asset('/portfolio/zero-eyes')}}">
                <div className='img_hover_zoom'>
                  <img
                    className='lazy'
                    loading='lazy'
                    alt='zero_eyes'
                    // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                    // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'zero_eyes.jpeg'; ?>"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/zero_eyes.svg`}
                    width='273'
                    height='205'
                  />
                  <figcaption>
                    <figure>
                      <div>
                        <h4>Zero Eyes</h4>
                        <h5>Security Business Industry</h5>
                        <span>
                          Use AI to save precious seconds, predict, prevent and
                          protect.
                        </span>
                      </div>
                    </figure>
                  </figcaption>
                </div>
                <span className='hide_filter_div'></span>
              </a>
              <h4>Zero Eyes</h4>
              <div className='pro_tag_div'>
                <span>iOS</span>
                <span>Android</span>
              </div>
            </div>
            <div
              className={`element-item ios android all_filter ${
                "element-item ios android all_filter".includes(tab)
                  ? "highlighted_opacity"
                  : ""
              }`}
            >
              <a href="{{ secure_asset('/portfolio/prixpo')}}">
                <div className='img_hover_zoom'>
                  <img
                    className='lazy'
                    alt='prixpo'
                    // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                    // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'prixpo.jpeg'; ?>"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/prixpo.svg`}
                    width='273'
                    height='205'
                  />
                  <figcaption>
                    <figure>
                      <div>
                        <h4>Prixpo</h4>
                        <h5>Travel & Tourism Industry</h5>
                        <span>
                          Explore and wander into new places, the way it should
                          be.
                        </span>
                      </div>
                    </figure>
                  </figcaption>
                </div>
                <span className='hide_filter_div'></span>
              </a>
              <h4>Prixpo</h4>
              <div className='pro_tag_div'>
                <span>iOS</span>
                <span>Android</span>
              </div>
            </div>
            <div
              className={`element-item ios android all_filter ${
                "element-item ios android all_filter".includes(tab)
                  ? "highlighted_opacity"
                  : ""
              }`}
            >
              <a href="{{ secure_asset('/portfolio/ara')}}">
                <div className='img_hover_zoom'>
                  <img
                    className='lazy'
                    loading='lazy'
                    alt='ara'
                    // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                    // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'ara.jpeg'; ?>"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/ara.svg`}
                    width='273'
                    height='205'
                  />
                  <figcaption>
                    <figure>
                      <div>
                        <h4>Ara</h4>
                        <h5>Water Industry</h5>
                        <span>
                          Quench your thirst with ordering bottled water to your
                          home in seconds.{" "}
                        </span>
                      </div>
                    </figure>
                  </figcaption>
                </div>
                <span className='hide_filter_div'></span>
              </a>
              <h4>Ara</h4>
              <div className='pro_tag_div'>
                <span>iOS</span>
                <span>Android</span>
              </div>
            </div>
            <div
              className={`element-item ios android all_filter ${
                "element-item ios android all_filter".includes(tab)
                  ? "highlighted_opacity"
                  : ""
              }`}
            >
              <a href="{{ secure_asset('/portfolio/indigo')}}">
                <div className='img_hover_zoom'>
                  <img
                    className='lazy'
                    loading='lazy'
                    alt='indigo'
                    // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                    // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'indigo.jpeg'; ?>"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/indigo.svg`}
                    width='273'
                    height='205'
                  />
                  <figcaption>
                    <figure>
                      <div>
                        <h4>Indigo</h4>
                        <h5>Health Care Industry</h5>
                        <span>
                          Say goodbye to your dermatological problems with
                          Indigo, a perfect wellness spa.
                        </span>
                      </div>
                    </figure>
                  </figcaption>
                </div>
                <span className='hide_filter_div'></span>
              </a>
              <h4>Indigo</h4>
              <div className='pro_tag_div'>
                <span>iOS</span>
                <span>Android</span>
              </div>
            </div>
          </div>
        </div>
        <div className='theme_btn_div'>
          <a
            href="{{ secure_asset('/portfolios')}}"
            // onClick="button_event_tracking('Home', 'View More', 'Home-CaseViewMore');"
            className='theme_btn'
          >
            View More{" "}
            <img
              className='lazy'
              loading='lazy'
              alt='arrow'
              // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
              // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'arrow.svg'; ?>"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
              width='18'
              height='12'
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
