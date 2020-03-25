import BASE_URL from '@/url'

export async function getFilms() {
    let response = await fetch(`${BASE_URL}films`)
    let data = await response.json()
    return data;
}
export async function getFilm(id) {
    let response = await fetch(`${BASE_URL}films/${id}`)
    let data = response.json()
    return data;
}