import React, { FC, useState } from 'react'

import { ReactComponent as DeleteIcon } from '../../assets/icons/trash.svg'
import noAvatar from '../../assets/img/noAvatar.png'

import { isLarge } from './helpers/isLarge'
import { isString } from './helpers/isString'
import { AvatarPreview, PhotoInputNoAvatarStyled, PhotoInputStyled, PhotoInputWrapper } from './PhotoInput.styles'
import { PhotoInputProps, PhotoInputState } from './PhotoInput.types'

import Button from 'components/Button'

const PhotoInput: FC<PhotoInputProps> = ({
  name,
  id,
  value,
  disabled = false,
  add = 'Добавить фото',
  description,
  setFieldValue,
}) => {
  const [file, setFile] = useState<PhotoInputState>({
    file: null,
    imagePreviewUrl: null,
    isBig: false,
  })

  const fileUpload = React.useRef<HTMLInputElement | null>(null)

  const showFileUploadWindow = (): void => {
    if (fileUpload) {
      fileUpload.current?.click()
    }
  }

  const deleteFileUpload = (): void => {
    setFieldValue(name, null)
    setFile((prev) => ({ ...prev, file: null, imagePreviewUrl: null }))
  }

  React.useEffect(() => {
    if (value) {
      const reader = new FileReader()

      reader.onload = () => {
        setFile((prev) => ({ ...prev, file: value, imagePreviewUrl: reader.result }))
      }
      reader.readAsDataURL(value)
    } else {
      setFile((prev) => ({ ...prev, file: null, imagePreviewUrl: null }))
    }
  }, [value])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      const file = e.target.files[0]

      if (isLarge(file.size)) {
        setFile((prev) => ({ ...prev, file: null, imagePreviewUrl: null, isBig: true }))
      } else {
        setFieldValue(name, file)
        setFile((prev) => ({ ...prev, isBig: false }))
      }
    }
  }

  return (
    <PhotoInputWrapper hidden={file.isBig}>
      <PhotoInputStyled htmlFor={id} hidden={file.isBig}>
        <input
          type="file"
          id={id}
          name={name}
          ref={fileUpload}
          value={value ? `C:\\fakepath\\${value.name}` : ''}
          accept=".jpg, .png, .bmp"
          onChange={handleImageChange}
          disabled={disabled}
        />
        {isString(file.imagePreviewUrl) ? (
          <AvatarPreview
            src={file.imagePreviewUrl}
            alt={file.file?.name || ''}
            onClick={() => showFileUploadWindow()}
          />
        ) : (
          <PhotoInputNoAvatarStyled>
            <img src={noAvatar} alt="Файл не выбран" />
            <h4>Добавить {add}</h4>
            {description}
          </PhotoInputNoAvatarStyled>
        )}
      </PhotoInputStyled>
      <p>Размер файла превышает 6Мб</p>
      {file.imagePreviewUrl && (
        <Button size="extraLarge" variant="text" onClick={() => deleteFileUpload()}>
          <span>Удалить {add}</span>
          <DeleteIcon />
        </Button>
      )}
    </PhotoInputWrapper>
  )
}

export default PhotoInput
