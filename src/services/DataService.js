import axios from 'axios'

export const DataService = {
	async getAll() {
		const response = await axios.get('http://localhost:4200/api/data')

		return response.data
	},
	async getById(id) {
		const response = await axios.get(`http://localhost:4200/api/data/${id}`)

		return response.data
	},
}
