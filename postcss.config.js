const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html'],
      safelist: {
        standard: ['btn:hover', 'fade', 'show', 'showing', 'active'],
        deep: [/^popover/, /^bs-popover/, /^offcanvas/, /^collaps/, /^carousel-item/, /^modal/, /^tooltip/, /^bs-tooltip/]
        }
    })
  ]
}