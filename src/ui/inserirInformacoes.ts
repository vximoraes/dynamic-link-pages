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
    if (typeof usuario.background === 'string' && usuario.background.trim().startsWith('url(')) {
        document.body.style.backgroundImage = usuario.background;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundColor = '';
    } else {
        document.body.style.backgroundImage = '';
        document.body.style.background = usuario.background;
    }
    inserirLinks(usuario, linksContainer)
    
    if (qrcode) {
        const currentUrl = window.location.href;
        qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(currentUrl)}&size=200x200`;
        qrcode.alt = 'QR Code para esta página';
    }
}