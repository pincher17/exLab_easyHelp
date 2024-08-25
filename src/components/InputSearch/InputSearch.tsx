import React, { useEffect, useRef, useState } from 'react'

import {
  Cities,
  City,
  Label,
  List,
  SelectedCities,
  Wrapper,
  InputWrapper,
  OverallInput,
  WrapperRegion,
} from './InputSearch.styles'
import { InputSearchProps, Option } from './InputSearch.types'

import { ReactComponent as IconCloseList } from 'assets/icons/arrowDown.svg'
import { ReactComponent as IconOpenList } from 'assets/icons/arrowRight.svg'
import { ReactComponent as IconClose } from 'assets/icons/Cross.svg'
import CheckBox from 'components/CheckBox'
import Input from 'components/Input/Input'

const InputSearch: React.FC<InputSearchProps> = ({ options, onChangeCity, selectedCities }) => {
  const [searchText, setSearchText] = useState('')
  const [placeholder, setPlaceholder] = useState('Пожалуйста, выберите из списка')
  const [showCity, setShowCity] = useState<string[]>([])
  const [listSearch, setListSearch] = useState<boolean>(false)
  const cityRef = useRef<HTMLDivElement>(null)
  const [openListCity, setOpenListCity] = useState<string | boolean>('')
  const listRef = useRef<HTMLDivElement>(null)

  const toggleList = (): void => {
    setListSearch(true)
  }

  useEffect(() => {
    const handleClickOutsideList = (event: any): void => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setListSearch(false)
      }
    }

    document.addEventListener('click', handleClickOutsideList)

    return () => {
      document.removeEventListener('click', handleClickOutsideList)
    }
  }, [])

  const handleCityToggle = (city: string): void => {
    if (openListCity === city) {
      setOpenListCity('')
    } else {
      setOpenListCity(city)
    }
  }

  useEffect(() => {
    setShowCity(selectedCities)
    if (selectedCities.length === 0) {
      setPlaceholder('Пожалуйста, выберите из списка')
    } else {
      setPlaceholder('')
    }
  }, [selectedCities])

  const changeSearchText = (e: any): void => {
    setSearchText(e.target.value)
    if (e.target.value.length > 1) {
      setOpenListCity(true)
    } else {
      setOpenListCity('')
    }
  }

  const handleCitySelect = (selectedOption: string): void => {
    const newValue = [...selectedCities, selectedOption]

    onChangeCity(newValue)
  }

  const handleCityDeselect = (selectedOption: string): void => {
    const newValue = selectedCities.filter((option) => option !== selectedOption)

    onChangeCity(newValue)
  }

  const handleRegionSelect = (selectedOption: Option): void => {
    let newValueCity = selectedCities.filter((element) => !selectedOption.cities.includes(element))

    newValueCity = [...newValueCity, selectedOption.region]
    onChangeCity(newValueCity)
  }

  const handleRegionDeselect = (selectedOption: Option, city: string): void => {
    let newValueCity = selectedOption.cities.filter((i) => i !== city)

    newValueCity = [...newValueCity, ...selectedCities.filter((i) => i !== selectedOption.region)]
    onChangeCity(newValueCity)
  }

  const filteredOptions = options
    .map((option) => ({
      ...option,
      cities: option.cities.filter((city) => city.toLowerCase().includes(searchText.toLowerCase())),
    }))
    .filter((option) => option.cities.length > 0)

  const onChangeCheckBoxRegion = (option: Option, region: string): void => {
    const isSelected = selectedCities.includes(region)

    if (isSelected) {
      handleCityDeselect(region)
    } else {
      handleRegionSelect(option)
    }
  }

  const onChangeCheckBoxCity = (option: Option, region: string, city: string): void => {
    const isSelected = selectedCities.includes(city)
    const isSelectedRegion = selectedCities.includes(region)

    switch (true) {
      case isSelectedRegion:
        handleRegionDeselect(option, city)
        break
      case isSelected:
        handleCityDeselect(city)
        break
      default:
        handleCitySelect(city)
    }
  }

  return (
    <Wrapper>
      <Label>Город/область</Label>
      <OverallInput>
        <SelectedCities ref={cityRef}>
          {showCity.slice(0, 4).map((city) => (
            <City key={city}>
              {city}
              <div
                onClick={() => {
                  handleCityDeselect(city)
                }}
              >
                <IconClose />
              </div>
            </City>
          ))}
        </SelectedCities>

        <InputWrapper>
          <Input
            name="searchCity"
            id="searchCity"
            label=""
            type="text"
            placeholder={placeholder}
            value={searchText}
            onChange={changeSearchText}
            onFocus={toggleList}
          />
        </InputWrapper>

        {listSearch && (
          <List ref={listRef}>
            {filteredOptions.map((option) => (
              <>
                <WrapperRegion>
                  <div onClick={() => handleCityToggle(option.region)}>
                    {openListCity === option.region || openListCity === true ? <IconCloseList /> : <IconOpenList />}
                  </div>
                  <CheckBox
                    onChange={() => {
                      onChangeCheckBoxRegion(option, option.region)
                    }}
                    label={option.region}
                    id={option.region}
                    checked={selectedCities.includes(option.region)}
                    name={option.region}
                  />
                </WrapperRegion>
                <div>
                  {option.cities.map((city) => (
                    <div
                      key={city}
                      style={{ display: openListCity === option.region || openListCity === true ? 'block' : 'none' }}
                    >
                      <Cities>
                        <CheckBox
                          onChange={() => {
                            onChangeCheckBoxCity(option, option.region, city)
                          }}
                          label={city}
                          id={city}
                          checked={selectedCities.includes(city) || selectedCities.includes(option.region)}
                          name={option.region}
                        />
                      </Cities>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </List>
        )}
      </OverallInput>
    </Wrapper>
  )
}

export default InputSearch
