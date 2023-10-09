import React from 'react'
import Header from './Header'
import Footer from './Footer'

function DefaultLayout( {children }) {
  return (
    <div>
        <div className='default-layout' >
            <header className='header'>
                <Header />
            </header>

            <main className='main' >
                {children}
            </main>

            <footer className='footer'>
                <Footer />
            </footer>
        </div>


    </div>
  )
}

export default DefaultLayout