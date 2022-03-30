import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/home'},
        { id: 2, name: 'Shop', link: '/shop'},
        { id: 3, name: 'Order', link: '/order'},
        { id: 4, name: 'About', link: '/about'},
        { id: 5, name: 'Contact Us', link: '/contact-us' }
    ]
    // const { name, link } = props.route;
    return (
        
        <div>
            <div onClick={()=>setOpen(!open)} className='h-6 w-6 md:hidden'>
                  {  open ? <XIcon></XIcon> :  <MenuIcon ></MenuIcon>}
            </div>
            <nav>
                <ul className={`md:flex justify-center absolute duration-300 ease-in ${open ? "top-6" : "top-[-120px]"}`}>
                    
             {
                routes.map(route =><Link key={route.id} route={route}></Link>)
            }
                </ul>
            </nav>

            {/* <ul>
                <li><a href={link}>{ name}</a></li>
            </ul> */}
        </div>
    );
};

export default Navbar;