import React from "react";
import {Input} from "../FormControls/FormsControls";
import {requiredField} from "../../validations/Validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import classes from './../FormControls/FormsControl.module.css'



const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={requiredField} placeholder={'Login'} name={'email'} component={Input}/>
                </div>
                <div>
                    <Field validate={requiredField} placeholder={'Password'} name={'password'} type={'password'} component={Input}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
                </div>
                {props.captchUrl && <img src={props.captchUrl} />}
                {props.captchUrl && <Field validate={requiredField} placeholder={'Symbyls from Image'} name={'captcha'} component={Input}/> }
                {props.error && <div className={classes.formSummaryError}>
                    Error
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxFrom = reduxForm({
    form:'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuths) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1> Login</h1>
            <LoginReduxFrom onSubmit={onSubmit} captchUrl={props.captchUrl}/>
        </div>
    )
}
const mapStateToProps = (props) => {{
    isAuths: state.auth.isAuths
    captchUpl: state.auth.captchUpl
}}
export const LoginContainer = connect(null, {login})(Login)


