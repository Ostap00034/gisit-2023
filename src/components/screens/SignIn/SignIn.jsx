import { UserService } from '@/services/UserService'
import { useState } from 'react'

const clearData = {
	email: '',
	name: '',
	lastname: '',
	password: '',
	password2: '',
}

const SignIn = () => {
	const [data, setData] = useState(clearData)

	

	return (
		<div>
			<div className='w-full h-screen flex flex-col justify-center items-center gap-[32px]'>
				<div className='font-inter font-normal text-[40px] leading-[20px] text-blue'>
					ClimaCast
				</div>
				<div className='flex flex-col gap-[12px] justify-center items-center'>
					<div className='font-medium font-inter text-[30px] leading-[38px] text-blue'>
						Вход в систему
					</div>
					<div className='font-inter leading-[24px] text-blue'>
						Добро пожаловать!
					</div>
				</div>

				<div className='flex flex-col gap-[16px]'>
					<div className='flex flex-col justify-start items-start gap-[8px]'>
						<label
							className='text-blue font-semibold text-[14px] leading-[20px]'
							htmlFor='email'>
							Email
						</label>
						<input
							type='email'
							name='email'
							placeholder='Введите свою почту'
							id='email'
							value={data.email}
							onChange={e =>
								setData(prev => ({ ...prev, email: e.target.value }))
							}
							className=' placeholder:text-blue placeholder:font-medium w-[40vw]'
						/>
					</div>
					<div className='flex flex-col justify-start items-start gap-[8px]'>
						<label
							className='text-blue font-semibold text-[14px] leading-[20px]'
							htmlFor='password'>
							Пароль
						</label>
						<input
							type='password'
							name='password'
							placeholder='Придумайте надежный пароль'
							id='password'
							value={data.password}
							onChange={e =>
								setData(prev => ({ ...prev, password: e.target.value }))
							}
							className=' placeholder:text-blue placeholder:font-medium w-[40vw]'
						/>
					</div>
				</div>
				<button
					className='bg-blue text-white text-[16px] font-inter font-semibold leading-[24px] w-[40vw] h-[44px] rounded-[8px]'
					onClick={e => createUser(e)}>
					Войти
				</button>
			</div>
		</div>
	)
}

export default SignIn
