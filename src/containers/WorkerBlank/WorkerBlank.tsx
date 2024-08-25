import React from 'react'

import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import * as yup from 'yup'

import { createBlankApplicant } from '../../services/api/blank'

import { userBlankInitData } from './data'
import {
  ButtonWrapper,
  Description,
  EmailText,
  EmailWrapper,
  FirstColumnWrapper,
  InputWrapper,
  LabelText,
  NameInputWrapper,
  NamesInputWrapper,
  SecondColumnWrapper,
  Text,
  TextareaLabelWrapper,
  TextareaWrapper,
  WorkerBlankWrapper,
  WorkerFormFieldsWrapper,
} from './WorkerBlank.styles'
import { WorkerBlankFormValues } from './WorkerBlank.types'

import Button from 'components/Button'
import HelpIcon from 'components/HelpIcon'
import Input from 'components/Input'
import PhotoInput from 'components/PhotoInput/PhotoInput'
import { Title } from 'containers/Applicants'
import { LoginWrapper as WrapperRegistration } from 'containers/Login'
import { Container } from 'providers/ThemeProvider'

const DESCRIPTION_HELP =
  'Укажите, что вы умеете и чем хотели бы заниматься, а также ваш предыдущий опыт (при наличии). Описание должно содержать не более 1500 символов.'

const WorkerBlank: React.FC = () => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false)
  const [isNew, setIsNew] = React.useState<boolean>(true)
  const [blankValues, setBlankValue] = React.useState<WorkerBlankFormValues>(userBlankInitData) // userBlankData

  //* ***TODO сценарий получения заполненой анкеты пользователя
  const { mutateAsync } = useMutation(createBlankApplicant)
  const applicantHandler = async (values: WorkerBlankFormValues): Promise<void> => {
    try {
      await mutateAsync(values)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  const { values, handleChange, handleBlur, handleSubmit, errors, touched, setFieldValue, resetForm, setValues } =
    useFormik<WorkerBlankFormValues>({
      initialValues: blankValues,
      validationSchema: yup.object().shape({
        birthday: yup.date().required('Поле обязательно для заполнения'),
        // location: yup.string().required('Поле обязательно для заполнения'),
        about: yup
          .string()
          .required('Поле обязательно для заполнения')
          .min(150, 'Минимальная длинна 150 символов')
          .max(1500, 'Максимальная длинна 1500 символов')
          .matches(
            /[A-Z,a-z,А-ЯЁ,а-яё,0-9,.,\s]$/,
            `Русские и латинские буквы верхнего и нижнего регистра, цифры, символы (все)`
          ),
        // phone: yup
        //   .string()
        //   .required('Поле обязательно для заполнения')
        //   .matches(
        //     /^\s*\+?375((33\d{3}\d{2}\d{2})|(29\d{3}\d{2}\d{2})|(44\d{3}\d{2}\d{2})|(25\d{3}\d{2}\d{2})|(17\d{3}\d{2} \d{2}))\s*$/,
        //     `Некорректный ввод данных`
        //   ),
      }),
      onSubmit: (data) => {
        setIsNew(false)
        setIsEdit(false)
        setBlankValue((prev) => ({ ...prev, ...data }))
        applicantHandler(data)
      },
    })

  const deleteBlank = (): void => {
    resetForm()
    setIsNew(true)
  }

  const returnChanges = (): void => {
    setValues(blankValues)
  }

  return (
    <WrapperRegistration>
      <Container>
        <WorkerBlankWrapper>
          <Title>Моя анкета</Title>
          <form onSubmit={handleSubmit}>
            <WorkerFormFieldsWrapper>
              <FirstColumnWrapper>
                <NamesInputWrapper>
                  <LabelText>Имя Фамилия</LabelText>
                  <Text>
                    {blankValues.name} {blankValues.surname}
                  </Text>
                </NamesInputWrapper>
                <NameInputWrapper>
                  <LabelText>Имя</LabelText>
                  <Text>{blankValues.name}</Text>
                </NameInputWrapper>
                <NameInputWrapper>
                  <LabelText>Фамилия</LabelText>
                  <Text>{blankValues.surname}</Text>
                </NameInputWrapper>
                <InputWrapper>
                  <LabelText>Дата рождения *</LabelText>
                  <Input
                    name="birthday"
                    id="birthday"
                    type="date"
                    placeholder="ДД.ММ.ГГГГ"
                    value={values.birthday}
                    error={touched.birthday && !!errors.birthday}
                    helperText={errors.birthday}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={!isNew && !isEdit}
                  />
                </InputWrapper>
                <InputWrapper>
                  <LabelText>Местоположение *</LabelText>
                  {/* //***TODO Положить Select */}
                </InputWrapper>

                <TextareaWrapper>
                  <TextareaLabelWrapper>
                    <LabelText>О себе *</LabelText>
                    <HelpIcon tooltipText={DESCRIPTION_HELP} />
                  </TextareaLabelWrapper>
                  <Description>{DESCRIPTION_HELP}</Description>
                  <Input
                    name="about"
                    id="about"
                    type="textarea"
                    autoResize
                    value={values.about}
                    error={touched.about && !!errors.about}
                    helperText={errors.about}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={!isNew && !isEdit}
                  />
                </TextareaWrapper>

                <EmailWrapper>
                  <LabelText>Email</LabelText>
                  <EmailText>{blankValues.email}</EmailText>
                </EmailWrapper>

                <InputWrapper>
                  <LabelText>Телефон *</LabelText>
                  <Input
                    name="phone"
                    id="phone"
                    type="tel"
                    placeholder="+375 ХХ ХХХ ХХ ХХ"
                    value={values.phone}
                    error={touched.phone && !!errors.phone}
                    helperText={errors.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={!isNew && !isEdit}
                  />
                </InputWrapper>
              </FirstColumnWrapper>
              <SecondColumnWrapper>
                <PhotoInput
                  id="photo"
                  name="photo"
                  value={values.photo}
                  setFieldValue={setFieldValue}
                  disabled={!isNew && !isEdit}
                  description={
                    <span>Формат файла - jpg, png, bmp, не более 6Мб. К загрузке допускается только 1 файл.</span>
                  }
                />
              </SecondColumnWrapper>
            </WorkerFormFieldsWrapper>
            <ButtonWrapper>
              {(isNew || isEdit) && (
                <Button type="submit" size="extraLarge">
                  Сохранить
                </Button>
              )}
              {isEdit && (
                <Button size="large" variant="outlined" onClick={returnChanges}>
                  Отменить
                </Button>
              )}

              {!isNew && !isEdit && (
                <>
                  <Button size="extraLarge" onClick={() => setIsEdit(true)}>
                    Редактировать
                  </Button>
                  <Button size="large" variant="outlined" type="reset" onClick={deleteBlank}>
                    Удалить
                  </Button>
                </>
              )}
            </ButtonWrapper>
          </form>
        </WorkerBlankWrapper>
      </Container>
    </WrapperRegistration>
  )
}

export default WorkerBlank
