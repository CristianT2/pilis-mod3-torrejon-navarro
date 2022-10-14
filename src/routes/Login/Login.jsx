import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {

  const { setCurrentUser } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
		localStorage.setItem('currentUser', JSON.stringify(data));
		setCurrentUser(data);
		navigate('/');
  }

	return(
		<div className="col-md-4">
      <h2>Iniciar Sesion</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
          className='form-control'
          type="text"
          placeholder='Nombre de usuario'
          {...register('username', {
              required : 'Debe ingresar su nombre de usuario'
            }
          )
        } />
				<p>{errors.username?.message}</p>
				<input
          className='form-control'
          type='password'
          placeholder='Contraseña'
          {...register(
              'password',
              {
                required : 'Debe ingresar su contraseña'
              }
            )
          }
        />
        <p>{errors.password?.message}</p>
				<button type="submit" className="btn btn-primary">Iniciar Sesión</button>
			</form>
		</div>
	)
}

export default Login;