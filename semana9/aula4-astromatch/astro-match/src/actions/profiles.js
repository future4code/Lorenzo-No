import axios from 'axios'

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch'

export const clearSwipes = () => async (dispatch) => {
	await axios.put(`${baseURL}/lorenzo/clear`)
}