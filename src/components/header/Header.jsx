import Link from 'next/link'

const Header = () => {
	return (
		<div className='flex px-[36px] flex-row items-center justify-between w-full h-[56px]'>
			<div className='logo'>
				<Link href='/'>
					<div className='w-[50px] h-[50px] bg-green-600'></div>
				</Link>
			</div>
			<div className='flex flex-row w-auto items-center gap-[24px]'>
				<Link href='/'>Main</Link>
				<Link href='/signup'>Зарегистрироваться</Link>
				<Link href='/signin'>Войти</Link>
				<Link href='/logout'>Выйти</Link>
			</div>
		</div>
	)
}

export default Header
