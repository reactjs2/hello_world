"use client";
import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../process_new1.json";

const Process = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    
  };

  return (
    <section className='process_section_div'>
      <div className='container'>
        <h2 className='center_under_line'>Our Process</h2>
        <p className='desc_txt'>
          Converting an idea into reality requires domain knowledge, efficiency
          and understanding. We offer custom software development services.
          Let’s shake hands and see how we can add more value to your business.
        </p>
        <div className='process_block_main'>
          <div
            className='process_gif_div slideInDown'
            data-animation='slideInDown'
            data-animation-delay='200ms'
            style={{ animationDelay: "200ms" }}
            data-animated='true'
          >
            <Lottie options={defaultOptions} />
          </div>
          <section className='proces_start_div'>
            <div className='process_box box'>
              <div className='num_process_img pro_one'>
                <span>1</span>
                <img
                  src='https://cdn.moontechnolabs.com/live/images/blank_image.svg'
                  data-src='https://cdn.moontechnolabs.com/live/images/mobile_process1.svg'
                  width='150'
                  height='150'
                  alt='mobile_process1'
                />
              </div>
              <h4>Requirement Gathering</h4>
              <p>
                This is the first step that kicks off with converting your ideas
                into reality assessing and gathering every detail. We would be
                working on creating wireframes, SOW, SRS to get moving.
              </p>
            </div>
            <div
              className='process_box box slideInLeft'
              data-animation='slideInLeft'
              data-animation-delay='1000ms'
              style={{ animationDelay: "1000ms" }}
              data-animated='true'
            >
              <div className='num_process_img pro_two'>
                <span>2</span>
                <img
                  src='https://cdn.moontechnolabs.com/live/images/blank_image.svg'
                  data-src='https://cdn.moontechnolabs.com/live/images/mobile_process2.svg'
                  width='150'
                  height='150'
                  alt='mobile_process2'
                />
              </div>
              <h4>Design</h4>
              <p>
                We tend to follow the new trends. So, we would be working on the
                UI and UX that can attract your target audience for your
                business and implement the design accordingly.
              </p>
            </div>
            <div
              className='process_box box slideInLeft'
              data-animation='slideInLeft'
              data-animation-delay='2500ms'
              style={{ animationDelay: "2500ms" }}
              data-animated='true'
            >
              <div className='num_process_img pro_three'>
                <span>3</span>
                <img
                  src='https://cdn.moontechnolabs.com/live/images/blank_image.svg'
                  data-src='https://cdn.moontechnolabs.com/live/images/mobile_process3.svg'
                  width='150'
                  height='150'
                  alt='mobile_process3'
                />
              </div>
              <h4>Development</h4>
              <p>
                Development will be completely in line with your requirements.
                Our development process has been built upon concerning almost
                every development methodology to give better solution.
              </p>
            </div>
            <div
              className='process_box box slideInLeft'
              data-animation='slideInLeft'
              data-animation-delay='3500ms'
              style={{ animationDelay: "3500ms" }}
              data-animated='true'
            >
              <div className='num_process_img pro_four'>
                <span>4</span>
                <img
                  src='https://cdn.moontechnolabs.com/live/images/blank_image.svg'
                  data-src='https://cdn.moontechnolabs.com/live/images/mobile_process4.svg'
                  width='150'
                  height='150'
                  alt='mobile_process4'
                />
              </div>
              <h4>Quality Assurance</h4>
              <p>
                To make sure we are on the right track, we carry out from
                regression testing to unit testing to make sure everything is up
                and running as we don’t like to compromise on the services we
                provide.
              </p>
            </div>
            <div
              className='process_box box slideInLeft'
              data-animation='slideInLeft'
              data-animation-delay='5000ms'
              style={{ animationDelay: "5000ms" }}
              data-animated='true'
            >
              <div className='num_process_img pro_five'>
                <span>5</span>
                <img
                  src='https://cdn.moontechnolabs.com/live/images/blank_image.svg'
                  data-src='https://cdn.moontechnolabs.com/live/images/mobile_process5.svg'
                  width='150'
                  height='150'
                  alt='mobile_process5'
                />
              </div>
              <h4>Delivery</h4>
              <p>
                Your product is ready now. After careful scrutinization and
                working thoroughly, your product is ready to be delivered.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Process;
