import React, { useState } from 'react'

import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import * as yup from 'yup'

import SuccessNotif from '../../components/SuccessNotif/SuccessNotif'
import { createVacancy } from '../../services/api/vacancy'

import {
  InputInner,
  InputWrapper,
  JobCreationWrapper,
  NameInput,
  RadioButtonWrapper,
  ShowLink,
  ButtonWrapper,
  Description,
  LinkDescription,
  TextareaWrapper,
  WrapperBurgerCity,
  NameInputCompany,
  NameInputSalary,
  InputInnerSalary,
  NameInputDescription,
  DescriptionHelpIconWrapper,
} from './JobCreation.styles'
import { JobCreationFormValues } from './JobCreation.types'
import WindowJobPreview from './WindowJobPreview'

import { ReactComponent as BurgerCity } from 'assets/icons/burgerCity.svg'
import Button from 'components/Button'
import ExitJobCreatNotif from 'components/ExitJobCreatNotif'
import HelpIcon from 'components/HelpIcon'
import Input from 'components/Input'
import RadioButton from 'components/RadioButton'
import { FIELDS_HELPER_TEXT, FIELDS_REG } from 'constants/formFields'
import { Heading, LoginWrapper as WrapperRegistration } from 'containers/Login'
import { Container } from 'providers/ThemeProvider'

