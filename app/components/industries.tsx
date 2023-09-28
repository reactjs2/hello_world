import React from "react";

const Industries = () => {
  return (
    <section className='industries_section_div'>
      <div className='container'>
        <h2 className='center_under_line'>Industries We Serve</h2>
        <p className='desc_txt'>
          Industries, well they change over time. And every once in a while,
          they face different challenges, by keeping this thing in mind, we
          gather all requirements and provide significant solution to raise
          competitiveness and taste the success in every industry that we serve.{" "}
        </p>
        <div className='industries_block_main industries_block_main_home'>
          <div className='industries_block'>
            <div
              className='wow fadeInDown relat_position'
              data-wow-delay='0.2s'
            >
              <div className='shape_img'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='health'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'health.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/health.svg`}
                  width='150'
                  height='152'
                />
              </div>
              <div className='shape_icon'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='edu_icon'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'heart-pulse.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/heart-pulse.svg`}
                  width='60'
                  height='60'
                />
              </div>
            </div>
            <span>Healthcare</span>
          </div>
          <div className='industries_block'>
            <div
              className='wow fadeInDown relat_position'
              data-wow-delay='0.2s'
            >
              <div className='shape_img'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='education'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'education.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/education.svg`}
                  width='152'
                  height='151'
                />
              </div>
              <div className='shape_icon'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='edu_icon'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'edu_icon.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/edu_icon.svg`}
                  width='60'
                  height='60'
                />
              </div>
            </div>
            <span>Education</span>
          </div>
          <div className='industries_block'>
            <div
              className='wow fadeInDown relat_position'
              data-wow-delay='0.2s'
            >
              <div className='shape_img'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='e-commerce'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'e-commerce.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/e-commerce.svg`}
                  width='149'
                  height='151'
                />
              </div>
              <div className='shape_icon'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='bag_icon'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'bag_icon.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/bag_icon.svg`}
                  width='60'
                  height='60'
                />
              </div>
            </div>
            <span>eCommerce</span>
          </div>
          <div className='industries_block'>
            <div
              className='wow fadeInDown relat_position'
              data-wow-delay='0.2s'
            >
              <div className='shape_img'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='hotel_industries'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'hotel_industries.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/hotel_industries.svg`}
                  width='146'
                  height='150'
                />
              </div>
              <div className='shape_icon'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='hotel_icon'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'hotel_icon.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/hotel_icon.svg`}
                  width='60'
                  height='60'
                />
              </div>
            </div>
            <span>Hotel & Industries</span>
          </div>
        </div>
        <div className='industries_block_main industries_block_main_home'>
          <div className='industries_block'>
            <div
              className='wow fadeInDown relat_position'
              data-wow-delay='0.2s'
            >
              <div className='shape_img'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='travel'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'travel.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/travel.svg`}
                  width='149'
                  height='149'
                />
              </div>
              <div className='shape_icon'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='travel_icon'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'travel_icon.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/travel_icon.svg`}
                  width='60'
                  height='60'
                />
              </div>
            </div>
            <span> Travel & Tourism</span>
          </div>
          <div className='industries_block'>
            <div
              className='wow fadeInDown relat_position'
              data-wow-delay='0.2s'
            >
              <div className='shape_img'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='banking'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'banking.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/banking.svg`}
                  width='151'
                  height='150'
                />
              </div>
              <div className='shape_icon'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='bank_icon'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'bank_icon.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/bank_icon.svg`}
                  width='60'
                  height='60'
                />
              </div>
            </div>
            <span>Banking & Finance</span>
          </div>
          <div className='industries_block'>
            <div
              className='wow fadeInDown relat_position'
              data-wow-delay='0.2s'
            >
              <div className='shape_img'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='logistic'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'logistic.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/logistic.svg`}
                  width='150'
                  height='152'
                />
              </div>
              <div className='shape_icon'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='shipping_icon'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'shipping_icon.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/shipping_icon.svg`}
                  width='60'
                  height='60'
                />
              </div>
            </div>
            <span>Logistic & Shipping</span>
          </div>
          <div className='industries_block'>
            <div
              className='wow fadeInDown relat_position'
              data-wow-delay='0.2s'
            >
              <div className='shape_img'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='social_network'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'social_network.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/social_network.svg`}
                  width='148'
                  height='143'
                />
              </div>
              <div className='shape_icon'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='network_icon'
                  // src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank_image.svg';?>"
                  // data-src="<?php echo config('constants.CDN_URL_IMAGES') . 'network_icon.svg'; ?>"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/network_icon.svg`}
                  width='60'
                  height='60'
                />
              </div>
            </div>
            <span>Social Networking</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
