const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true, // <--- ativa o Cypress Studio
    setupNodeEvents(on, config) {
      // eventos de teste aqui, se precisar
    }
  }
})
