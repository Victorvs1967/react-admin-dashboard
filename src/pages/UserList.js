import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { userRows } from '../dummyData';
import { TheList, ListItem, ListImage, EditButton, MyDeleteOutline } from '../styles/styled-elements';

const UserList = () => {

  const [ data, setData ] = useState(userRows);
  const handleDelete = id => setData(data.filter(item => item.id !== id));
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 160,
      renderCell: params => {
        return (
          <ListItem>
            <ListImage src={ params.row.avatar } alt="image" />
            { params.row.username }
          </ListItem>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'status', headerName: 'Status', width: 140 },
    { field: 'transaction', headerName: 'Transaction Volume', width: 230 },
    {
      field: 'action',
      headerName: 'Action',
      width: 140,
      renderCell: params => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <EditButton primary>Edit</EditButton>
            </Link>
            <MyDeleteOutline onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];


  return (
    <TheList>
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={ 10 } checkboxSelection />
    </TheList>
  );
};

export default UserList;