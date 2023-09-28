"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const HeaderForm = () => {
  const [alert, setalert] = useState(false);
  const [filename, setfilename] = useState("");

  const closeclick = useRef<any>();

  /** formik validation */
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      phone: "+91",
      skype: "",
      budget: "",
      attachment: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(""),
      email: Yup.string().email("email is not valid").required(""),
      phone: Yup.string(),
      attachment: Yup.object(),
      message: Yup.string().required(""),
    }),
    onSubmit: async (values) => {
      validation.resetForm();
      closeclick.current.click();
    },
  });

  const validateImageFileSize = (file: File) => {
    // Maximum allowed file size in bytes (2MB)
    const maxSize = 20 * 1024 * 1024;

    // Check if file size exceeds the maximum allowed size
    if (file.size > maxSize) {
      return false;
    }

    // File size is within the allowed limit
    return true;
  };

  const validateImageFileType = (file: File) => {
    // Allowed file types
    const allowedTypes = [
      "image/jpg",
      "image/png",
      "image/jpeg",
      "application/pdf",
    ];

    // Check if the file type is allowed
    if (!allowedTypes.includes(file.type)) {
      return false;
    }

    // File type is allowed
    return true;
  };

  const handleImageValidation = (imageFile: File) => {
    if (validateImageFileType(imageFile)) {
      if (validateImageFileSize(imageFile)) {
        setfilename(imageFile.name);
      }
    }
  };
  return (
    <div
      id='get_a_free_quote'
      className='modal fade contact_modal'
      role='dialog'
      tabIndex={-1}
      data-backdrop='static'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button
              type='button'
              className='close cls_btn_cls'
              data-dismiss='modal'
              ref={closeclick}
            >
              ✕
            </button>
          </div>
          <div className='modal-body' id='quote_popup_body'>
            <div className='contact_form_popup' id='ajax_quote_popup'>
              <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 no_padding bg_blue_div'>
                <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12 no_padding bg_white_left_aside'>
                  <aside className='form_section'>
                    <form
                      className='free_quote_form'
                      id='mtpl_home_contact_form'
                      onSubmit={(e): boolean => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                      action='#'
                    >
                      <div className='form_heading'>
                        <h2 id='popup_dynamic_text'>
                          Let’s discuss more about your project
                        </h2>
                      </div>
                      <div className='col-md-6 padding_left'>
                        <label className='pure-material-textfield-outlined'>
                          <input
                            type='text'
                            name='name'
                            id='inputarea_id'
                            placeholder=''
                            className={
                              validation.errors.name == "" && alert
                                ? "validation_new"
                                : ""
                            }
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              validation.handleChange(e);
                            }}
                            value={validation.values.name}
                            maxLength={25}
                          />
                          <span className='custom_span'>
                            <span className='text_area_top'>Name*</span>
                          </span>
                        </label>
                      </div>
                      <div className='col-md-6 padding_right email_div'>
                        <label className='pure-material-textfield-outlined'>
                          <input
                            type='text'
                            name='email'
                            placeholder=' '
                            className={`form-control ${
                              validation.errors.hasOwnProperty("email") && alert
                                ? "validation_new"
                                : ""
                            }`}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              validation.handleChange(e);
                            }}
                            value={validation.values.email}
                            autoComplete='off'
                          />
                          <span className='custom_span'>
                            <span className='text_area_top'>Email*</span>
                          </span>
                        </label>
                      </div>
                      <div className='col-md-6 padding_left'>
                        <label className='pure-material-textfield-outlined'>
                          <input
                            type='text'
                            name='phone'
                            id='phn_num_up'
                            className='form-control'
                            placeholder=' '
                            maxLength={14}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              validation.handleChange(e);
                            }}
                            value={validation.values.phone}
                            autoComplete='off'
                          />
                          <span className='custom_span'>
                            <span className='text_area_top'>Phone</span>
                          </span>
                        </label>
                      </div>
                      <div className='col-md-6 padding_right'>
                        <label className='pure-material-textfield-outlined'>
                          <input
                            type='text'
                            name='skype'
                            className='form-control'
                            placeholder=' '
                            maxLength={14}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                              validation.handleChange(e);
                            }}
                            value={validation.values.skype}
                          />
                          <span className='custom_span'>Skype/IM</span>
                        </label>
                      </div>
                      <div className='col-md-6 padding_left'>
                        <label className='select_wrap'>
                          <select
                            className='budget_select_div'
                            name='budget'
                            id='budget_select_div'
                            style={{ color: "rgb(130, 130, 130)" }}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                              validation.handleChange(e);
                            }}
                            value={validation.values.budget}
                          >
                            <option value='' style={{ color: "#828282" }}>
                              Select approx budget
                            </option>
                            <option
                              className='option_budget'
                              value='Less than $10,000'
                            >
                              Less than $10,000
                            </option>
                            <option
                              className='option_budget'
                              value='$10,000 - $25,000'
                            >
                              $10,000 - $25,000
                            </option>
                            <option
                              className='option_budget'
                              value='$25,000 - $50,000'
                            >
                              $25,000 - $50,000
                            </option>
                            <option
                              className='option_budget'
                              value='$50,000 and above'
                            >
                              $50,000 and above
                            </option>
                            <option className='option_budget' value='Not Sure'>
                              Not Sure
                            </option>
                          </select>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='caret-down'
                            className='svg-inline--fa fa-caret-down fa-w-10'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 320 512'
                          >
                            <path
                              fill='currentColor'
                              d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
                            ></path>
                          </svg>
                        </label>
                      </div>
                      <div className='col-md-6 padding_right browsefile_div'>
                        <div
                          className='attach_file_div'
                          style={{ marginBottom: 0 }}
                        >
                          <label className='browse_file'>
                            <label htmlFor='attachment'>
                              {filename || "Browse File"}
                            </label>
                            <input
                              name='attachment'
                              id='attachment-popup-quote'
                              type='file'
                              accept='.jpg,.jpeg,.png,.pdf'
                              onChange={(e: any) =>
                                handleImageValidation(
                                  e.target.files && e.target.files[0]
                                )
                              }
                              value={validation.values.attachment}
                            />
                            <img src='https://cdn.moontechnolabs.com/live/old/images/attachment.png' />
                          </label>
                        </div>
                        <small style={{ color: "#a8a8a8", fontSize: "12px" }}>
                          Acceptable formats: JPG, JPEG, PDF, PNG
                        </small>
                      </div>
                      <div className='col-md-12 no_padding'>
                        <label className='pure-material-textfield-outlined textarea_msg margin_bottom_8px'>
                          <textarea
                            placeholder=' '
                            name='message'
                            className={`form-control ${
                              validation.errors.message == "" && alert
                                ? "validation_new"
                                : ""
                            }`}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                              validation.handleChange(e);
                            }}
                            value={validation.values.message}
                          />
                          <span className='custom_span'>
                            <div className='text_area_top'>
                              Brief your requirement*
                            </div>
                          </span>
                        </label>
                      </div>
                      <div className='col-md-12 no_padding websiteClass'>
                        <label className='pure-material-textfield-outlined'>
                          <input type='text' name='website' placeholder=' ' />
                        </label>
                      </div>
                      <div className='col-md-12 no_padding '>
                        <button
                          className='contact_sbmt hvr-shadow btn btn-success btn-submit'
                          type='submit'
                          onClick={() => setalert(true)}
                        >
                          Submit
                        </button>
                      </div>
                      <div
                        className='alert alert-success'
                        id='suc_msg'
                        style={{ display: "none" }}
                      >
                        <strong>Success!</strong> Your Message Sent sucessfully.
                      </div>
                      <div
                        className='alert alert-danger'
                        id='dan_msg'
                        style={{ display: "none" }}
                      ></div>
                    </form>
                    <div className='contact_address_main'>
                      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 no_padding row-custom'>
                        <div className='col-md-6 no_padding'>
                          <div className='country_div'>
                            <div className='flag_image_holder'>
                              <img src='https://cdn.moontechnolabs.com/live/images/ind_flag.svg' />
                            </div>
                            <div className='country_name'>
                              <h3>India</h3>
                            </div>
                          </div>
                          <div className='full_address_div'>
                            <p>
                              C-105, Ganesh Meridian,
                              <br />
                              S.G.Hwy, Ahmedabad, GJ 380060
                            </p>
                            <span className='mobile_hide_banner'>
                              <strong>
                                <a
                                  className='link-color mr-10'
                                  href='tel:+919726055109'
                                  // onclick="button_event_tracking('Popup', 'Phone Clicked India', 'Phone Number Label Clicked India');"
                                >
                                  +91 972-605-5109
                                </a>
                              </strong>
                              <a
                                href='tel:+919726055109'
                                // onclick="button_event_tracking('Popup', 'Phone Clicked India', 'Phone Number Label Clicked India');"
                              >
                                <svg
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
                                    fill='#106dac'
                                    d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'
                                    className=''
                                  ></path>
                                </svg>
                              </a>
                              <a
                                target='_blank'
                                href='https://api.whatsapp.com/send?phone=919726055109&amp;text=Hi'
                                // onclick="button_event_tracking('Popup', 'Whatsapp Clicked WhatsApp-IND', 'Whatsapp Number Label Clicked WhatsApp-IND');"
                              >
                                <img
                                  src='https://cdn.moontechnolabs.com/live/images/images_svg/whatsapp.svg'
                                  alt='whatsapp'
                                />
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className='col-md-6 no_padding'>
                          <div className='country_div'>
                            <div className='flag_image_holder'>
                              <img src='https://cdn.moontechnolabs.com/live/images/usa-flag.svg' />
                            </div>
                            <div className='country_name'>
                              <h3>UNITED STATES</h3>
                            </div>
                          </div>
                          <div className='full_address_div'>
                            <p>
                              500 N Michigan Avenue, #600,
                              <br />
                              Chicago IL 60611
                            </p>

                            <p className='multi-add-wrap multi-add-wrap-white'>
                              <span className='d-block'>
                                150 W. 25th Street, STE 403,
                              </span>
                              <span className='d-block'>
                                New York City, NYC 10001
                              </span>
                              <span>
                                <a
                                  className='link-color mr-10'
                                  href='tel:+1(620) 330-9814'
                                  // onclick="button_event_tracking('Popup', 'Phone Clicked USA', 'Phone Number Label Clicked USA');"
                                >
                                  <strong>+1(620) 330-9814</strong>
                                </a>
                                <a
                                  href='tel:+1(620) 330-9814'
                                  // onclick="button_event_tracking('Popup', 'Phone Clicked USA', 'Phone Number Label Clicked USA');"
                                >
                                  <svg
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
                                      fill='#106dac'
                                      d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'
                                      className=''
                                    ></path>
                                  </svg>
                                </a>
                                <a
                                  target='_blank'
                                  href='https://api.whatsapp.com/send?phone=16203309814&amp;text=Hi'
                                  // onclick="button_event_tracking('Popup', 'Whatsapp Clicked WhatsApp-US', 'Whatsapp Number Label Clicked WhatsApp-US');"
                                >
                                  <img
                                    src='https://cdn.moontechnolabs.com/live/images/images_svg/whatsapp.svg'
                                    alt='whatsapp'
                                  />
                                </a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 no_padding bg_shadow_div'>
                  <div className='map_bg_main'>
                    <div className='map_heading text_left'>
                      <h3 className='text_left'>
                        Here’s what you will get after submitting your project
                        details:
                      </h3>
                      <ul>
                        <li>
                          <div className='img'>
                            <img
                              src='https://www.moontechnolabs.com/new_mtpl_assets/images/popup_list_1.svg'
                              alt='imagespopup_list_1'
                            />
                          </div>
                          A strict
                          <b className='color_orange_light'>
                            non-disclosure policy
                          </b>
                          .
                        </li>
                        <li>
                          <div className='img'>
                            <img
                              src='https://www.moontechnolabs.com/new_mtpl_assets/images/popup_list_2.svg'
                              alt='imagespopup_list_2'
                            />
                          </div>
                          Get in discuss with our experts.
                        </li>
                        <li>
                          <div className='img'>
                            <img
                              src='https://www.moontechnolabs.com/new_mtpl_assets/images/popup_list_3.svg'
                              alt='imagespopup_list_3'
                            />
                          </div>
                          Get a
                          <b className='color_orange_light'>
                            free consultation.
                          </b>
                        </li>
                        <li>
                          <div className='img'>
                            <img
                              src='https://www.moontechnolabs.com/new_mtpl_assets/images/popup_list_4.svg'
                              alt='imagespopup_list_4'
                            />
                          </div>
                          Turn your idea into an exceptional app.
                        </li>
                        <li>
                          <div className='img'>
                            <img
                              src='https://www.moontechnolabs.com/new_mtpl_assets/images/popup_list_5.svg'
                              alt='imagespopup_list_5'
                            />
                          </div>
                          Suggestions on
                          <b className='color_orange_light'>
                            revenue models &amp; planning.
                          </b>
                        </li>
                        <li>
                          <div className='img'>
                            <img
                              src='https://www.moontechnolabs.com/new_mtpl_assets/images/popup_list_6.svg'
                              alt='imagespopup_list_6'
                            />
                          </div>
                          No obligation proposal.
                        </li>
                        <li>
                          <div className='img'>
                            <img
                              src='https://www.moontechnolabs.com/new_mtpl_assets/images/popup_list_7.svg'
                              alt='imagespopup_list_7'
                            />
                          </div>
                          Action plan to start your project.
                        </li>
                        <li>
                          <div className='img'>
                            <img
                              src='https://www.moontechnolabs.com/new_mtpl_assets/images/popup_list_8.svg'
                              alt='imagespopup_list_8'
                            />
                          </div>
                          We respond to you
                          <b className='color_orange_light'>within 8 hours.</b>
                        </li>
                        <li>
                          <div className='img'>
                            <img
                              src='https://www.moontechnolabs.com/new_mtpl_assets/images/popup_list_9.svg'
                              alt='imagespopup_list_9'
                            />
                          </div>
                          Detailed articulate email updates
                          <b className='color_orange_light'>within 24 hours.</b>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='address_details_new'>
                    <div className='col-md-12 no_padding'>
                      <div className='contact_wrap'>
                        <a
                          href='mailto:sales@moontechnolabs.com'
                          // onclick="button_event_tracking('Popup', 'Email ID Clicked', 'Email ID Label Clicked');"
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
                              fill='#106dac'
                              d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
                              className=''
                            ></path>
                          </svg>
                          <span>sales@moontechnolabs.com</span>
                        </a>
                      </div>
                    </div>
                    <div className='col-md-12 no_padding'>
                      <div className='contact_wrap'>
                        <a
                          href='https://join.skype.com/invite/b3tUaT5cMXZG'
                          // onclick="button_event_tracking('Popup', 'Skype Clicked', 'Skype Button Clicked');"
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
                              fill='#106dac'
                              d='M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z'
                              className=''
                            ></path>
                          </svg>
                          <span>Moon Technolabs</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
