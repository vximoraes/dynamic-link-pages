import '../public/assets/css/style.css'
import { buscarUsuario } from './api/usuarioApi'
import { inserirInformacoes } from './ui/inserirInformacoes'
import { mensagemUsuarioNaoEncontrado } from './ui/mensagens'

const params = new URLSearchParams(window.location.search)
const id = params.get("id")
if (!id) {
    window.location.replace(window.location.pathname + '?id=1');
}

if (id) {
    iniciarApp(id)
}

function iniciarApp(id: string) {
    const imagem = document.querySelector<HTMLImageElement>('#imagem')!
    const nome = document.getElementById('nome')!
    const linksContainer = document.getElementById('links-container')!
    const qrcode = document.querySelector<HTMLImageElement>('#qrcode')!
    const imagemContainer = document.getElementById('imagem-container')!
    const divNome = document.getElementById('div-nome')!
    const qrcodeContainer = document.getElementById('qrcode-container')!

    inserirInformacoesComVerificacao(id, imagem, nome, linksContainer, qrcode, imagemContainer, divNome, qrcodeContainer)
}

async function inserirInformacoesComVerificacao(
    id: string,
    imagem: HTMLImageElement,
    nome: HTMLElement,
    linksContainer: HTMLElement,
    qrcode: HTMLImageElement,
    imagemContainer: HTMLElement,
    divNome: HTMLElement,
    qrcodeContainer: HTMLElement
) {
    const usuario = await buscarUsuario(id)
    if (!usuario) {
        mensagemUsuarioNaoEncontrado(imagemContainer, divNome, linksContainer, qrcodeContainer)
        return
    }
    inserirInformacoes(usuario, imagem, nome, linksContainer, qrcode)
}