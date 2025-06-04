export async function buscarUsuario(id: string) {
    const usuario = await fetch(`http://localhost:3000/usuarios/${id}`)
    if(!usuario.ok) {
        return null
    }

    const usuarioJson = await usuario.json()
    if (!usuarioJson || !usuarioJson.id) {
        return null
    }

    return usuarioJson
}