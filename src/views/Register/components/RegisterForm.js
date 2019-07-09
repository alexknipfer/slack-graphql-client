import React, { useContext } from 'react'
import { FormField, FormInput, FormButton, Form } from 'semantic-ui-react'
import { Formik } from 'formik'

import { AuthContext } from '../../../store/Auth/context'
import { InputSpacer } from './style'

export function RegisterForm() {
  const { register } = useContext(AuthContext)

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: ''
      }}
      onSubmit={async values => {
        try {
          await register(values.email, values.password, values.name)
        } catch (err) {
          console.log('ERROR REGISTERING: ', err)
        }
      }}
    >
      {({ values, handleBlur, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FormField>
            <label>Email</label>
            <FormInput
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              fluid
            />
          </FormField>
          <InputSpacer />
          <FormField>
            <label>Name</label>
            <FormInput
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              fluid
            />
          </FormField>
          <InputSpacer />
          <FormField>
            <label>Password</label>
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              fluid
            />
          </FormField>
          <InputSpacer />
          <FormButton type="submit">Register</FormButton>
        </Form>
      )}
    </Formik>
  )
}
