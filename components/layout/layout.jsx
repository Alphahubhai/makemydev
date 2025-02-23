import React from 'react';
// Remove any navbar imports if they exist
// import Navbar from './navbar';  <- Remove this line if it exists
import Footer from './footer'

export default function Layout({ children }) {
	return (
		<>
		{/* Remove the Navbar component if it exists */}
		<main>{children}</main>
		<Footer />
		</>
	)
}