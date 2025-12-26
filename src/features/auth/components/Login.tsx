import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Login = () => {
	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	// Get the redirect path from state, or default to home
	const from = location.state?.from?.pathname || '/dashboard';

	const handleLogin = () => {
		login('User123');
		navigate(from, { replace: true });
	};

	return <button onClick={handleLogin}>Log In</button>;
};