const JobCreation: React.FC = () => {
  const [showJobPreview, setShowJobPreview] = useState<boolean>(false)
  const [showSuccessNotif, setShowSuccessNotif] = useState<boolean>(false)
  const [showExitJobCreatNotif, setShowExitJobCreatNotif] = useState<boolean>(false)

  const openJobPreview = (): void => {
    setShowJobPreview(true)
    document.body.style.overflow = 'hidden'
  }

  const closeJobPreview = (): void => {
    setShowJobPreview(false)
    document.body.style.overflow = 'auto'
  }

  const openSuccessNotif = (): void => {
    setShowSuccessNotif(true)
  }

  const closeSuccessNotif = (): void => {
    setShowSuccessNotif(false)
  }

  // const openExitJobCreatNotif = (event: React.MouseEvent<HTMLElement>) => {
  //   setShowExitJobCreatNotif(true)
  // }

  const closeExitJobCreatNotif = (): void => {
    setShowExitJobCreatNotif(false)
  }

  const { mutateAsync } = useMutation(createVacancy)

  const createVacancyHandler = async (values: JobCreationFormValues): Promise<void> => {
    try {
      await mutateAsync(values)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  const { values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue } =
    useFormik<JobCreationFormValues>({
      initialValues: {
        jobTitle: '',
        salary: '',
        jobDescription: '',
        cityJob: '',
        contactPerson: '',
        email: '',
        phone: '',
        showPhone: 'show',
      },
      validationSchema: yup.object().shape({
        jobTitle: yup
          .string()
          .required(FIELDS_HELPER_TEXT.required)
          .min(1, 'Минимальная длинна 1 символ')
          .max(256, 'Максимальная длинна 256 символов')
          .matches(FIELDS_REG.jobTitle, FIELDS_HELPER_TEXT.matches),
        salary: yup
          .string()
          .required(FIELDS_HELPER_TEXT.required)
          .min(1, 'Минимальная длинна 1 символ')
          .max(10, 'Максимальная длинна 10 символов')
          .matches(FIELDS_REG.salary, FIELDS_HELPER_TEXT.matches),
        jobDescription: yup
          .string()
          .required(FIELDS_HELPER_TEXT.required)
          .min(150, 'Минимальная длинна 150 символов')
          .max(1500, 'Максимальная длинна 1500 символов')
          .matches(
            FIELDS_REG.description,
            `Русские и латинские буквы верхнего и нижнего регистра, цифры от 0 до 9, символы (все)`
          ),
        cityJob: yup.string().required(FIELDS_HELPER_TEXT.required),
        contactPerson: yup
          .string()
          .required(FIELDS_HELPER_TEXT.required)
          .min(1, 'Минимальная длинна 1 символ')
          .max(100, 'Максимальная длинна 100 символов')
          .matches(FIELDS_REG.contactPerson, FIELDS_HELPER_TEXT.matches),
        email: yup
          .string()
          .required(FIELDS_HELPER_TEXT.required)
          .min(1, 'Минимальная длинна 1 символ')
          .max(256, 'Максимальная длинна 256 символов')
          .matches(FIELDS_REG.email, 'Email введен неверно'),
        // phone: yup.string().matches(FIELDS_REG.phone, FIELDS_HELPER_TEXT.matches),
        // showPhone: yup.string().required(''),
      }),
      onSubmit: createVacancyHandler,
    })

  return (
    <WrapperRegistration>
      <Container>
        <JobCreationWrapper>
          <Heading>новая вакансия</Heading>

          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <NameInput>Наименование должности *</NameInput>
              <InputInner>
                <Input
                  name="jobTitle"
                  id="jobTitle"
                  type="text"
                  value={values.jobTitle}
                  error={touched.jobTitle && !!errors.jobTitle}
                  helperText={errors.jobTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputInner>
            </InputWrapper>

            <InputWrapper>
              <NameInputSalary>Заработная плата *</NameInputSalary>
              <InputInnerSalary>
                <Input
                  name="salary"
                  id="salary"
                  type="text"
                  placeholder="До"
                  value={values.salary}
                  label="бел.руб"
                  error={touched.salary && !!errors.salary}
                  helperText={errors.salary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputInnerSalary>
            </InputWrapper>

            <TextareaWrapper>
              <NameInputDescription>
                <span>Описание вакансии *</span>
                <HelpIcon>
                  <DescriptionHelpIconWrapper>
                    <Description>{FIELDS_HELPER_TEXT.vacancyDescription}</Description>
                    <LinkDescription to="/">Подробнее о правилах размещения вакансий</LinkDescription>
                  </DescriptionHelpIconWrapper>
                </HelpIcon>
              </NameInputDescription>
              <Description>{FIELDS_HELPER_TEXT.vacancyDescription}</Description>
              <LinkDescription to="/">Подробнее о правилах размещения вакансий</LinkDescription>
              <Input
                name="jobDescription"
                id="jobDescription"
                type="textarea"
                value={values.jobDescription}
                error={touched.jobDescription && !!errors.jobDescription}
                helperText={errors.jobDescription}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </TextareaWrapper>

            <InputWrapper>
              <NameInput>Название организации</NameInput>
              <InputInner>
                <NameInputCompany>Эврика</NameInputCompany>
              </InputInner>
            </InputWrapper>

            <InputWrapper>
              <NameInput>
                Где ищете соискателя *
                <HelpIcon tooltipText="Нужно указать ближайший город. Уточнение по месту осуществления работ Вы можете указать при описании вакансии." />
              </NameInput>

              <InputInner>
                <Input
                  name="cityJob"
                  id="cityJob"
                  type="text"
                  placeholder="Укажите города вакансии"
                  value={values.cityJob}
                  error={touched.cityJob && !!errors.cityJob}
                  helperText={errors.cityJob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <WrapperBurgerCity>
                    <BurgerCity />
                  </WrapperBurgerCity>
                </Input>
              </InputInner>
            </InputWrapper>

            <InputWrapper>
              <NameInput>Контактное лицо *</NameInput>
              <InputInner>
                <Input
                  name="contactPerson"
                  id="contactPerson"
                  type="text"
                  placeholder="Ваше имя и фамилия"
                  value={values.contactPerson}
                  error={touched.contactPerson && !!errors.contactPerson}
                  helperText={errors.contactPerson}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputInner>
            </InputWrapper>

            <InputWrapper>
              <NameInput>Email *</NameInput>
              <InputInner>
                <Input
                  name="email"
                  id="email"
                  type="text"
                  placeholder="name@gmail.com"
                  value={values.email}
                  error={touched.email && !!errors.email}
                  helperText={errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputInner>
            </InputWrapper>

            <InputWrapper>
              <NameInput>Телефон</NameInput>
              <InputInner>
                <Input
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="+375 ХХ ХХХ ХХ ХХ"
                  value={values.phone}
                  error={touched.phone && !!errors.phone}
                  helperText={errors.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <RadioButtonWrapper>
                  <RadioButton
                    id="Показывать в вакансии"
                    onChange={() => setFieldValue('showPhone', 'show')}
                    value="show"
                    selectedOption={values.showPhone}
                    label="Показывать в вакансии"
                  />
                  <RadioButton
                    id="Скрыть"
                    onChange={() => setFieldValue('showPhone', 'hide')}
                    value="hide"
                    selectedOption={values.showPhone}
                    label="Скрыть"
                  />
                </RadioButtonWrapper>
              </InputInner>
            </InputWrapper>

            <ButtonWrapper>
              <Button type="submit" onClick={openSuccessNotif} size="large">
                Сохранить
              </Button>
              <ShowLink to="" onClick={openJobPreview}>
                Просмотреть
              </ShowLink>
            </ButtonWrapper>
          </form>

          {showExitJobCreatNotif && <ExitJobCreatNotif closeExitJobCreatNotif={closeExitJobCreatNotif} />}

          {showSuccessNotif && <SuccessNotif closeSuccessNotif={closeSuccessNotif} />}
          {showJobPreview && (
            <WindowJobPreview
              jobTitle={values.jobTitle}
              cityJob={values.cityJob}
              contactPerson={values.contactPerson}
              email={values.email}
              jobDescription={values.jobDescription}
              phone={values.phone}
              salary={values.salary}
              showPhone={values.showPhone}
              closeJobPreview={closeJobPreview}
            />
          )}
        </JobCreationWrapper>
      </Container>
    </WrapperRegistration>
  )
}

export default JobCreation
