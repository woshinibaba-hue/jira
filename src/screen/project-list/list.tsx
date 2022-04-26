import React from 'react'

import { IList, User } from './type'

type Props = {
  list: IList[]
  users: User[]
}

export default function ({ list, users }: Props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>项目名称</th>
            <th>项目人</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{users.find((user) => user.id === item.personId)?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
