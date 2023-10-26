
import './globals.css'
import NavBar from './NavBar'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
    
      <body>
      <NavBar></NavBar>
        {children}
        </body>
   
    </html>
  )
}
