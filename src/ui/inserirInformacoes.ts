import { inserirLinks } from './links'

export async function inserirInformacoes(
    usuario: any,
    imagem: HTMLImageElement,
    nome: HTMLElement,
    linksContainer: HTMLElement,
    qrcode: HTMLImageElement
) {
    imagem.src = usuario.imagem
    nome.textContent = usuario.nome
    document.body.style.background = usuario.background
    inserirLinks(usuario, linksContainer)
    qrcode.src = usuario.qrcode
}