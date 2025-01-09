import { User } from "../interfaces";


interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  return (
    <tr key={user.id}>
      <td>
        <img src={user.avatar} alt={user.first_name} style={{ width: 50 }} />
      </td>
      <td>{user.first_name} {user.last_name}</td>
      <td>{user.email}</td>
    </tr>
  )
}