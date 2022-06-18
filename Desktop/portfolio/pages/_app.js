
import { ThemeProvider } from 'next-themes'
import MyLayout from '../components/MyLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute='class' >
    <Component {...pageProps} />
    </ThemeProvider>
 
  )
}

export default MyApp