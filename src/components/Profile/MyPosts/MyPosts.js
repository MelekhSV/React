import React from "react";
import classes from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {requiredField, maxLenghtCreator} from './../../../validations/Validators/validators'
import {Textarea} from "../../FormControls/FormsControls";

const maxLength = maxLenghtCreator(30)

const AddNewPostForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field validate={[requiredField, maxLength]} component={Textarea} name={'newPostText'} placeholder={props.newPostText}/>
            </form>
            <button> Add post</button>
        </div>
    )
}

let AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)


export const MyPosts = React.memo(props => {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState!= this.state;
    // }
    //
    // render() {
        let postsElements = props.posts.map((p) => <Posts message={p.message} like={p.like} /> );

        let onAddPost =  (value) => {
            props.addPost(value.newPostText);
        };
        let newPostElement = React.createRef();
        //
        // let onPostChange = () => {
        //     let newText = newPostElement.current.value;
        //     props.updateNewPostText(newText)
        //
        // }
        return (
            <div className={classes.postBlock}>
                <h3>My post</h3>
                <AddNewPostFormRedux onSubmin={onAddPost}/>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        );
    // }
})


