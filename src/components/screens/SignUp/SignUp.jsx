import { UserService } from '@/services/UserService'
import { useRouter } from 'next/router'
import { useState } from 'react'

const clearData = {
	email: '',
	name: '',
	lastname: '',
	password: '',
	password2: '',
}

const SignUp = () => {
	const [data, setData] = useState(clearData)

	const nav = useRouter()

	const createUser = e => {
		e.preventDefault()

		if (data.password !== data.password2) return null
		const res = UserService.createUser({
			email: data.email,
			name: data.name,
			lastname: data.lastname,
			password: data.password,
		})

		console.log(res)

		nav.push('/')

		setData(clearData)
	}

	return (
		<div>
			<div className='w-full h-screen flex flex-col justify-center items-center gap-[32px]'>
				<div className='font-inter font-normal text-[40px] leading-[20px] text-blue'>
					ClimaCast
				</div>
				<div className='flex flex-col gap-[12px] justify-center items-center'>
					<div className='font-medium font-inter text-[30px] leading-[38px] text-blue'>
						Регистрация
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
							htmlFor='name'>
							Имя
						</label>
						<input
							type='text'
							name='name'
							placeholder='Введите свое имя'
							id='name'
							value={data.name}
							onChange={e =>
								setData(prev => ({ ...prev, name: e.target.value }))
							}
							className=' placeholder:text-blue placeholder:font-medium w-[40vw]'
						/>
					</div>
					<div className='flex flex-col justify-start items-start gap-[8px]'>
						<label
							className='text-blue font-semibold text-[14px] leading-[20px]'
							htmlFor='lastname'>
							Фамилия
						</label>
						<input
							type='text'
							name='lastname'
							placeholder='Введите свою фамилию'
							id='lastname'
							value={data.lastname}
							onChange={e =>
								setData(prev => ({ ...prev, lastname: e.target.value }))
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
					<div className='flex flex-col justify-start items-start gap-[8px]'>
						<label
							className='text-blue font-semibold text-[14px] leading-[20px]'
							htmlFor='password2'>
							Введите пароль повторно
						</label>
						<input
							type='password'
							name='password2'
							placeholder='Придумайте надежный пароль'
							id='password2'
							value={data.password2}
							onChange={e =>
								setData(prev => ({ ...prev, password2: e.target.value }))
							}
							className=' placeholder:text-blue placeholder:font-medium w-[40vw]'
						/>
					</div>
				</div>
				<button
					className='bg-blue text-white text-[16px] font-inter font-semibold leading-[24px] w-[40vw] h-[44px] rounded-[8px]'
					onClick={e => {
						createUser(e)
					}}>
					Создать аккаунт
				</button>
			</div>
		</div>
	)
}

export default SignUp
