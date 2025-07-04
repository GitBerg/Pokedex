'use client'

import { ApolloProvider } from '@apollo/client'
import { ReactNode } from 'react'
import { client } from '../../lib/apollo'

export default function ApolloProviderClient({
  children,
}: {
  children: ReactNode
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
