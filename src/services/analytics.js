import fetch from '@/utils/fetch'
/* eslint-disable no-unused-vars */
import env from '@/config/env.js'
/* eslint-able */
const API_PATH = env.API_PATH

// 数据分析-发送游戏推广信息
export const attribution = (jsonObj) => fetch(API_PATH + '/api/analytics/source/attribution', jsonObj, 'GET')

// 数据分析-上报用户点击事件
export const tracking = (jsonObj) => fetch(API_PATH + '/api/analytics/source/tracking', jsonObj, 'POST')
