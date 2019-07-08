class AppConfig {
  constructor() {
    this.apolloServerUri = this.loadVar('REACT_APP_APOLLO_SERVER_URI')
  }

  loadVar(name) {
    const value = process.env[name]

    if (!value) {
      throw new Error(`Must configure ${name}`)
    }

    return value
  }
}

export const appConfig = new AppConfig()
