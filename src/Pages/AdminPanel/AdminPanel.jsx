import axios from 'axios';
import React from 'react';
import Header from '../../Components/Header/Header';
import style from './AdminPanel.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from '../../Components/Footer/Footer';

const AdminPanel = () => {
  const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      number: '',
      price: '',
      category: '',
    },
    validationSchema: Yup.object({
      image: Yup.string().url('Invalid URL').required('Image link is required'),
      title: Yup.string().required('Title is required'),
      number: Yup.string().required('Number is required'),
      price: Yup.number().required('Price is required').positive('Price must be a positive number'),
      category: Yup.string().required('Category is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post('http://localhost:5000/api/Pubg', values);
        if (response.status === 201) {
          resetForm({ image: '', title: '', number: '', price: ''});
          alert('Note created successfully!');
        } else {
          alert('Error creating note');
        }
      } catch (error) {
        console.error('Post Error:', error.response || error.message);
        alert('Error creating note');
      }
    },
  });

  return (
    <div>
      <Header />
      <div className={style.crud}>
        <div className={style.container}>
          <form onSubmit={formik.handleSubmit}>
            <label>
              Image link:
              <input
                id="image"
                name="image"
                type="text"
                placeholder="Image link"
                {...formik.getFieldProps('image')}
              />
            </label>
            {formik.touched.image && formik.errors.image ? (
              <div>{formik.errors.image}</div>
            ) : null}

            <label>
              Title:
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                {...formik.getFieldProps('title')}
              />
            </label>
            {formik.touched.title && formik.errors.title ? (
              <div>{formik.errors.title}</div>
            ) : null}

            <label>
              Number:
              <input
                id="number"
                name="number"
                type="text"
                placeholder="Number"
                {...formik.getFieldProps('number')}
              />
            </label>
            {formik.touched.number && formik.errors.number ? (
              <div>{formik.errors.number}</div>
            ) : null}

            <label>
              Price:
              <input
                id="price"
                name="price"
                type="text"
                placeholder="Price"
                {...formik.getFieldProps('price')}
              />
            </label>
            {formik.touched.price && formik.errors.price ? (
              <div>{formik.errors.price}</div>
            ) : null}

            <label>
              Category:
              <input
                id="category"
                name="category"
                type="text"
                placeholder="Category"
                {...formik.getFieldProps('category')}
              />
            </label>
            {formik.touched.category && formik.errors.category ? (
              <div>{formik.errors.category}</div>
            ) : null}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;
