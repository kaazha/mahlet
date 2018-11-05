import React from 'react'
import ReactDOM from 'react-dom'
import MainLayout from './components/MainLayout'

function MyApp() {
    return (
        <MainLayout />
    );
}

ReactDOM.render(
    <MyApp />,
    document.getElementById('app')
  )