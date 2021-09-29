
import {Link} from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import Axios from "axios"

import './Register.css'


const Register = () => {

    const handleClickCadastro = (values) => {
        Axios.post("http://localhost:8000/register",{
            user: values.user,
            senha: values.senha,
        }).then((response) =>{
            console.log(response)
        })
    }

    const validationCadastro = yup.object().shape({
        user:  yup.string().required("Este campo é obrigatório"),
        senha: yup.string().min(6,"A senha deve ter 6 caracteres").required("Este campo é obrigatório"),
    })

    

    return (  
        <main className="">
           
           <div className="img">
                <img src="./paisagem.jpg" alt="" />
            </div>

            <div className="containeer">
                <div className="content">
                    <Formik 
                    initialValues={{}}
                    onSubmit={handleClickCadastro}
                    validationSchema={validationCadastro}>
                        <Form>
                            <h1>Register</h1>
                            <h2>Username:</h2> <div className="form-input"><Field name="user" className="user" autocomplete="off" /> <ErrorMessage component="span" name="user" className="form-error" /></div> 
                            <h2>Password:</h2> <div className="form-input">  <Field type="password" name="senha" className="senha" autocomplete="off" /> <ErrorMessage component="span" name="senha" className="form-error" /></div> 
                                <Link to='/login'> <h3>Já tem uma conta?</h3> </Link>
                                <button type="submit" class=" mr-md-2 mb-md-0 mb-2   btn-entrar btn btn-outline-primary" >Registrar</button>
                        </Form>
                    </Formik>
                </div>
            </div>
           
        </main>
    );
}
 
export default Register;