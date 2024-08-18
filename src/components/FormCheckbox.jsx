/* eslint-disable react/prop-types */

const FormCheckbox = ({ label, name, defaultValue, size }) => {
	return (
		<div className='form-control items-center'>
			<label htmlFor={name} className='label cursor-pointer'>
				<span className='label-text capitalize'>
					{label}
				</span>
			</label>
			<input
				type="checkbox"
				name={name}
				id={name}
				defaultChecked={defaultValue}
				className={`checkbox-primary checkbox ${size}`}
			/>
		</div>
	);
};

export default FormCheckbox;