"use client";
import React, { useEffect, useState } from "react";
import API from "../services/api";
import moment from "moment";
const Blog = () => {
  const [blogsData, setblogsData] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const response = await API("GET", "blog/wp-json/wp/v2/posts", "");
    if (response.status === 200) {
      setblogsData(response?.data?.slice(0, 4));
    }
  };

  return (
    <section className='blog_section_div blog-maring-top'>
      <div className='container'>
        <h2 className='center_under_line'>Blogs</h2>
        <div className='blog_section_main' id='accordion12'>
          {blogsData?.map((item: any) => (
            <div className='blog_box' key={item.id}>
              <div className='blog_sub_details'>
                <a href='/'>
                  <div className='blog_img'>
                    <img
                      className='lazy'
                      src={item.featured_image_url}
                      id='blog_image'
                      alt='blog image'
                      width={333}
                      height={181}
                    />
                    <div className='blog_arrow_new'>
                      <div className='blog_arrow'>
                        <img
                          className='lazy'
                          loading='lazy'
                          alt='arrow'
                          src='https://cdn.moontechnolabs.com/live/images/arrow.svg'
                          width={18}
                          height={12}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='around_padding'>
                    <div className='blog_date'>
                      <span id='blog_date'>
                        {moment(item.date).format("DD MMM YYYY")}
                      </span>
                      <span className='text_right' style={{ float: "right" }}>
                        <img
                          data-src='https://cdn.moontechnolabs.com/live/blog/images/eye.png'
                          className='lazyloaded'
                          alt='eye'
                          src='https://cdn.moontechnolabs.com/live/blog/images/eye.png'
                          width={18}
                          height={12}
                        />
                        <p id='post_view_count'>
                          {item.meta.post_custom_counts[0]}
                        </p>
                      </span>
                    </div>
                    <div className='blog_desc'>
                      <p id='blog_title'>{item.title.rendered}</p>
                    </div>
                  </div>
                </a>
                <div className='post_footer'>
                  <div className='col-md-10 m-0'>
                    <div className='tag' id='category_0'>
                      <span className='left_new'>
                        <b>#{item.categories_list.categories_name[0]}</b>
                      </span>
                      <span className='left_new'>
                        <b />
                      </span>
                    </div>
                  </div>
                  <div className='col-md-2 m-0'>
                    <span className='text_right'>
                      <button
                        type='button'
                        className='share collapsed'
                        data-toggle='collapse'
                        data-target={`#social_btn_display${item.id}`}
                        aria-expanded='true'
                        aria-controls='social_btn_display31'
                      >
                        <img
                          data-src='https://cdn.moontechnolabs.com/live/blog/images/share.png'
                          className='lazy lazyloaded'
                          alt='share'
                          src='https://cdn.moontechnolabs.com/live/blog/images/share.png'
                        />
                      </button>
                    </span>
                  </div>
                </div>
                <div
                  className='social_media_icon social_btn_display collapse'
                  id={`social_btn_display${item.id}`}
                >
                  <div className='post_share' id='social_icons'>
                    <div className='ftr_social_icon'>
                      <a
                        className='mainicon'
                        href='#'
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
                          />
                        </svg>
                      </a>
                      <a
                        className='mainicon'
                        href='#'
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
                          />
                        </svg>
                      </a>
                      <a
                        className='mainicon'
                        href='#'
                        target='_blank'
                        aria-label='Social-Pinterest'
                        count-layout='horizontal'
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
                          />
                        </svg>
                      </a>
                      <a
                        className='mainicon'
                        href='#'
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
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='theme_btn_div'>
          <a
            href="{{ config('constants.BLOG_URL') }}"
            className='theme_btn'
            // onclick="button_event_tracking('Home', 'View More', 'Home-Blog-ViewMore');"
          >
            View More{" "}
            <img
              className='lazy'
              loading='lazy'
              alt='arrow'
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
              width={18}
              height={12}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
