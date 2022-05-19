import { FoodieBuckData } from '../../static/FoodieBuckData'
import { FoodieBuckProfile } from '../../static/FoodieBuckProfile'

export const paramBuilder = str => {
  const pairs = str.split('#')
  return pairs[1]
}

export const getFoodieBuckDataByPk = (param, type) => {
  return FoodieBuckProfile.Items.filter(obj => {
    return obj.pk === queryBuilder(param, type)
  })
}

export const getFoodieBuckDataBySk = (param, type) => {
  return FoodieBuckData.Items.filter(obj => {
    return obj.sk === queryBuilder(param, type)
  })
}

export const queryBuilder = (param, type = 'FOODIEBUCK') => `${type}#${param}`

export const dateFormatter = date => date.toLocaleDateString('en-CA')
