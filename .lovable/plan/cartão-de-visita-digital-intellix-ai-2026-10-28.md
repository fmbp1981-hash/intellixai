# Cartão de Visita Digital IntelliX.AI

## O que será criado
Uma página nova em **intellixai.com.br/cartao**, no visual da marca (fundo escuro, dourado, IntelliX dourado + .AI azul), pensada para o celular.

### Conteúdo do cartão
- Logo, nome "IntelliX.AI" e frase curta: "Inteligência Artificial que gera resultados reais"
- Dados já usados no site:
  - WhatsApp/Telefone: +55 81 98851-4775
  - E-mail: contato@intellixai.com.br
  - Site: intellixai.com.br
  - LinkedIn e Instagram (@ai_intellix)
- Botões grandes: WhatsApp, Ligar, E-mail, Site, LinkedIn, Instagram, "Agendar diagnóstico"

### Downloads
1. **Salvar contato (.vcf)** — adiciona a IntelliX.AI na agenda do celular com um toque; depois pode ser enviado pelo WhatsApp em Anexo > Contato.
2. **Baixar QR Code (PNG em alta resolução)** — aponta para a página do cartão, pronto para a gráfica.
3. **Baixar cartão como imagem (PNG)** — cartão com logo, contatos e QR Code, para enviar no WhatsApp ou status.
4. **Compartilhar** — abre o menu nativo do celular (WhatsApp, etc.) com o link do cartão.

### Atalho na tela inicial
Ícone com a logo IntelliX.AI ao "Adicionar à Tela de Início" no celular (sem modo offline).

## Detalhes técnicos
- Rota `src/routes/cartao.tsx` com head() próprio (título, descrição, OG).
- QR Code via pacote `qrcode` gerado no navegador; cartão-imagem desenhado em canvas.
- vCard gerado no navegador como Blob (`text/vcard`), logo embutida em base64.
- Manifest `public/manifest.webmanifest` + link no __root (apenas instalação, sem service worker).
- Página sem header/footer do site para parecer um cartão; link discreto para o site.
