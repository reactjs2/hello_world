import React from "react";

const Service = () => {
  return (
    <section className='service_section_div service_section_div_home'>
      <div className='container'>
        <h2 className='center_under_line'>Services</h2>
        <p className='desc_txt'>
          We provide stellar solutions from Startup to Enterprise level company.
          As one of the frontiers in mobile and web development company, we make
          sure that you get proper exposure of your target audience and increase
          the number of customers on the mobile app or website.
        </p>
        <p className='desc_txt'>
          We plan to revamp business tasks with mobile app development, custom
          software application development, Big Data, the Internet of Things
          (IoT), website development, Blockchain development, etc. Conquering
          these fields is something we constantly strive for and we'll continue
          to do so as we take the utmost pride in being the best IT services and
          IT solutions company.
        </p>
        <div className='service_block_main service_block_main_home'>
          <div className='service_block'>
            <a
              href="{{ secure_asset('/services/web-application-development-company')}}"
              className='service_block_child'
            >
              <div
                className='service_iaon wow fadeInDown'
                data-wow-delay='0.2s'
              >
                <img
                  className='lazy'
                  loading='lazy'
                  alt='web_dev'
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/web_dev.svg`}
                  width='51'
                  height='51'
                />
              </div>
              <span>Web Development</span>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
                width='18'
                height='12'
                alt='arrow'
                className='service_arrow lazy'
              />
            </a>
          </div>
          <div className='service_block'>
            <a
              href="{{ secure_asset('/services/mobile-app-development')}}"
              className='service_block_child'
            >
              <div
                className='service_iaon wow fadeInDown'
                data-wow-delay='0.2s'
              >
                <img
                  className='lazy'
                  loading='lazy'
                  alt='mobile_app'
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/mobile_app.svg`}
                  width='auto'
                  height='51'
                />
              </div>
              <span>Mobile App</span>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
                width='18'
                height='12'
                alt='arrow'
                className='service_arrow lazy'
              />
            </a>
          </div>
          <div className='service_block'>
            <a
              href="{{ secure_asset('/services/wearable-devices-app-development')}}"
              className='service_block_child'
            >
              <div
                className='service_iaon wow fadeInDown'
                data-wow-delay='0.2s'
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/wearable_app.svg`}
                  className='lazy'
                  loading='lazy'
                  alt='wearable_app'
                  width='40'
                  height='51'
                />
              </div>
              <span>Wearable App</span>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
                width='18'
                height='12'
                alt='arrow'
                className='lazy service_arrow'
              />
            </a>
          </div>
          <div className='service_block'>
            <a
              href="{{ secure_asset('/services/hybrid-app-development-company')}}"
              className='service_block_child'
            >
              <div
                className='service_iaon wow fadeInDown'
                data-wow-delay='0.2s'
              >
                <img
                  className='lazy'
                  loading='lazy'
                  alt='hybrid_app'
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/hybrid_app.svg`}
                  width='51'
                  height='51'
                />
              </div>
              <span>Hybrid App</span>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
                alt='arrow'
                width='18'
                height='12'
                className='lazy service_arrow'
              />
            </a>
          </div>
        </div>
        <div className='service_block_main service_block_main_home'>
          <div className='service_block'>
            <a
              href="{{ secure_asset('/app-and-logo-design-services')}}"
              className='service_block_child'
            >
              <div
                className='service_iaon wow fadeInDown'
                data-wow-delay='0.2s'
              >
                <img
                  className='lazy'
                  loading='lazy'
                  alt='design'
                  width='51'
                  height='51'
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/design.svg`}
                />
              </div>
              <span>Design</span>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
                alt='arrow'
                className='service_arrow lazy'
                width='18'
                height='12'
              />
            </a>
          </div>
          <div className='service_block'>
            <a
              href="{{ secure_asset('/services/blockchain-development')}}"
              className='service_block_child'
            >
              <div
                className='service_iaon wow fadeInDown'
                data-wow-delay='0.2s'
              >
                <img
                  className='lazy'
                  loading='lazy'
                  alt='block_chain'
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/block_chain.svg`}
                  width='51'
                  height='51'
                />
              </div>
              <span>Blockchain Development</span>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
                alt='arrow'
                className='service_arrow lazy'
                width='18'
                height='12'
              />
            </a>
          </div>
          <div className='service_block'>
            <a
              href="{{ secure_asset('/voip-development-services')}}"
              className='service_block_child'
            >
              <div
                className='service_iaon wow fadeInDown'
                data-wow-delay='0.2s'
              >
                <img
                  className='lazy'
                  loading='lazy'
                  alt='voip_dev'
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/voip_dev.svg`}
                  width='51'
                  height='51'
                />
              </div>
              <span>VOIP Development</span>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
                width='18'
                height='12'
                alt='arrow'
                className='service_arrow lazy'
              />
            </a>
          </div>
          <div className='service_block'>
            <a
              href="{{ secure_asset('/digital-marketing-services')}}"
              className='service_block_child'
            >
              <div
                className='service_iaon wow fadeInDown'
                data-wow-delay='0.2s'
              >
                <img
                  className='lazy'
                  loading='lazy'
                  alt='digital_market'
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/digital_market.svg`}
                  width='51'
                  height='51'
                />
              </div>
              <span>Digital Marketing</span>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
                alt='arrow'
                width='18'
                height='12'
                className='service_arrow lazy'
              />
            </a>
          </div>
        </div>
        <div className='theme_btn_div'>
          <a
            href='#'
            className='theme_btn'
            id='popup_btn_id_explore'
            data-target='#get_a_free_quote'
            data-toggle='modal'
          >
            {" "}
            Let's Connect
            <img
              className='lazy'
              loading='lazy'
              alt='arrow'
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

export default Service;
