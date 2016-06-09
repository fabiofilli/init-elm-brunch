module.exports = {
  files: {
    javascripts: {
      joinTo: 'js/main.js'
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
      mainModules: ['app/elm/Main.elm'],
      outputFolder: 'app/js'
    }
  },
}
