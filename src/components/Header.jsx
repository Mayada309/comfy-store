import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';
import { logoutUser } from '../features/user/userSlice';
import { useQueryClient } from '@tanstack/react-query';

const Header = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userState.user);

	const queryClient = useQueryClient();
	const handleLogout = () => {
		navigate('/');
		dispatch(clearCart());
		dispatch(logoutUser());
		queryClient.removeQueries();
	};

	return (
		<header className='bg-neutral py-2 text-neutral-content'>
			<div className="align-element flex justify-center sm:justify-end">

				{
					user ?
						(
							<div className='flex gap-x-2 sm:gap-x-8 items-center' >
								<p className='text-xs sm:text-sm' >Hello, {user.username}!</p>
								<button
									onClick={() => handleLogout()}
									className='btn btn-xs btn-outline btn-primary'
								>
									Logout
								</button>
							</div>
						)
						:
						(
							<div className="flex gap-x-6 justify-center items-center">
								<Link to='/login' className='link link-hover text-xs sm:text-sm capitalize' >
									sign in / guest
								</Link>
								<Link to='/register' className='link link-hover text-xs sm:text-sm capitalize' >
									create account
								</Link>
							</div>
						)
				}
			</div>
		</header>
	);
};

export default Header;