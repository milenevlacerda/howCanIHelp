(function () {
  'use strict'

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors.
  const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  )

  window.addEventListener('load', () => {
    if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || isLocalhost)) {
      navigator.serviceWorker.register('service-worker.js')
        .then((registration) => {
          // updatefound é disparado se service-worker.js mudar
          registration.onupdatefound = () => {
            // updatefound é disparado na primeira vez que o SW for instalado
            // e neste momento não há a necessidade de um novo carregamento da page
            // Então verifica se há um controle da page, ou seja
            // se há um SW instalado.
            if (navigator.serviceWorker.controller) {
              // O evento de updatefound implica que registration.installing (intalação do registro) está setado
              const installingWorker = registration.installing

              installingWorker.onstatechange = () => {
                switch (installingWorker.state) {
                  case 'installed':
                    // Neste ponto, o conteúdo antigo será deletado e
                    // o novo conteúdo será adicionado ao cache.
                    // Neste ponto é interessante avisar o usuário que a app foi atualizada
                    // e nova versão está disponível, assim pedir o recarregamento da page.
                    break

                  case 'redundant':
                    throw new Error('The installing ' +
                      'service worker became redundant.')

                  default:
                  // Ignore
                }
              }
            }
          }
        }).catch((e) => {
          console.error('Error during service worker registration:', e)
        })
    }
  })
})()
