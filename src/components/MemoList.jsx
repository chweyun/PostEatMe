import React, { useState } from 'react';

function Memo({memo}) {
    return (
        <>
            <div>{memo.num}</div>
            <div>{memo.contents}</div>
        </>
    );
}
function MemoList() {

    const memos = [
        {
            num: 1,
            contents: '하이'
        },
        {
            num: 2,
            contents: '파이팅'
        },
        {
            num: 3,
            contents: '힝'
        },
        {
            num: 4,
            contents: '바이'
        }
    ];

    return (
        <div>
            {
                memos.map((memo,index) => (<Memo memo={memo} key={index} />))
            }
        </div>
    );
 }
 
 export default MemoList;