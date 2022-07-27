import {useMemo} from 'react'
import {ApolloClient, gql, InMemoryCache} from '@apollo/client'
import { setContext } from 'apollo-link-context';
import merge from 'deepmerge'
// import {cache} from './cache'
import { isSSR } from 'constants/utils'
import isEqual from 'lodash/isEqual'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token = null
  if(!isSSR()){
    token = localStorage.getItem('token');
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

function createIsomorphLink() {
    const { HttpLink } = require('@apollo/client/link/http')
    return new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    })
}

function createApolloClient() {
  const httpLink = createIsomorphLink()

  return new ApolloClient({
      ssrMode: isSSR(),
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      query: {
        fetchPolicy: isSSR() ? 'no-cache' : 'cache-and-network',
        errorPolicy: 'all',
      }
  })
}


export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
            sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (isSSR()) return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}