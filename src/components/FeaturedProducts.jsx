import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';

const FeaturedProducts = () => {
	return (
		<div className='mt-16' >
			<SectionTitle text='featured products' />
			<ProductsGrid />
		</div>
	);
};

export default FeaturedProducts;