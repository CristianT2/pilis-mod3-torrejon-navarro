import { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/logo.png";
import './Navigation.css';

const Navigation = () => {
	
	const { currentUser, setCurrentUser } = useContext(UserContext);

	useEffect(() => {
		const userStored = localStorage.getItem('currentUser')
		if(userStored) {
			setCurrentUser(JSON.parse(userStored))
		}
	});

	const handleSignOut = () => {
    setCurrentUser(null);
  };

  return (
    <div className="navigation">
			<nav className="navbar sticky-top bg-dark">
				<div className="container-fluid">
					<Link to='/' >
						<img src={logo} alt="logo" className="logo" />
					</Link>
					<div>
						{currentUser ? (
							<Link className='text-white' to='card/create'>
								Nuevo Clima
							</Link>
						) : (
							<span className='text-white'>Nuevo Clima</span>
						)}

						{currentUser ? (
							<span className='text-white' onClick={handleSignOut}>
								Cerrar Sesión
							</span>
						) : (
							<Link className='text-white' to='login'>
								Iniciar Sesión
							</Link>
						)}
					</div>
				</div>
			</nav>

    </div>
  )
}

export default Navigation;