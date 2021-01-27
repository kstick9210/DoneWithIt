import React from 'react'

import { Formik } from 'formik'

export default function AppForm({ initalValues, onSubmit, validationSchema, children }) {
    return (
        <Formik
            initialValues={initalValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}
