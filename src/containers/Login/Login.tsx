import React, { useEffect, useReducer, useState } from 'react'

import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import {
  Heading,
  Wrapper,
  LoginWrapper,
  FormWrapper,
  SubmitButtonWrapper,
  LinkStyle,
  TooltipForEmail,
} from './Login.styles'
import { LoginFormValues } from './Login.types'

import Button from 'components/Button'
import Input, { Tooltip } from 'components/Input'
import { Container } from 'providers/ThemeProvider'
import { loginUser } from 'services/api/auth'
import useUserStore from 'store/user/user.store'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const userToken = useUserStore((state) => state.token)
  const signIn = useUserStore((state) => state.signIn)
  const [showPassword, toggle] = useReducer((prev: boolean) => !prev, false)
  const [tooltip, toggleTooltip] = useReducer((prev: boolean) => !prev, false)
  const [tooltipForEmail, setToggleTooltipForEmail] = useState<boolean>(false)
  const handleShowTooltipForEmail = (): void => {
    setToggleTooltipForEmail(true)
  }

  const { mutateAsync } = useMutation(loginUser)

  useEffect(() => {
    if (userToken) {
      navigate('/vacancies')
    }
  }, [userToken, navigate])

  const loginHandler = async (values: any, { setSubmitting }: any): Promise<void> => {
    const payload = {
      email: values.email,
      password: values.password,
    }

    try {
      const data = await mutateAsync(payload)

      signIn(data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setSubmitting(false)
    }
  }

  const { values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, dirty } =
    useFormik<LoginFormValues>({
      initialValues: {
        email: '',
        password: '',
        rememberUser: false,
      },
      validationSchema: yup.object().shape({
        email: yup
          .string()
          .required('Поле обязательно для заполнения')
          .min(5, 'Минимальная длинна 5 символов')
          .max(256, 'Максимальная длинна 256 символов')
          .matches(
            /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-z]{2,6}$/,
            'Email введен неверно'
          ),
        password: yup
          .string()
          .required('Поле обязательно для заполнения')
          .min(8, 'Минимальная длинна пароля 8 символов')
          .max(128, 'Максимальная длинна пароля 128 символов')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,128}/,
            'Допустимые символы «0...9»,  «A...Z», «a...z»,«-,*,_,/» '
          ),
      }),
      onSubmit: loginHandler,
    })
  const handleBlurPassword = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    toggleTooltip()
    handleBlur(e)
  }
  const handleBlurEmail = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    handleBlur(e)
    setToggleTooltipForEmail(false)
  }
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    handleChange(e)
    setToggleTooltipForEmail(false)
  }

  return (
    <LoginWrapper>
      <Container>
        <Wrapper>
          <Heading>Авторизация</Heading>
          <form onSubmit={handleSubmit}>
            <FormWrapper>
              <Input
                name="email"
                id="email"
                label="E-mail"
                type="text"
                placeholder="Введите e-mail"
                value={values.email}
                error={touched.email && !!errors.email}
                helperText={errors.email}
                onChange={handleChangeEmail}
                onBlur={handleBlurEmail}
                onFocus={handleShowTooltipForEmail}
              >
                <TooltipForEmail tooltip={tooltipForEmail}>
                  Введите адрес электронной почты, указанный при регистрации
                </TooltipForEmail>
              </Input>

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
                onFocus={toggleTooltip}
                onBlur={handleBlurPassword}
                onChangeVisibility={toggle}
                onChange={handleChange}
              >
                <Tooltip tooltip={tooltip}>
                  Пароль должен содержать не менее 8 символов, минимум одну заглавную, одну строчную буквы, одну цифру и
                  специальный символ.
                </Tooltip>
              </Input>
              <SubmitButtonWrapper>
                <Button type="submit" variant="contained" size="large" disabled={!isValid || !dirty}>
                  Войти
                </Button>
                {/* <RememberMeWrapper>
                  <CheckBox
                    id="rememberUser"
                    name="rememberUser"
                    label="Запомнить данные для входа"
                    checked={values.rememberUser}
                    onChange={handleChange}
                  />
                  <HelpIcon tooltipText="Ваши учетные данные сохранятся в браузере, чтобы автоматически входить при следующих посещениях сайта" />
                </RememberMeWrapper> */}
              </SubmitButtonWrapper>
            </FormWrapper>
          </form>
          <p>
            Еще не зарегистрированы?
            <LinkStyle to="/register">Регистрация</LinkStyle>
          </p>
        </Wrapper>
      </Container>
    </LoginWrapper>
  )
}

export default Login
