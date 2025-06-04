export function inserirLinks(usuario: any, linksContainer: HTMLElement) {
    linksContainer.innerHTML = ''
    usuario.link.forEach((link: any) => {
        const div = document.createElement('div')
        div.style.background = usuario.cor_link
        div.style.borderRadius = usuario.border_radius
        div.onmouseover = () => div.style.background = usuario.cor_hover
        div.onmouseout = () => div.style.background = usuario.cor_link

        const iconeHtml = `<img src="${link.icone}" alt="" style="width:22px;height:22px;margin-right:10px;vertical-align:middle;">`
        div.innerHTML = `${iconeHtml}<a href="${link.url}" target="_blank" style="color:${usuario.cor_texto_link || '#fff'}">${link.texto}</a>`
        linksContainer.appendChild(div)
    })
}