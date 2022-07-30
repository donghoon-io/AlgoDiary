import { localStorageStore } from 'fractils'

export const experimentID = localStorageStore('experimentID', 0)
export const nickname = localStorageStore('nickname', "")

export const temperature = localStorageStore('temperature', 50)