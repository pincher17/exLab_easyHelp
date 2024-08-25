/* eslint-disable no-console */
import React, { useReducer, useState } from 'react'

import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import * as yup from 'yup'

import { registerEmployer } from '../../services/api/auth'

import Button from 'components/Button'
import CheckBox from 'components/CheckBox'
import Input, { Tooltip } from 'components/Input'
import { FormWrapper } from 'containers/Login'
import { RegistrationEmployerFormValues } from 'containers/Registration'

const RegistrationHirer: React.FC = () => {
  const [showPassword, togglePassword] = useReducer((prev: boolean) => !prev, false)
  const [showRepeatPassword, toggleRepeatPassword] = useReducer((prev: boolean) => !prev, false)
  const [passwordTooltip, setPasswordTooltip] = useState<boolean>(false)
  const [companyNameTooltip, setCompanyNameTooltip] = useState<boolean>(false)
  const handleShowCompanyNameTooltip = (): void => {
    setCompanyNameTooltip(true)
  }
  const handleShowPasswordTooltip = (): void => {
    setPasswordTooltip(true)
  }

  const handleBlurPassword = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setPasswordTooltip(false)
    handleBlur(e)
  }
  const handleBlurCompanyName = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setCompanyNameTooltip(false)
    handleBlur(e)
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setPasswordTooltip(false)
    handleChange(e)
  }
  const handleChangeCompanyName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setCompanyNameTooltip(false)
    handleChange(e)
  }

  const { mutateAsync } = useMutation(registerEmployer)

  const registerHandler = async (values: any, { setSubmitting }: any): Promise<void> => {
    try {
      await mutateAsync(values)
    } catch (e) {
      console.error(e)
    } finally {
      setSubmitting(false)
    }
  }

  const { values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, dirty } =
    useFormik<RegistrationEmployerFormValues>({
      initialValues: {
        companyName: '',
        city: '',
        email: '',
        password: '',
        repeatPassword: '',
        confirmReg: false,
      },
      validationSchema: yup.object().shape({
        companyName: yup
          .string()
          .required('Поле обязательно для заполнения')
          .min(1, 'Минимальная длинна названия 1 символ')
          .max(100, 'Максимальная длинна названия 100 символов')
          .matches(/^[А-ЯЁ,а-яё,0-9]*$/, 'Допустимы символы и русские буквы'),
        city: yup.string().required('Поле обязательно для заполнения'),
        email: yup
          .string()
          .required('Поле обязательно для заполнения')
          .min(5, 'Минимальная длинна 5 символов')
          .max(256, 'Максимальная длинна 256 символов')
          .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Email введен неверно'),
        password: yup
          .string()
          .required('Поле обязательно для заполнения')
          .min(8, 'Минимальная длинна пароля 8 символов')
          .max(128, 'Максимальная длинна пароля 128 символов')
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,128}/, 'Допустимые символы «0...9»,  «A...Z», «a...z» '),
        repeatPassword: yup
          .string()
          .required('Поле обязательно для заполнения')
          .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
        confirmReg: yup.boolean().oneOf([true], 'Message'),
      }),
      onSubmit: registerHandler,
    })

  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <Input
          name="companyName"
          id="companyName"
          label="Компания"
          type="text"
          placeholder="Название вашей компании"
          value={values.companyName}
          error={touched.companyName && !!errors.companyName}
          helperText={errors.companyName}
          onFocus={handleShowCompanyNameTooltip}
          onChange={handleChangeCompanyName}
          onBlur={handleBlurCompanyName}
        >
          <Tooltip tooltip={companyNameTooltip}>
            Укажите юридическое или торговое название компании. Если вы ИП или частное лицо, укажите имя и фамилию
          </Tooltip>
        </Input>
        <Input
          name="email"
          id="email"
          label="E-mail"
          type="text"
          placeholder="Ваш email"
          value={values.email}
          error={touched.email && !!errors.email}
          helperText={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          name="city"
          id="login"
          label="Ваш населенный пункт"
          type="text"
          placeholder="Введите или выберите из списка"
          value={values.city}
          error={touched.city && !!errors.city}
          helperText={errors.city}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          name="password"
          id="password"
          label="Пароль"
          type={showPassword ? 'text' : 'password'}
          value={values.password}
          error={touched.password && !!errors.password}
          helperText={errors.password}
          visibilityIcon
          visibility={showPassword}
          onFocus={handleShowPasswordTooltip}
          onBlur={handleBlurPassword}
          onChangeVisibility={togglePassword}
          onChange={handleChangePassword}
        >
          <Tooltip tooltip={passwordTooltip}>
            Пароль должен содержать не менее восьми знаков, включать буквы, цифры и специальные символы
          </Tooltip>
        </Input>
        <Input
          name="repeatPassword"
          id="repeatPassword"
          label="Повторный ввод пароля"
          type={showRepeatPassword ? 'text' : 'password'}
          value={values.repeatPassword}
          error={touched.repeatPassword && !!errors.repeatPassword}
          helperText={errors.repeatPassword}
          visibilityIcon
          visibility={showRepeatPassword}
          onBlur={handleBlur}
          onChangeVisibility={toggleRepeatPassword}
          onChange={handleChange}
        />
        <CheckBox
          id="confirmReg"
          name="confirmReg"
          checked={values.confirmReg}
          onChange={handleChange}
          gray
          label="Я соглашаюсь с Правилами использования сервиса, а также с передачей и обработкой моих данных."
        />
        <Button disabled={!isValid || !dirty} type="submit" size="extraLarge">
          Зарегистрироваться
        </Button>
      </FormWrapper>
    </form>
  )
}

export default RegistrationHirer
