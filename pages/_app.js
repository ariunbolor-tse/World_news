import Layout from '../components/layout/layout'
import '../styles/globals.css'
import Header from '../components/header'
import { useState } from 'react'

export default function App({Component, pageProps}){

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory]= useState('')
    const [selectedCountry, setSelectedCountry]= useState('')

    const handleInputChange=(query)=>{
        setSearchQuery(query);
    }

    const handleCountryChange=(country)=>{
        setSelectedCountry(country)
    }

    const handleCategoryChange=(category)=>{
        setSelectedCategory(category)
    }

    return (
    <>
    <div className='relative w-screen overflow-hidden'>
    <Header
        onSearch={handleInputChange}
        onCategoryChange={handleCategoryChange}
        onCountryChange={handleCountryChange}
    />
    <Layout >
        <Component {...pageProps}
            userInputs={{searchQuery, selectedCategory, selectedCountry}}
        />
    </Layout>
    </div>
    </>
    )
}