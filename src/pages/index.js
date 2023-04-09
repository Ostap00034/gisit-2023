import Head from 'next/head'
import MainLayout from '@/components/layouts/MainLayout'
import Main from '@/components/screens/Main/Main'
import SignUp from '@/components/screens/SignUp/SignUp'
import SignIn from '@/components/screens/SignIn/SignIn'

const Home = () => {
	return (
		<>
			<Head>
				<title>ClimaCast</title>
			</Head>
			<MainLayout>
				<Main />
				{/* <SignUp /> */}
				{/* <SignUp /> */}
			</MainLayout>
		</>
	)
}

export default Home
