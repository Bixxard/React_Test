import React, { Component } from 'react';

// CHILD ROW


import TableBodyRow from './TableBodyRow';
class TableBody extends Component {
    render() {
        const { data, isCheckboxActive, activeRowHanlder, activeRowID, searchValue } = this.props;
        const TableBodyRows = data
            .filter(item => item.title.indexOf(searchValue) > -1)
            .map(item => (
            <tr style={{ background: activeRowID.indexOf(item.id) > -1 ? "red" : "" }}  key={item.id}>
                <td style={{ display: !isCheckboxActive ? "none" : "block" }}>
                    <input
                        onChange={() => activeRowHanlder(item.id)}
                        type="checkbox"
                    />
                </td>
                <TableBodyRow id={item.id}
                />
                <TableBodyRow id={item.title}
                />
            </tr>
            )
        );
        console.log(searchValue)
        return (
            <tbody>
                    {TableBodyRows}
            </tbody>
        );
    }
}
export default TableBody;

