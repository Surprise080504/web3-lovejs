import '../styles/globals.scss'
import '../styles/staking.scss'
import '../styles/connectpage.scss'
import '../styles/admin.scss'
import '../styles/requestform.scss'
import '../styles/nav.scss'

import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
