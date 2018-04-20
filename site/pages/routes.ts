interface documentInterface {
  [key: string]: {
    [key: string]: any
  }
}

interface componentsInterface {
  [key: string]: {
    [key: string]: any
  }
}

interface routesInterface {
  document: documentInterface
  components: componentsInterface
}

const routes: routesInterface = {
  document: {},
  components: {
    Basic: {
      button: require('./button'),
      heading: require('./heading'),
      layout: require('./layout')
    },
    Nav: {
      tabs: require('./tabs')
    }
  }
}

export default routes
