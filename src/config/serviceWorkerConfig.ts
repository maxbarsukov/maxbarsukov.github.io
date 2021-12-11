import { Config } from 'src/lib/serviceWorker'

const config: Config = {
  onUpdate: (registration: ServiceWorkerRegistration) => {
    console.log(
      '%c[info] %cUnregister current service worker',
      'color: #2979ff;',
      'color: #e9e9e9;'
    )
    registration
      .unregister()
      .then(() => {
        // @ts-ignore
        window.postMessage('showUpdateNotification', process.env.PUBLIC_URL)
        console.log(
          '%c[info] %cSent showUpdateNotification message from SW',
          'color: #2979ff;',
          'color: #e9e9e9;'
        )
      })
      .catch((e) =>
        console.log(
          '%c[error] %cUnable to unregister service worker:',
          'color: #ff5252;',
          'color: #e9e9e9;',
          e
        )
      )
  },
  onSuccess: () => {
    // @ts-ignore
    window.postMessage('showUpdateSuccessNotification', process.env.PUBLIC_URL)
    console.log(
      '%c[success] %cService worker succeed in registration.',
      'color: #00e676;',
      'color: #e9e9e9;'
    )
  },
}

export default config
