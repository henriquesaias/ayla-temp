import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Grid,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";

const BasicForm: React.FC = () => {
  const howToContribute = [
    { value: 'direct', text: 'Donate directly' },
    { value: 'song', text: 'Submit a song' },
    { value: 'tickets', text: 'Percentage of tickets' },
    { value: 'royalties', text: 'Royalty share' },
    { value: 'partner', text: 'Become a partner' },
    { value: 'other', text: 'Other' }
  ]

  const validateName = (value: string) => {
    let error
    if (!value) {
      error = "Name is required"
    }
    return error
  }
  const validateEmail = (value: string) => {
    let error
    if (!value) {
      error = "Email is required"
    }
    return error
  }
  const validatePhone = (value: string) => {
    let error
    if (!value) {
      error = "Phone is required"
    }
    return error
  }

  return (
    <Formik
      initialValues={{
        name: '',
        company: '',
        email: '',
        phone: '',
        direct: false,
        song: false,
        tickets: false,
        royalties: false,
        partner: false,
        other: false,
        howOther: ''
      }}
      onSubmit={(values, actions) => {
        emailjs.send('service_avldh1k', 'template_4qep82w', values, 'user_i3doLEc81aiVPkLWcqVLx')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
        actions.setSubmitting(false);
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={6}>
            <Field name="name" validate={validateName}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input {...field} id="name" placeholder="Name" onChange={(e) => { props.handleChange(e); console.log(props.values) }} />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="company">
              {({ field, form }: any) => (
                <FormControl>
                  <FormLabel htmlFor="company">Project / Organization</FormLabel>
                  <Input {...field} id="company" placeholder="Name of project or organization" />
                  <FormErrorMessage>{form.errors.company}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email" validate={validateEmail}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input {...field} type='email' id="email" placeholder="Email address" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="phone" validate={validatePhone}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.phone && form.touched.phone}>
                  <FormLabel htmlFor="phone">Phone number</FormLabel>
                  <Input {...field} type='tel' id="phone" placeholder="Phone number with country code" />
                  <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Grid>

          <CheckboxGroup>
            <FormLabel htmlFor="phone">How would you like to contribute?</FormLabel>
            <Stack spacing={4} direction='row' wrap='wrap' mb={4}>
              {howToContribute.map(({ value, text }) => {
                return (
                  <Field key={value} name={value}>
                    {({ field }: any) => (
                      <Checkbox colorScheme="teal" {...field} name={value} value={value}>{text}</Checkbox>
                    )}
                  </Field>
                )
              })}
            </Stack>
          </CheckboxGroup>

          {props.values.other ?
            <Field name="howOther">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.how && form.touched.how} mb={4}>
                  <Input {...field} id="howOther" placeholder="What do you have in mind?" />
                  <FormErrorMessage>{form.errors.howOther}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            : ''
          }
          <Button
            mt={4}
            width='100%'
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default BasicForm