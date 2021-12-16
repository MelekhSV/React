import React, {useState} from "react";
import style from './Paginator.module.css'


export const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionSize = 10
    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber,setPortionNumber] = useState(1)
    let leftPortionPagenumber = (portionNumber - 1)* portionSize +1;
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        <div>
            <div>
                {portionNumber>1 && <button onClick={() => {setPortionNumber(portionNumber -1) }}>Left</button>}
                {pages.filter(p => p >= leftPortionPagenumber && p <=rightPortionPageNumber)
                    .map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && style.selectedPage}>{p}</span>
                })}
                {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber  + 1) }}>Right</button>}
            </div>
        </div>
    )
}

