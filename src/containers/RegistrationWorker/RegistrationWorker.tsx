import React, { useReducer, useState } from 'react'

import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import * as yup from 'yup'

import { registerApplicant } from '../../services/api/auth'

import Button from 'components/Button'
import CheckBox from 'components/CheckBox'
import Input, { Tooltip } from 'components/Input'
import { FormWrapper } from 'containers/Login'
import { RegistrationWorkerFormValues } from 'containers/Registration'

const RegistrationWorker: React.FC = () => {
  const [showPassword, togglePassword] = useReducer((prev: boolean) => !prev, false)
  const [showRepeatPassword, toggleRepeatPassword] = useReducer((prev: boolean) => !prev, false)
  const [passwordTooltip, setPasswordTooltip] = useState<boolean>(false)
  const handleShowPasswordTooltip = (): void => {
    setPasswordTooltip(true)
  }
  const handleBlurPassword = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setPasswordTooltip(false)
    handleBlur(e)
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setPasswordTooltip(false)
    handleChange(e)
  }

  const { mutateAsync } = useMutation(registerApplicant)

  const registerHandler = async (values: RegistrationWorkerFormValues, { setSubmitting }: any): Promise<void> => {
    try {
      await mutateAsync(values)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setSubmitting(false)
    }
  }

  const { values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, dirty } =
    useFormik<RegistrationWorkerFormValues>({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        confirmReg: true,
        confirmAge: false,
      },
      validationSchema: yup.object().shape({
        firstName: yup
          .string()
          .required('Поле обязательно для заполнения')
          .min(1, 'Минимальная длинна имени 1 символ')
          .max(30, 'Максимальная длинна имени 30 символов')
          .matches(/^[А-ЯЁ,а-яё,\-,/]*$/, 'Допустимы русские буквы, символ «-»'),
        lastName: yup
          .string()
          .required('Поле обязательно для заполнения')
          .min(1, 'Минимальная длинна фамилии 1 символ')
          .max(30, 'Максимальная длинна фамилии 30 символов')
          .matches(/^[А-ЯЁ,а-яё,\-,/]*$/, 'Допустимы русские буквы, символ «-»'),
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
          .oneOf([yup.ref('password')], 'Пароли не совпадают'),
        confirmReg: yup.boolean().oneOf([true], 'Message'),
        confirmAge: yup.boolean().oneOf([true], 'Message'),
      }),
      onSubmit: registerHandler,
    })

  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <Input
          name="firstName"
          id="firstName"
          label="Имя"
          type="text"
          placeholder="Ваше имя"
          value={values.firstName}
          error={touched.firstName && !!errors.firstName}
          helperText={errors.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          name="lastName"
          id="lastName"
          label="Фамилия"
          type="text"
          placeholder="Ваша фамилия"
          value={values.lastName}
          error={touched.lastName && !!errors.lastName}
          helperText={errors.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
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
          id="confirmAge"
          name="confirmAge"
          checked={values.confirmAge}
          onChange={handleChange}
          gray
          label="Я подтверждаю, что мне 14-17 лет. Подробнее"
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

export default RegistrationWorker
