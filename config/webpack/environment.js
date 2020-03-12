const { environment } = require('@rails/webpacker')

module.exports = environment


const { environment } = require('@rails/webpacker')

// Bootstrap 4 has a dependency over jQuery & popper.js:
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugun({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })
  )

module.exports = environment
