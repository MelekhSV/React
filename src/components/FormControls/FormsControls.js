import React from "react";
import classes from "./FormsControl.module.css";



export const  FromControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched &&meta.error;
    return (
        <div className={classes.formControl + '' + (hasError?classes.error: ' ')}>
            <div>
                {/*<element {...props.input} {...props} />*/}
                {props.child}
            </div>
            {hasError && <span> {meta.error}</span>}

        </div>

    )
}


export const Textarea = (props) => {
    return <FromControl {...props} element={}><textarea {...props.input} {...props} /></FromControl>
}

export const Input = (props) => {
    return <FromControl {...props}><input {...props.input} {...props} /></FromControl>
}







// export const Textarea = ({input, meta, ...props}) => {
//     const hasError = meta.touched &&meta.error;
//     return (
//         <div className={classes.formControl + '' + (hasError?classes.error: ' ')}>
//             <div>
//                 <textarea {...input} {...props} />
//             </div>
//             {hasError && <span> {meta.error}</span>}
//
//         </div>
//
//     )
// }



// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched &&meta.error;
//     return (
//         <div className={classes.formControl + '' + (hasError?classes.error: ' ')}>
//             <div>
//                 <input {...input} {...props} />
//             </div>
//             {hasError && <span> {meta.error}</span>}
//
//         </div>
//
//     )
// }