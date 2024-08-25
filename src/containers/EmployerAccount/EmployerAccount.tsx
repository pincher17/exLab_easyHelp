import React, { useEffect } from 'react'

import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import * as yup from 'yup'

import {
  InputAccountWrapper,
  WorkerAccountFormFieldsWrapper,
  FirstColumnWrapper,
  SecondColumnWrapper,
  EmailWrapper,
  TextValue,
} from './EmployerAccount.styles'

import Button from 'components/Button'
import HelpIcon from 'components/HelpIcon'
import Input, { Tooltip } from 'components/Input'
import PhotoInput from 'components/PhotoInput/PhotoInput'
import { ButtonWrapper, LabelText } from 'containers/WorkerBlank'
import { fieldSchema } from 'helpers/fieldSchema'
import { EmployerType } from 'services/api/employerInfo/argument.types'
import { updateEmployerInfo } from 'services/api/updateEmployerInfo'
import { EmployerStoreType } from 'store/employerInfo'
import useEmployerInfoStore from 'store/employerInfo/employerInfo.store'

const DESCRIPTION_HELP = 'Для смены email вам необходимо обратиться в техподдержку'

const EmployerAccount: React.FC = () => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false)
  const [isNew, setIsNew] = React.useState<boolean>(true)
  const [showPassword, togglePassword] = React.useReducer((prev: boolean) => !prev, false)
  const [showRepeatPassword, toggleRepeatPassword] = React.useReducer((prev: boolean) => !prev, false)
  const [passwordTooltip, setPasswordTooltip] = React.useState<boolean>(false)
  const employerInfoStore = useEmployerInfoStore((store) => store)
  const setEmployerInfo = useEmployerInfoStore((store) => store.setEmployerInfo)

  const { mutateAsync } = useMutation(updateEmployerInfo, {
    onSuccess: () => {
      setEmployerInfo(values as EmployerType)
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

  const { values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue, setValues, setErrors } =
    useFormik<EmployerStoreType>({
      initialValues: employerInfoStore,
      validationSchema: yup.object().shape({
        nameCompany: fieldSchema({
          required: true,
          minLength: 1,
          maxLength: 100,
          matches: /^[А-ЯЁ,а-яё,0-9]*$/,
        }),
        // yup
        // .string()
        // .required('Поле обязательно для заполнения')
        // .min(1, 'Минимальная длинна названия 1 символ')
        // .max(100, 'Максимальная длинна названия 100 символов')
        // .matches(/^[А-ЯЁ,а-яё,0-9]*$/, 'Допустимы символы и русские буквы'),
        // location: yup.string().required('Поле обязательно для заполнения'),
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
      }),
      onSubmit: (data) => {
        setIsNew(false)
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
    setValues(employerInfoStore)
    setIsEdit(false)
  }

  useEffect(() => {
    setValues(employerInfoStore)
    setTimeout(() => {
      setErrors({})
    }, 0)
  }, [employerInfoStore, setValues, setErrors])

  return (
    <form onSubmit={handleSubmit}>
      <WorkerAccountFormFieldsWrapper>
        <FirstColumnWrapper>
          <InputAccountWrapper>
            <LabelText>Компания *</LabelText>
            <Input
              name="nameCompany"
              id="nameCompany"
              type="text"
              placeholder="Название вашей компании"
              value={values.nameCompany}
              error={touched.nameCompany && !!errors.nameCompany}
              helperText={errors.nameCompany}
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
            <TextValue>{values.email}</TextValue>
          </EmailWrapper>
          <InputAccountWrapper>
            <LabelText>Город *</LabelText>
            <TextValue>{values.location}</TextValue>
            {/* //***TODO Положить Select */}
          </InputAccountWrapper>
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
        </FirstColumnWrapper>
        <SecondColumnWrapper>
          <PhotoInput
            id="avatar"
            name="avatar"
            add="логотип"
            value={null}
            setFieldValue={setFieldValue}
            disabled={!isNew && !isEdit}
            description={<span>Формат файла - jpg, png, bmp, не более 6Мб. К загрузке допускается только 1 файл.</span>}
          />
        </SecondColumnWrapper>
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

export default EmployerAccount
