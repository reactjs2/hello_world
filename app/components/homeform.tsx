"use client";
import React, { ChangeEvent, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Homeform = () => {
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
    <div className='contact_form_main'>
      <form
        id='cnt_main_footer_form'
        className='cnt_main_footer_form'
        onSubmit={(e): boolean => {
          e.preventDefault();
          validation.handleSubmit();
          return false;
        }}
        action='#'
      >
        <div className='form_title_desc'>
          <h3>Share Your Requirements!</h3>
          <p>
            Get all-in-one development solutions and services related to your
            inquiries. Fill up the form below and one of our representative will
            contact to you shortly.
          </p>
        </div>
        <div className='field_div'>
          <div className='form-group'>
            <label className='pure-material-textfield-outlined'>
              <input
                type='text'
                name='name'
                id='footer_form_name'
                placeholder=' '
                maxLength={25}
                autoComplete='off'
                className={
                  validation.errors.hasOwnProperty("name") && alert
                    ? "validation_new"
                    : ""
                }
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  validation.handleChange(e);
                }}
                value={validation.values.name}
              />
              <span className='custom_span'>
                <span className='text_area_top'>Name*</span>
              </span>
            </label>
          </div>
          <div className='form-group'>
            <label className='pure-material-textfield-outlined'>
              <input
                type='email'
                name='email'
                placeholder=' '
                autoComplete='off'
                className={`form-control ${
                  validation.errors.hasOwnProperty("email") && alert
                    ? "validation_new"
                    : ""
                }`}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  validation.handleChange(e);
                }}
                value={validation.values.email}
              />
              <span className='custom_span'>
                <span className='text_area_top'>Email*</span>
              </span>
            </label>
          </div>
        </div>
        <div className='field_div'>
          <div className='form-group'>
            <label className='pure-material-textfield-outlined'>
              <input
                type='text'
                name='phone'
                id='phn_num_up'
                placeholder=' '
                maxLength={14}
                autoComplete='off'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  validation.handleChange(e);
                }}
                value={validation.values.phone}
              />
              <span className='custom_span'>
                <span className='text_area_top'>Phone</span>
              </span>
            </label>
          </div>
          <div className='form-group'>
            <label className='pure-material-textfield-outlined'>
              <input
                type='text'
                name='skype'
                placeholder=' '
                className='custom_input'
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  validation.handleChange(e);
                }}
                value={validation.values.skype}
              />
              <span className='custom_span_2'>Skype/IM</span>
            </label>
          </div>
        </div>
        <div className='field_div'>
          <div className='form-group'>
            <label className='select_wrap'>
              <select
                className='budget_select_div'
                id='budget_select_div_footer'
                name='budget'
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  validation.handleChange(e);
                }}
                value={validation.values.budget}
              >
                <option value='' style={{ color: "#828282" }}>
                  Select approx budget*
                </option>
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
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 320 512'
                width='1em'
                height='1em'
              >
                <path
                  fill='currentColor'
                  d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
                  className=''
                ></path>
              </svg>
            </label>
          </div>
          <div className='form-group browsefile_div'>
            <div className='attach_file_div' style={{ marginBottom: "0" }}>
              <label className='browse_file'>
                <label>Browse File</label>
                <input
                  name='attachment[]'
                  id='attachment'
                  type='file'
                  multiple
                  accept='.jpg,.jpeg,.png,.pdf'
                  onChange={(e: any) =>
                    handleImageValidation(e.target.files && e.target.files[0])
                  }
                  value={validation.values.attachment}
                />
                <img
                  className='lazy'
                  loading='lazy'
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/${process.env.NEXT_PUBLIC_IMAGE_SVG}/attachment.svg`}
                  alt='Moon Technolabs'
                />
              </label>
            </div>
            <small style={{ color: "#a8a8a8", fontSize: "12px" }}>
              Acceptable formats: JPG, JPEG, PDF, PNG
            </small>
          </div>
        </div>
        <div className='field_div textarea_field_div'>
          <label className='pure-material-textfield-outlined textarea_msg'>
            <textarea
              placeholder=' '
              name='message'
              className={`form-control ${
                validation.errors.message == "" && alert ? "validation_new" : ""
              }`}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                validation.handleChange(e);
              }}
              value={validation.values.message}
            ></textarea>
            <span className='custom_span'>
              <span className='text_area_top'>Brief your requirement*</span>
            </span>
          </label>
        </div>
        <div className='theme_btn_div'>
          <button
            type='submit'
            className='theme_btn'
            id='footer_submit_frm'
            onClick={() => setalert(true)}
          >
            Submit{" "}
            <img
              className='lazy'
              loading='lazy'
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${process.env.NEXT_PUBLIC_IMAGE_MAIN}/arrow.svg`}
              alt='Moon Technolabs'
            />
          </button>
        </div>
        <div
          id='suc_cnt_btn'
          className='alert alert-success'
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
    </div>
  );
};

export default Homeform;
