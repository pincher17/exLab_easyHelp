import React, { useEffect } from 'react'

import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import * as yup from 'yup'

import { ButtonWrapper, ColumnWrapper } from './WorkerAccount.styles'

import Button from 'components/Button'
import HelpIcon from 'components/HelpIcon'
import Input, { Tooltip } from 'components/Input'
import { EmailWrapper, InputAccountWrapper, WorkerAccountFormFieldsWrapper } from 'containers/EmployerAccount'
import { EmailText, LabelText } from 'containers/WorkerBlank'
import { fieldSchema } from 'helpers/fieldSchema'
import { ApplicantType } from 'services/api/applicantInfo/argument.types'
import { updateApplicantInfo } from 'services/api/updateApplicantInfo'
import { ApplicantStoreType } from 'store/applicantInfo'
import useApplicantInfoStore from 'store/applicantInfo/applicantInfo.store'

const DESCRIPTION_HELP = 'Для смены email вам необходимо обратиться в техподдержку'

const WorkerAccount: React.FC = () => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false)
  const [showPassword, togglePassword] = React.useReducer((prev: boolean) => !prev, false)
  const [showRepeatPassword, toggleRepeatPassword] = React.useReducer((prev: boolean) => !prev, false)
  const [passwordTooltip, setPasswordTooltip] = React.useState<boolean>(false)
  const applicantInfo = useApplicantInfoStore((store) => store)
  const setApplicantInfo = useApplicantInfoStore((store) => store.setApplicantInfo)

  const { mutateAsync } = useMutation(updateApplicantInfo, {
    onSuccess: () => {
      setApplicantInfo(values as ApplicantType)
    },
  })

  const updateHandler = async (data: any): Promise<void> => {
    try {
      await mutateAsync(data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  const { values, handleChange, handleBlur, handleSubmit, errors, touched, setValues, setErrors } =
    useFormik<ApplicantStoreType>({
      initialValues: applicantInfo,
      validationSchema: yup.object().shape({
        firstName: fieldSchema({
          required: true,
          minLength: 2,
          maxLength: 128,
          matches: /^[А-ЯЁ,а-яё,\-,/]*$/,
        }),
        // yup
        //   .string()
        //   .required('Поле обязательно для заполнения')
        //   .min(1, 'Минимальная длинна имени 1 символ')
        //   .max(30, 'Максимальная длинна имени 30 символов')
        //   .matches(/^[А-ЯЁ,а-яё,\-,/]*$/, 'Допустимы русские буквы, символ «-»'),
        lastName: fieldSchema({
          required: true,
          minLength: 3,
          maxLength: 128,
          matches: /^[А-ЯЁ,а-яё,\-,/]*$/,
        }),

        // yup
        //   .string()
        //   .required('Поле обязательно для заполнения')
        //   .min(1, 'Минимальная длинна фамилии 1 символ')
        //   .max(30, 'Максимальная длинна фамилии 30 символов')
        //   .matches(/^[А-ЯЁ,а-яё,\-,/]*$/, 'Допустимы русские буквы, символ «-»'),
        password: yup
          .string()
          .required('Поле обязательно для заполнения')
          .min(8, 'Минимальная длинна пароля 8 символов')
          .max(128, 'Максимальная длинна пароля 128 символов')
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,128}/, 'Допустимые символы «0...9»,  «A...Z», «a...z» '),
        repeatPassword: yup
          .string()
          .required('Поле обязательно для заполнения')
          .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
          .nullable(),
      }),
      onSubmit: (data) => {
        setIsEdit(false)
        // setBlankValue((prev) => ({ ...prev, ...data }))
        updateHandler(data)
      },
    })

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

  const returnChanges = (): void => {
    setValues(applicantInfo)
    setIsEdit(false)
  }

  useEffect(() => {
    setValues(applicantInfo)
    setTimeout(() => {
      setErrors({})
    }, 0)
  }, [applicantInfo, setValues, setErrors])

  return (
    <form onSubmit={handleSubmit}>
      <WorkerAccountFormFieldsWrapper>
        <ColumnWrapper>
          <InputAccountWrapper>
            <LabelText>Имя</LabelText>
            <Input
              name="firstName"
              id="firstName"
              type="text"
              value={values.firstName}
              error={touched.firstName && !!errors.firstName}
              helperText={errors.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={!isEdit}
            />
          </InputAccountWrapper>
          <InputAccountWrapper>
            <LabelText>Фамилия</LabelText>
            <Input
              name="lastName"
              id="lastName"
              type="text"
              value={values.lastName}
              error={touched.lastName && !!errors.lastName}
              helperText={errors.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={!isEdit}
            />
          </InputAccountWrapper>
          <EmailWrapper>
            <LabelText>
              Email
              <HelpIcon tooltipText={DESCRIPTION_HELP} />
              {/* <Description>{DESCRIPTION_HELP}</Description>
                <LinkDescription to={'#'}> editor@easyhelp.by</LinkDescription>
              </HelpIcon>                   */}
            </LabelText>
            <EmailText>{values.email}</EmailText>
          </EmailWrapper>
          <InputAccountWrapper>
            <LabelText>Пароль *</LabelText>
            <Input
              name="password"
              id="password"
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
              disabled={!isEdit}
            >
              <Tooltip tooltip={passwordTooltip}>
                Для смены пароля необходимо ввести новый пароль в данное поле и в поле «Подтвердить пароль»
              </Tooltip>
            </Input>
          </InputAccountWrapper>
          <InputAccountWrapper>
            <LabelText>Подтвердить пароль *</LabelText>
            <Input
              name="repeatPassword"
              id="repeatPassword"
              type={showRepeatPassword ? 'text' : 'password'}
              value={values.repeatPassword}
              error={touched.repeatPassword && !!errors.repeatPassword}
              helperText={errors.repeatPassword}
              visibilityIcon
              visibility={showRepeatPassword}
              onBlur={handleBlur}
              onChangeVisibility={toggleRepeatPassword}
              onChange={handleChange}
              disabled={!isEdit}
            />
          </InputAccountWrapper>
        </ColumnWrapper>
      </WorkerAccountFormFieldsWrapper>
      <ButtonWrapper>
        {!isEdit && (
          <Button size="extraLarge" onClick={() => setIsEdit(true)}>
            Изменить
          </Button>
        )}
        {isEdit && (
          <>
            <Button size="extraLarge" type="submit">
              Сохранить
            </Button>
            <Button size={177} variant="outlined" onClick={returnChanges}>
              Выйти
            </Button>
          </>
        )}
      </ButtonWrapper>
    </form>
  )
}

export default WorkerAccount
