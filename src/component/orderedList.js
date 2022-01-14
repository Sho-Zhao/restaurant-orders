import React from "react";
import { ReceiveOrder } from "./receiveorder";

export default function OrderedList(){

    return(
        <React.Fragment>
            <h1>注文ドリンク一覧</h1>
            <table>
                <th>
                    <td>テーブル番号</td>
                    <td>ドリンク</td>
                    <td>提供済み</td>
                </th>
                <tr>
                    <td>1</td>
                    <td>ビール</td>
                    <td><button onClick={ReceiveOrder} >削除</button></td>
                </tr>
            </table>
        </React.Fragment>
    );
}