import React from 'react'

const Footer = () => {
    const Year = new Date().getFullYear()
    return (
    <footer>
        <p className="mt-20 mb-5 text-center text-sm text-slate-400">Copyright &copy; { Year } Jeremy Moser. All rights reserved.<br /></p>
    </footer>
  )
}


export default Footer