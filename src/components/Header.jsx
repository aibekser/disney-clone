import React from 'react';
import logo from '../assets/images/logo.png';
import userAvatar from '../assets/images/user-avatar.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem.jsx";

function Header() {
    const [toggle, setToggle] = React.useState(false);

    const menu = [
        {
            name: "HOME",
            icon: <HiHome />,
        },
        {
            name: "SEARCH",
            icon: <HiMagnifyingGlass />,
        },
        {
            name: "WATCHLIST",
            icon: <HiPlus />,
        },
        {
            name: "ORIGINALS",
            icon: <HiStar />,
        },
        {
            name: "MOVIES",
            icon: <HiPlayCircle />,
        },
        {
            name: "SERIES",
            icon: <HiTv />,
        }
    ]

    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex items-center gap-8'>
                <img src={logo} alt="logo" className='w-[80px] md:w-[150px]' />
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='md:hidden flex gap-5'>
                    {menu.map((item, index) =>
                        index < 3 ? (
                        <HeaderItem key={item.name} name={''} Icon={item.icon} />
                        ) : null
                    )}
                </div>
                <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={<HiDotsVertical />} />
                    {toggle ? <div className='absolute bg-[#121212] border-[1px] border-gray-500 p-3 mt-3'>
                        {menu.map((item, index) =>
                            index >= 3 ? (
                                <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                            ) : null
                        )}
                    </div> : null}
                </div>
            </div>
            <div>
                <img src={userAvatar} alt="userAvatar" className='w-[60px] rounded-full' />
            </div>
        </div>
    );
}

export default Header;