export async function buscarUsuario(id: string) {
    const apiUrl = import.meta.env.VITE_API_URL;
    const usuario = await fetch(`${apiUrl}/usuarios/${id}`)
    if(!usuario.ok) {
        return null
    }

    const usuarioJson = await usuario.json()
    if (!usuarioJson || !usuarioJson.id) {
        return null
    }

    return usuarioJson
}