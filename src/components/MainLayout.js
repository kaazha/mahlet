import React from 'react'
import AppNavBar from './NavBar'
import Footer from './footer'
import FeaturedContent from './FeaturedContent'
import Ribbon from './Ribbon'
import MainContent from './MainContent'

export default function MainLayout() {
    return (
        <div id="main">
            <header id="">
                <AppNavBar />
            </header>
            <div id="content">
            <FeaturedContent/>
            <Ribbon />
            </div>
            <div class="container">
                <MainContent/>
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}

