import React from "react";

const AboutUs = () => {
  return (
    <section className='about_section_div'>
      <div className='container'>
        <h2 className='left_under_line'>About Us</h2>
        <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 left_padding_zero'>
          <span className='about_content_block'>
            <p>
              We put resources into innovation to enable our clients to release
              new potential over their associations. Incepted in 2009, from
              there to now in these considerable years, we've gone through every
              obstacle and provided solution with sheer dedication. What makes
              Moon Technolabs stand out from the crowd is their pool of experts,
              industry knowledge and a genuine understanding of what to do so as
              to succeed.
            </p>
            <p>
              With an industry experience that traverses a very long while, we
              offer plenty of customer-driven services by empowering endeavors
              through adaptable and cutting edge worldwide delivery models.
            </p>
          </span>
          <div className='theme_btn_div'>
            <a
              href='#'
              className='theme_btn'
              id='talk_to_expert'
              data-target='#get_a_free_quote'
              data-toggle='modal'
            >
              Talk to our expert
              <img
                className='lazy'
                loading='lazy'
                alt='arrow'
                src='https://cdn.moontechnolabs.com/live/images/arrow.svg'
                width='18'
                height='12'
              />
            </a>
          </div>
        </div>
        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 right_padding_zero'>
          <div className='about_company_info'>
            <div
              className='company_clm_div wow fadeInDown animated'
              data-wow-delay='0.2s'
              style={{ visibility: "visible", animationDelay: "0.2s" }}
            >
              <span className='info_block complete_pro'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='complete_project'
                  src='https://cdn.moontechnolabs.com/live/images/complete_project.svg'
                  width='50'
                  height='39'
                />
                <h3>1550+</h3> <p>Projects Completed</p>
              </span>
              <span className='info_block dev_staff'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='staff'
                  src='https://cdn.moontechnolabs.com/live/images/staff.svg'
                  width='50'
                  height='50'
                />
                <h3>270+</h3> <p>Team Strength</p>
              </span>
            </div>
            <div
              className='company_clm_div wow fadeInUp animated'
              data-wow-delay='0.2s'
              style={{ visibility: "visible", animationDelay: "0.2s" }}
            >
              <span className='info_block experience'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='experience'
                  src='https://cdn.moontechnolabs.com/live/images/experience.svg'
                  width='50'
                  height='50'
                />
                <h3>14+</h3> <p>Years of Experience</p>
              </span>
              <span className='info_block location'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='location'
                  src='https://cdn.moontechnolabs.com/live/images/location.svg'
                  width='50'
                  height='50'
                />
                <h3>75%</h3> <p>Location we Serve</p>
              </span>
            </div>
            <div
              className='company_clm_div wow fadeInDown animated'
              data-wow-delay='0.2s'
              style={{ visibility: "visible", animationDelay: "0.2s" }}
            >
              <span className='info_block customers'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='trophy'
                  src='https://cdn.moontechnolabs.com/live/images/trophy.svg'
                  width='50'
                  height='50'
                />
                <h3>830+</h3> <p>Global Customers</p>
              </span>
              <span className='info_block industry'>
                <img
                  className='lazy'
                  loading='lazy'
                  alt='industry'
                  src='https://cdn.moontechnolabs.com/live/images/industry.svg'
                  width='50'
                  height='50'
                />
                <h3>38+</h3> <p>Specific Industry</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
