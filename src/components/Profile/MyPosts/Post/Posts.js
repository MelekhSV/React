import React from "react";
import classes from './Posts.module.css'


const Posts = (props) => {
    return (
                <div className='posts'>
                    <div className={classes.item}>
                        <img src='https://ix-www.imgix.net/hp/snowshoe.jpg?q=70&w=1800&auto=compress%2Cenhance&fm=jpeg'/>
                        {props.message}
                        <div>
                            Like {props.like}
                        </div>

                    </div>
                </div>
    );
}



export default Posts