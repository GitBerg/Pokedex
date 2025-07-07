import type { Metadata } from 'next'
import ThemeProvider from './providers/ThemeProvider'
import ApolloProviderClient from './providers/ApolloProvider'
import StyledComponentsRegistry from './providers/StyledRegistry'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next Pokédex',
  description: 'GraphQL Pokédex with Next.js App Router',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <StyledComponentsRegistry>
          <ThemeProvider>
            <ApolloProviderClient>{children}</ApolloProviderClient>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
