import '../public/assets/css/style.css'
import { buscarUsuario } from './api/usuarioApi'
import { inserirInformacoes } from './ui/inserirInformacoes'
import { mensagemSemId, mensagemUsuarioNaoEncontrado } from './ui/mensagens'

const params = new URLSearchParams(window.location.search)
const id = params.get("id")

const imagem = document.querySelector<HTMLImageElement>('#imagem')!
const nome = document.getElementById('nome')!
const linksContainer = document.getElementById('links-container')!
const qrcode = document.querySelector<HTMLImageElement>('#qrcode')!
const imagemContainer = document.getElementById('imagem-container')!
const divNome = document.getElementById('div-nome')!
const qrcodeContainer = document.getElementById('qrcode-container')!

if (!id) {
    mensagemSemId(imagemContainer, divNome, linksContainer, qrcodeContainer)
} else {
    inserirInformacoesComVerificacao()
}

async function inserirInformacoesComVerificacao() {
    const usuario = await buscarUsuario(id!)
    if (!usuario) {
        mensagemUsuarioNaoEncontrado(imagemContainer, divNome, linksContainer, qrcodeContainer)
        return
    }
    inserirInformacoes(usuario, imagem, nome, linksContainer, qrcode)
}