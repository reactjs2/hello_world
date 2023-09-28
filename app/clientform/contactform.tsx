"use client";
import React, { ChangeEvent, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const [alert, setalert] = useState(false);
  const [filename, setfilename] = useState("");
  /** formik validation */
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      phone: "+91",
      whatsapp: "+91",
      skype: "",
      budget: "",
      attachment: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(""),
      email: Yup.string().email("email is not valid").required(""),
      phone: Yup.string(),
      whatsapp: Yup.string(),
      attachment: Yup.object(),
      message: Yup.string().required(""),
    }),
    onSubmit: async (values) => {
      validation.resetForm();
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
      "application/doc",
      "application/excel",
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
    <form
      id='cnt_main_form'
      onSubmit={(e): boolean => {
        e.preventDefault();
        validation.handleSubmit();
        return false;
      }}
      action='#'
    >
      {/* Name and Email fields */}
      <div className='form-group margin_bottom'>
        <div className='col-md-6 col-sm-6'>
          <label className='pure-material-textfield-outlined'>
            <input
              type='text'
              name='name'
              id='footer_form_name'
              placeholder=''
              className={
                validation.errors.name == "" && alert ? "validation_new" : ""
              }
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                validation.handleChange(e);
              }}
              value={validation.values.name}
              maxLength={25}
              autoComplete='off'
            />
            <span className='custom_span'>
              <span className='text_area_top'>Name*</span>
            </span>
          </label>
        </div>
        <div className='col-md-6 col-sm-6'>
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
      </div>

      {/* Phone and WhatsApp fields */}
      <div className='form-group margin_bottom'>
        <div className='col-md-6 col-sm-6'>
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
        <div className='col-md-6 col-sm-6'>
          <label className='pure-material-textfield-outlined'>
            <input
              type='text'
              name='whatsapp'
              className='form-control'
              placeholder=' '
              maxLength={14}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                validation.handleChange(e);
              }}
              value={validation.values.whatsapp}
            />
            <span className='custom_span'>WhatsApp#</span>
          </label>
        </div>
      </div>

      {/* Skype and Budget fields */}
      <div className='form-group margin_bottom'>
        <div className='col-md-6 col-sm-6'>
          <label className='pure-material-textfield-outlined'>
            <input
              type='text'
              name='skype'
              className='form-control'
              placeholder=' '
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                validation.handleChange(e);
              }}
              value={validation.values.skype}
            />
            <span className='custom_span'>Skype | Google Chat</span>
          </label>
        </div>
        <div className='col-md-6 col-sm-6'>
          <label className='select_wrap'>
            <select
              className='form-control budget_select_div'
              id='budget_select_div_footer'
              name='budget'
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                validation.handleChange(e);
              }}
              value={validation.values.budget}
            >
              <option value=''>Budget</option>
              <option className='option_budget' value='Less than $10,000'>
                Less than $10,000
              </option>
              <option className='option_budget' value='$10,000 - $25,000'>
                $10,000 - $25,000
              </option>
              <option className='option_budget' value='$25,000 - $50,000'>
                $25,000 - $50,000
              </option>
              <option className='option_budget' value='$50,000 and above'>
                $50,000 and above
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
      </div>

      {/* Attachment field */}
      <div className='form-group margin_bottom files'>
        <div className='col-md-6 col-sm-12'>
          <span className='text_uppercase'>Attachment</span>
          <div className='attach_file_div'>
            <label className='browse_file'>
              <label htmlFor='attachment'>{filename || "Browse File"}</label>
              <input
                name='attachment'
                id='attachment-contact'
                type='file'
                onChange={(e: any) =>
                  handleImageValidation(e.target.files && e.target.files[0])
                }
                value={validation.values.attachment}
              />
              <img
                className='lazy'
                //   src="<?php echo config('constants.CDN_URL_IMAGES') . 'blank.png'; ?>"
                //   data-src="<?php echo config('constants.CDN_URL_OLD_IMAGES') . 'attachment.png'; ?>"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/attachment.png`}
                alt='attachment'
              />
            </label>
          </div>
          <span className='custom_span text-size'>
            Upload JPG, JPEG, PNG, PDF, Doc, Excel File here (max 20mb)
          </span>
        </div>
      </div>

      {/* Brief about the project field */}
      <div className='form-group margin_bottom'>
        <div className='col-md-12 col-sm-12'>
          <label className='full_width'>
            <label className='pure-material-textfield-outlined'>
              <textarea
                rows={6}
                cols={200}
                name='message'
                placeholder=' '
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
                <span className='text_area_top'>Brief about the project*</span>
              </span>
            </label>
          </label>
        </div>
      </div>
      <input type='hidden' name='website' value='' id='website' />
      {/* Add other hidden input fields if needed */}

      <div className='form-group'>
        <div className='theme_btn_div'>
          <button
            type='submit'
            className='theme_btn'
            id='contact_sales_frm'
            onClick={() => setalert(true)}
          >
            Submit{" "}
            <img
              className='lazyload'
              // src="<?php echo config('constants.CDN_URL_IMAGES') . 'arrow.svg'; ?>"

              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
              alt='arrow'
            />
          </button>
        </div>
      </div>
      <div
        className='alert alert-success'
        id='suc_cnt_btn'
        style={{ display: "none" }}
      >
        <strong>Success!</strong> Your Message Sent successfully.
      </div>
      <div
        className='alert alert-danger'
        id='dan_cnt_btn'
        style={{ display: "none" }}
      ></div>
    </form>
  );
};

export default ContactForm;
