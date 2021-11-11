import React, { forwardRef, useState } from 'react';
import MaterialTable from 'material-table';
import { useCartContex } from '../../context/CardContext';
import { MessageCart } from '../Utils/MessageCart';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { DelIcon } from '../Icons/ListIcons';
import { Button } from '@material-ui/core';

const icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export const Cart = () => {
    const { cartList, delCartList, resetCartList }  = useCartContex();
    const getPriceTotal = () => {
        let total = 0;
        for( const { subTotal } of cartList ) {
            total+= subTotal;
        }
        return total;
    };

    return (
        <div className="container-cart">
            {
                cartList.length === 0
                ?
                <MessageCart/>
                :
                <>
                    <div style={{ marginBottom:'1%' }}>
                        <h1>{`Monto total: $ ${ getPriceTotal() }`}</h1>
                        <Button variant="contained" size="small" onClick= { resetCartList }> Eliminar el Carrito</Button>
                    </div>
                    <MaterialTable
                        icons= { icons }
                        title="Carrito de compras"
                        columns={[
                            { title: 'ID', field: 'id', hidden: true },
                            { title: 'Nombre', field: 'name' },
                            { title: 'Categoria', field: 'category' },
                            { title: 'Cantidad', field: 'cant'},
                            { title: 'Precio', field: 'price' },
                            { title: 'SubTotal', field: 'subTotal' },
                        ]}
                        data={ cartList }
                        actions={[
                            {
                                icon: () => <DelIcon/>,
                                tooltip: 'Eliminar',
                                onClick: ( event, rowData) => delCartList( rowData ) 
                            },
                        ]}
                        options={{
                            actionsColumnIndex: -1
                        }}
                    />
                </>
                
            }
        </div>
    )
}