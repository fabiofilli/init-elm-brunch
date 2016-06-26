module.exports = {
  files: {
    javascripts: {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: 'css/app.css'
    },
    templates: {
      joinTo: 'js/app.js'
    }
  },
  paths: {
    watched: ['app']
  },
  plugins: {
    elmBrunch: {
      elmFolder: '.',
      mainModules: ['app/elm/Main.elm'],
      outputFolder: 'public/js'
    }
  },
}
