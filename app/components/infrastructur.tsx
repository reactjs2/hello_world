"use client";
import React, { useState } from "react";

const Infrastructur = () => {
  const [open, setopen] = useState(0);
  return (
    <section className='infrastructur_pt-50'>
      <div
        className='custom_modal structure_modal in'
        id='infrastructure'
        tabIndex={1}
        role='dialog'
        aria-labelledby='basicModal'
        aria-hidden='true'
      >
        <div className='custom_modal_dailog'>
          <div className='custom_modal_content'>
            {/* YouTube video embedded in an iframe */}
            <iframe
              width='700'
              id='infrastructure_video'
              height='394'
              src={`https://www.youtube.com/embed/Etrn68T-M0k?showinfo=0&modestbranding=1&rel=0&mute=0&autoplay=${open}`}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;mute'
              allowFullScreen
            ></iframe>
            {/* Close button to dismiss the modal */}
            <button
              type='button'
              className='close close_modal'
              onClick={() => setopen(0)}
            >
              ×
            </button>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='infrastructure'>
          <div className='infrastructur_inner'>
            <div className='services_child'>
              <h2 className='center_under_line'>
                Innovative Workspace of Moon Technolabs
              </h2>
            </div>
            <a
              href='javascript:void(0)'
              className='play_button_mtpl'
              onClick={() => setopen(1)}
            >
              <img
                className='lazy'
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/company_img.jpg`}
                alt='node_indu_image_6'
              />
              <div className='play'>
                <svg
                  className='video-overlay-play-button new_1'
                  viewBox='0 0 200 200'
                >
                  <circle
                    cx='100'
                    cy='100'
                    r='80'
                    fill='none'
                    strokeWidth='18'
                    stroke='#fff'
                  ></circle>
                  <polygon
                    points='70, 55 70, 145 145, 100'
                    fill='#fff'
                  ></polygon>
                </svg>
              </div>
            </a>
          </div>
          <div className='bottom_popup'></div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructur;
