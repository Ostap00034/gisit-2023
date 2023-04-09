import axios from 'axios'

export const UserService = {
	async createUser(data) {
		const response = await axios.post(
			'http://localhost:4200/api/user',
			JSON.stringify(data),
			{ headers: { 'Content-Type': 'application/json' } }
		)
		return response.status
	},
}
