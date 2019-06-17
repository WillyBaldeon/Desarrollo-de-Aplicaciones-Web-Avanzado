import React,{Component} from 'react';
import { Form, Button } from 'react-bootstrap';

import axios from '../utils/axios';
//import Form from 'react-bootstrap/FormControl';

class Login extends Component{
    state = {
        usuario: '',
        password: ''
    }

    usuarioHandler = e => this.setState({usuario: e.target.value})
    passwordHandler = e => this.setState({password: e.target.value})
    submitHandler = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'user/signin',
            data: {
                username: this.state.usuario,
                password: this.state.password
            }
        }).then(response => {
            console.log('mi respuesta',response)
            localStorage.setItem('userId', response.data.data._id);
            localStorage.setItem('userName', response.data.data.username);
            localStorage.setItem('userToken', response.data.token);
            this.props.history.push('/welcome');
        }).catch(error =>  {
            console.log('hubo un error',error)
        })
    }
    render(){
        return (
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-6 mt-2 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <Form onSubmit={this.submitHandler}>
                                    <Form-Group>
                                        <Form.Label>Usuario:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingrese su usuario"
                                            value={this.state.usuario}
                                            onChange={this.usuarioHandler}
                                        />
                                    </Form-Group>
                                    <Form-Group>
                                        <Form.Label>Contraseña:</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="******"
                                            value={this.state.password}
                                            onChange={this.passwordHandler}
                                        />
                                    </Form-Group>
                                    <Button variant="primary" type="submit">
                                        Iniciar Sesión
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>                                           
            </div>
        );        
    }
}

export default Login;