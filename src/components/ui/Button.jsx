const Button = ({ color, background, text }) => {
	return (
		<button
			style={{
				color: color,
				background: background,
			}}
			className='w-auto h-[44px] rounded-[8px] flex justify-center items-center'>
			{text}
		</button>
	)
}

export default Button
