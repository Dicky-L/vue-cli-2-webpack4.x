
import fetch from '@/utils/fetch'
/* eslint-disable no-unused-vars */
import env from '@/config/env.js'
/* eslint-able */
const API_PATH = env.API_PATH

export const TEST = (jsonObj) => fetch(API_PATH + 'api/hotItemsArr', jsonObj, 'GET')
