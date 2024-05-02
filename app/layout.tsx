import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { Inter } from 'next/font/google'
import StoreProvider from '@/app/stroreProvider'
import theme from '../utils/theme'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
               <StoreProvider>
                  <body className={inter.className}>{children}</body>
               </StoreProvider>
            </ThemeProvider>
         </AppRouterCacheProvider>
      </html>
   )
}
