import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import Axios from "axios"




    const validationLogin = yup.object().shape({
        senha: yup.string().min(6,"A senha deve ter 6 caracteres").required("Este campo é obrigatório"),
    })



const Login = () => {
    const history = useHistory()
    const handleClickLogin = (values) => {
        Axios.post("http://localhost:8000/login",{
            user: values.user,
            senha: values.senha,
        }).then((response) =>{
            console.log(response)
            if(response.status === 200){
                history.push('/home')
                alert("Logado com sucesso!")
            }
        })
    }
    return (  
        <main className="">

            <div className="containeer">

                <div className="content">
                    <Formik 
                    initialValues={{}}
                    onSubmit={handleClickLogin}
                    validationSchema={validationLogin}>
                        <Form>
                            <h1>Login</h1>
                            <h2>Username:</h2> <div className="form-input"><Field name="user" className="user" autocomplete="off" /> <ErrorMessage component="span" name="user" className="form-error" /></div> 
                            <h2>Password:</h2> <div className="form-input">  <Field type="password" name="senha" className="senha" autocomplete="off" /> <ErrorMessage component="span" name="senha" className="form-error" /></div> 
                            <Link to='/register'> <h3>Ainda não tem uma conta?</h3> </Link>
                            <button type="submit" class=" mr-md-2 mb-md-0 mb-2   btn-entrar btn btn-outline-primary" >Entrar</button>
                        </Form>
                    </Formik>
                </div>
            </div>
            <div className="img-login">
                <img src="./paisagem.jpg" alt="" />
            </div>
        </main>
    );
}
 
export default Login;