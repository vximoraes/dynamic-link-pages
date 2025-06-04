export function mensagemSemId(imagemContainer: HTMLElement, divNome: HTMLElement, linksContainer: HTMLElement, qrcodeContainer: HTMLElement) {
    if (imagemContainer) imagemContainer.style.display = 'none'
    if (divNome) divNome.style.display = 'none'
    if (linksContainer) linksContainer.style.display = 'none'
    if (qrcodeContainer) qrcodeContainer.style.display = 'none'

    const msg = document.createElement('div')
    msg.style.margin = '40px auto'
    msg.style.fontSize = '1.2rem'
    msg.style.color = '#888'
    msg.style.textAlign = 'center'
    msg.textContent = 'Nenhum usuário selecionado. Por favor, forneça um ID na URL.'
    document.body.appendChild(msg)
}

export function mensagemUsuarioNaoEncontrado(imagemContainer: HTMLElement, divNome: HTMLElement, linksContainer: HTMLElement, qrcodeContainer: HTMLElement) {
    if (imagemContainer) imagemContainer.style.display = 'none'
    if (divNome) divNome.style.display = 'none'
    if (linksContainer) linksContainer.style.display = 'none'
    if (qrcodeContainer) qrcodeContainer.style.display = 'none'

    const msg = document.createElement('div')
    msg.style.margin = '40px auto'
    msg.style.fontSize = '1.2rem'
    msg.style.color = '#888'
    msg.style.textAlign = 'center'
    msg.textContent = 'Usuário não encontrado. Por favor, verifique o ID informado.'
    document.body.appendChild(msg)
}
