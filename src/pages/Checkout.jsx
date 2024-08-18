import { useSelector } from 'react-redux';
import { CheckoutForm, SectionTitle, CartTotals } from '../components';
import { Link, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = (store) => () => {
	const user = store.getState().userState.user;
	if (!user) {
		toast.warn('you must be logged in to checkout');
		return redirect('/login');
	}
	return null;
};

const Checkout = () => {
	const cartTotal = useSelector((state) => state.cartState.cartTotal);

	//cart is empty 
	if (cartTotal === 0) {
		return <>
			<SectionTitle text='your cart is empty' />
			<Link
				to='/products'
				className='mt-16 btn btn-primary uppercase animate-bounce hover:animate-none'
			>
				Start Shopping!
			</Link>
		</>;
	}


	return (
		<>
			<SectionTitle text='place your order' />
			<div className='mt-8 grid gap-8 md:grid-cols-2'>
				<CheckoutForm />
				<CartTotals />
			</div>
		</>
	);
};

export default Checkout;