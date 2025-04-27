import { AgGridReact } from 'ag-grid-react';
import React from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from './api';

export default function UserList() {
    const { data: Users, isLoading, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    const columnDefs = [
        { field: 'id', headerName: 'ID', sortable: true, filter: true },
        { field: 'firstname', headerName: ' first Name', sortable: true, filter: true },
        { field: 'lastname', headerName: ' last Name', sortable: true, filter: true },
        { field: 'email', headerName: 'Email', sortable: true, filter: true },
    ];

    if (isLoading) return <div>Loading users....</div>;
    if (isError) return <div>Error loading users: {error?.message || 'Unknown error'}</div>;

    return (
        <div
            className="UserTable"
            style={{
                width: '100%',
                height: '100%',
                opacity: 0.95,
            }}
        >
            <AgGridReact
                rowData={Users || []}
                columnDefs={columnDefs}
                domLayout="autoHeight"
                rowHeight={70}
                rowStyle={{ fontSize: 20 }}
                headerHeight={70}
                defaultColDef={{
                    initialWidth: 200,
                    flex: 1,
                    floatingFilter: true,
                    sortable: true,
                    filter: true,
                    headerStyle: {
                        fontSize: 20,
                        backgroundColor: 'white',
                        fontWeight: 'bold',
                    },
                }}
            />
        </div>
    );
}