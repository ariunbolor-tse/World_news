import world from '../public/worldwide.png';
import search from '../public/search-interface-symbol.png'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import cancel from '../public/cancel.png'

const Header = ({onSearch, onCategoryChange, onCountryChange}) => {
    const [activate, setActivate]= useState(false)
    const [searchQuery, setSearchQuery] = useState('');

    const searchArticle = () => {
        setActivate(!activate)
    }

    const handleInputChange = (event) =>{
        setSearchQuery(event.target.value)
        onSearch(event.target.value);
    }

    const handleCategoryChange = (event) =>{
        onCategoryChange(event.target.value);
    }

    const handleCountryChange = (event) =>{
        onCountryChange(event.target.value);
    }

    return (
    <div className='relative z-50 w-screen h-24 flex items-center justify-center overflow-hidden'>

        {activate===false ?
            <div className={`flex flex-row  max-w-4xl fixed h-24 w-screen justify-between items-center bg-gradient-to-b from-white to-transparent `}>
                <div className='flex gap-4 items-center font-bold'>
                    <Link href='/' className='flex text-black'>
                        <Image 
                            alt='img'
                            width='25'
                            height='10'
                            src={world} />
                        <div className='pl-2'>World <span className='font-normal'>News</span></div>
                    </Link>
                    <div className='font-normal'>|</div>
                    <Link href='Business' className='font-semibold text-black '>Business</Link>
                    <Link  href='Health' className='font-semibold  text-black'>Health</Link>
                    <Link  href='Science' className='font-semibold  text-black'>Science</Link>
                    <Link  href='Sports' className='font-semibold  text-black'>Sports</Link>
                </div>
                <div className='h-4'>
                    <div className='h-4 w-4' onClick={searchArticle}>
                        <Image 
                            className='h-full w-full object-contain'
                            height='10'
                            width='10'
                            src={search}
                            alt='Search'/>
                    </div>
                </div>
            </div>


        :
        <div className='w-screen bg-gradient-to-b from-white to-transparentz-100'>
            <div className='flex justify-start mr-12 items-center opacity-50'>
                    <Link href='/' className='flex text-black'>
                        <Image 
                            alt='img'
                            width='25'
                            height='10'
                            src={world} />
                        <div className='pl-2 font-bold'>World <span className='font-normal'>News</span></div>
                    </Link>
                <div className='w-2/3 ml-32 mr-2'>
                    <input 
                    value={searchQuery}
                    onChange={handleInputChange}
                    className='w-full pl-4 h-6 rounded'
                    placeholder='Search'
                    ></input>
                    
                </div>
                <div>
                    <div>
                        <Image 
                            alt='img'
                            className='h-3 w-3'
                            onClick={searchArticle} 
                            height='10'
                            width='10'
                            src={cancel}/>
                    </div>
                </div>
            </div>
            <div className='w-2/3 pt-2 ml-60'>
                <div className='grid grid-cols-4 gap-4'>
                    <select id="countries" 
                    onChange={handleCountryChange}
                    className="bg-gray-50 border border-gray-300
                    text-gray-900 text-sm rounded-lg focus:ring-blue-500
                    focus:border-blue-500 block w-full p-2.5">
                        <option selected value="" >Country</option>
                        <option value="ud">United States</option>
                        <option value="ca">Canada</option>
                        <option value="fr">France</option>
                        <option value="de">Germany</option>
                    </select>
                    
                    <select id="categories" 
                    onChange={handleCategoryChange}
                    className="bg-gray-50 border border-gray-300
                    text-gray-900 text-sm rounded-lg focus:ring-blue-500
                    focus:border-blue-500 block w-full p-2.5">
                        <option selected value="">Category</option>
                        <option value="business">Business</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="health">Health</option>
                    </select>
                </div>
            </div>
        </div>
        }
    </div>
    );
}

export default Header;
