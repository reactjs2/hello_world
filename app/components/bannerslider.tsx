import React from "react";

const BannerSlider = () => {
  return (
    <section className='banner_slider_div margin_bottom_50 margin_mobile_top'>
      <div className='container'>
        <div className='main_banner_title'>
          <h1>Top Mobile App Development Company in the USA</h1>
          <h6>
            Turn your awesome idea into a world-class mobile app with top
            software development company in the USA, India & across the globe.
            Expand your business opportunities with our scalable and seamless IT
            services to speed up your growth.
          </h6>
        </div>
        <div className='row'>
          <div className='same_div_new'>
            <div className='col-lg-4 col-md-6'>
              <a href="{{ secure_asset('/services/mobile-app-development')}}">
                <span className='box_wrap wow fadeInDown' data-wow-delay='0.2s'>
                  <span className='icon color_bg_blue'>
                    <img
                      className='lazy'
                      alt='white_cap'
                      // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                      // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'images_svg/hom_mobile_app.svg'; ?>"
                      width='40'
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/hom_mobile_app.svg`}
                      height='40'
                    />
                  </span>
                  <span className='text'>
                    <h2>Mobile App Development</h2>
                    <p>
                      Get quality-driven and scalable mobile app development
                      solutions to unlock new business opportunities.
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className='col-lg-4 col-md-6'>
              <a href="{{ secure_asset('/services/custom-software-development-company')}}">
                <span className='box_wrap wow fadeInDown' data-wow-delay='0.2s'>
                  <span className='icon color_bg_green'>
                    <img
                      className='lazy'
                      loading='lazy'
                      alt='white_cap'
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/hom_custom_software.svg`}
                      width='40'
                      height='40'
                    />
                  </span>
                  <span className='text'>
                    <h2>Custom Software Development</h2>
                    <p>
                      Our team has a proven record of developing custom software
                      solutions for small businesses to large-scale enterprises
                      across the globe.
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className='col-lg-4 col-md-6'>
              <a
                href="{{ secure_asset('/services/web-application-development-company')}}"
                aria-label='web-app'
              >
                <span className='box_wrap wow fadeInDown' data-wow-delay='0.2s'>
                  <span className='icon color_yellow_blue'>
                    <img
                      className='lazy'
                      loading='lazy'
                      alt='white_cap'
                      // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                      // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'images_svg/hom_web_app.svg'; ?>"
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/hom_web_app.svg`}
                      width='40'
                      height='40'
                    />
                  </span>
                  <span className='text'>
                    <h2>Web Application Development</h2>
                    <p>
                      We deliver web app development services including
                      migrating web apps, prototyping, etc. to solve your
                      business challenges.
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className='col-lg-4 col-md-6'>
              <a
                href="{{ secure_asset('/services/blockchain-development')}}"
                aria-label='blockchain-app'
              >
                <span className='box_wrap wow fadeInUp' data-wow-delay='0.2s'>
                  <span className='icon color_bg_red'>
                    <img
                      className='lazy'
                      loading='lazy'
                      alt='white_cap'
                      // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                      // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'images_svg/hom_void_dev.svg'; ?>"
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/hom_void_dev.svg`}
                      width='40'
                      height='40'
                    />
                  </span>
                  <span className='text'>
                    <h2>Blockchain Development</h2>
                    <p>
                      Explore the journey of robust, scalable, and interoperable
                      decentralized solutions with our powerful blockchain
                      development process.
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className='col-lg-4 col-md-6'>
              <a
                href="{{ secure_asset('/hire-dedicated-developer') }}"
                aria-label='hire-dedicated-app'
              >
                <span className='box_wrap wow fadeInUp' data-wow-delay='0.2s'>
                  <span className='icon color_bg_pruple'>
                    <img
                      className='lazy'
                      loading='lazy'
                      alt='white_cap'
                      // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                      // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'images_svg/hom_hire_developer.svg'; ?>"
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/hom_hire_developer.svg`}
                      width='40'
                      height='40'
                    />
                  </span>
                  <span className='text'>
                    <h2>Hire Dedicated Developers</h2>
                    <p>
                      Choose the team of your choice by offering a competitive
                      budget with high-quality consulting services. Get your
                      projects done your way.{" "}
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className='col-lg-4 col-md-6'>
              <a
                href="{{ secure_asset('/services/ai-ml-app-development')}}"
                aria-label='ai-ml-app'
              >
                <span className='box_wrap wow fadeInUp' data-wow-delay='0.2s'>
                  <span className='icon color_yellow_orange'>
                    <img
                      className='lazy'
                      loading='lazy'
                      alt='white_cap'
                      // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                      // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'images_svg/hom_iot_dev.svg'; ?>"
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/hom_iot_dev.svg`}
                      width='40'
                      height='40'
                    />
                  </span>
                  <span className='text'>
                    <h2>Powerful IoT, AI/ML Development</h2>
                    <p>
                      We develop AI-driven & ML solutions. From product
                      conceptualization to IoT development services, we've got
                      you covered.
                    </p>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
