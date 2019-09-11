require(['gitbook'], function (gitbook) {
  function addScript (url) {
    var script = document.createElement('script')
    script.src = url
    script.async = 1
    var m = document.getElementsByTagName('head')[0]
    m.parentNode.insertBefore(script, m)
  }
  gitbook.events.bind('start', function (e, config) {
    var pluginConfig = config.gtag
    if (pluginConfig) {
      addScript('https://www.googletagmanager.com/gtag/js?id=' + pluginConfig.token)
  })

  gitbook.events.bind('page.change', function () {
    var pluginsConfig = gitbook.state.config.pluginsConfig.gtag
    if (pluginsConfig) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
  
      gtag('config', config.token);
    }
  })
})
