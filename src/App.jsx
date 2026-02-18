import React from 'react'
import Router from './Router/Router'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    {/* toaster  */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          zIndex: 99999,
        }}
      />
      {/* router  */}
      <Router />
    </>
  )
}

export default App