import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

import {useState, useEffect} from 'react'

import './Login.css'
import Axios from 'axios'

import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'

const Login = () => {

    const [active, setActive] = useState(false);

    
    const onClickSignup = ()=>{
        if (active) {
           setActive(active) 
        }
        setActive(!active)
    }

    const handleClickRegister = (values)=> {
        Axios.post("http://localhost:21262/register", {
            email: values.email,
            password: values.password,
        }).then((response)=>{
            console.log(response)
        });
    }
    const handleClickLogin = (values)=>{
       Axios.post("http://localhost:21262/login", {
            email: values.email,
            password: values.password,
        }).then((response)=>{
            console.log(response)
        });
    }

    const validationLogin = yup.object().shape({
        email: yup
        .string()
        .email("Não é um e-mail")
        .required("Este campo é obrigatório"),
        
        password: yup
        .string()
        .min(8, "A senha deve ter 8 dígitos")
        .required("Este campo é obrigatório"),
    });

    const validationRegister = yup.object().shape({
        email: yup
        .string()
        .email("Não é um e-mail")
        .required("Este campo é obrigatório"),
        
        password: yup
        .string()
        .min(8, "A senha deve ter 8 dígitos")
        .required("Este campo é obrigatório"),

        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais")
    });

  return (
    //login
    <div className={`container ${active ? 'active': ''}`}>
        <div className='forms'>
            <div className="form login">
                <span className='title'>Login</span>

                <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
                    <Form >
                        <div className="input-field">
                            
                            <Field 
                            name="email" 
                            className="form-field" 
                            placeholder="E-mail"/>

                            <ErrorMessage 
                            component="span"
                            name='email' 
                            className='form-error'/>
                            <i className="uil uil-envelope icon">
                                <AiOutlineMail/>
                            </i>
                        </div>

                        <div className="input-field">
                            <Field 
                            name="password" 
                            className="form-field" 
                            placeholder="Senha"/>

                            <ErrorMessage 
                            component="span" 
                            name='password' 
                            className='form-error'/>
                            <i className="uil-locker"><RiLockPasswordLine/></i>
                        </div>

                        <div className="checkbox-text">
                            <div className="checkbox-content">
                                <input type="checkbox" id='logCheck'/>
                                <label htmlFor="logCheck" className='text'>Relembrar a senha</label>
                                <a href="#" className='text'>Esqueceu a senha ?</a>
                            </div>
                        </div>



                        <button className='input-field button' type='submit'>Login</button>
                    </Form>
                </Formik>
                <div className="login-signup">
                    <span className="text">Não se cadastrou ? - </span>
                    <a href="#" className="text signup-link" onClick={onClickSignup}>Cadastre-se agora</a>
                </div>
            </div>
        
            <div className='form signup'>

                <span className='title'>Cadastro</span>

                <Formik
                initialValues={{}} 
                onSubmit={handleClickRegister} 
                validationSchema={validationRegister}>
                    <Form >
                        <div className="input-field">
                            <Field 
                            name="email" 
                            className="form-field" 
                            placeholder="Email"/>

                            <ErrorMessage 
                            component="span"
                            name='email' 
                            className='form-error'/>
                             <i className="uil uil-envelope icon">
                                <AiOutlineMail/>
                            </i>
                        </div>

                        <div className="input-field">
                            <Field 
                            name="password" 
                            className="form-field" 
                            placeholder="Senha"/>

                            <ErrorMessage 
                            component="span" 
                            name='password' 
                            className='form-error'/>
                             <i className="uil-locker"><RiLockPasswordLine/></i>
                        </div>

                        <div className="input-field">
                            <Field 
                            name="confirmPassword" 
                            className="form-field" 
                            placeholder="Confirme sua senha"/>

                            <ErrorMessage 
                            component="span" 
                            name='confirmPassword' 
                            className='form-error'/>
                             <i className="uil-locker"><RiLockPasswordLine/></i>
                        </div>
                        <div className="checkbox-text">
                            <div className="checkbox-content">
                                <input type="checkbox" name="checkbox" id="termCon" />
                                <label htmlFor="termCon" className='text'>  Eu aceito todos os termos e condições</label>
                            </div>
                        </div>


                        <button className='input-field button' type='submit'>Cadastrar</button>

                        <div className="login-signup">
                            <span className='text'>
                                Tudo certo ?
                                <a onClick={onClickSignup} href="/" className='text login-link'>Entrar agora</a>
                            </span>

                        </div>

                    </Form>

                </Formik>

            </div>
        </div>
    </div>
  )
}

export default Login