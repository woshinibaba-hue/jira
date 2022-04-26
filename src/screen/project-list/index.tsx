import React, { useState, useEffect } from 'react'

import * as qs from 'qs'

import List from './list'
import SearchPenel from './search-penel'

import { formatObj } from '../../utils/format'

import { Params, User, IList } from './type'

// 读取环境变量
const apiUrl = process.env.REACT_APP_BASE_URL

export default function () {
  // 查询条件
  const [param, setParam] = useState<Params>({
    name: '',
    personId: ''
  })

  // 项目人列表
  const [users, setUsers] = useState<User[]>([])

  // 项目列表
  const [list, setList] = useState<IList[]>([])

  // 获取项目列表
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(formatObj(param))}`).then(
      async (res) => {
        if (res.ok) {
          const data = await res.json()
          setList(data)
        }
      }
    )
  }, [param])

  // 获取项目人列表
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        const data = await res.json()
        setUsers(data)
      }
    })
  }, [])

  return (
    <>
      <SearchPenel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </>
  )
}
