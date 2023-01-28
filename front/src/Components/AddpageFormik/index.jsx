import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import './style.scss'
import axios from 'axios';
const AddpageFormik = () => {
    return (
        <div className='addpage'>
            <Formik
                initialValues={{ title: '', description: '', iconimage: '' }}

                onSubmit={(values) => {
                    axios.post("http://localhost:3030/", values)
                }}
            >

                <Form>
                    <div className='Form'>
                        <label htmlFor="title">Title</label>
                        <Field name="title" type="text" />


                        <label htmlFor="description">Description</label>
                        <Field name="description" type="text" />


                        <label htmlFor="iconimage">Iconimage</label>
                        <Field name="iconimage" type="text" />


                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default AddpageFormik