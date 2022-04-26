import React from 'react'

import { Params, User } from './type'

interface Props {
  param: Params
  users: User[]
  setParam: (param: Params) => void
}

export default function ({ param, users, setParam }: Props) {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParam({ ...param, name: e.target.value })
  }

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParam({ ...param, personId: e.target.value })
  }

  return (
    <div>
      {/* 输入项目人进行查询 */}
      <input
        type="text"
        value={param.name || ''}
        onChange={(e) => inputChange(e)}
      />

      {/* 下拉框选择项目人进行查询 */}
      <select value={param.personId || ''} onChange={(e) => selectChange(e)}>
        <option value="">全部</option>
        {users?.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  )
}
