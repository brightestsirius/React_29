import React, {memo} from 'react'
import { useGetUsersQuery, useDeleteUserMutation } from './../../store/users/service'

export default memo(function UsersList() {
  const { data, error, isLoading } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id:string) => {
    await deleteUser(id).unwrap();
  }

  return error ? (
    <>Oh no, there was an error</>
  ) : isLoading ? (
    <>Loading...</>
  ) : data ? (
    <ul>
      {
        data.map(item => <li key={item.id}>{item.name} <button onClick={() => handleDelete(item.id)}>Delete</button></li>)
      }
    </ul>
  ) : null
});