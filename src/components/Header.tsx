import { useState } from "react"
import arrow from '../assets/icon-arrow.svg'

interface HeaderInterface {
    ip?: string;
    isp?: string;
    country?: string;
    city?: string;
    postalCode?: string;
    timezone?: string;
    error: boolean;
    getAddress(ip: string): void;

}

export const Header = (props: HeaderInterface) => {

    const [ipText, setText] = useState("")

    return (
        <header className="bg-pattern w-full  pt-8 flex flex-col items-center">
            <h1 className="text-center text-white text-3xl mb-8 font-medium">IP Address Tracker</h1>
            <div className="flex w-11/12 max-w-[600px] justify-center">
                <input onChange={e => setText(e.target.value)} type="text" className="flex-1 px-8 py-3 rounded-l-xl " placeholder='Search for any ip adress or domain' />
                <div onClick={() => props.getAddress(ipText)} className="bg-black rounded-r-xl flex items-center px-4 cursor-pointer hover:bg-gray-900 transition-colors">
                    <img src={arrow} alt="" />
                </div>
            </div>
            {props.error ? <span className='text-red-400 mt-2'>Insert a valid IP</span> : <></>}
            <div className='max-w-[1000px] gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-8 px-4 z-[100] relative top-16 rounded-xl shadow-2xl w-11/12 bg-white'>
                <div className='col-ip'>
                    <span className='title'>Ip Address</span>
                    <span className='info flex-1'>{props.ip}</span>
                </div>
                <div className='col-ip'>
                    <span className='title'>location</span>
                    <span className='info'>{`${props.city}, ${props.country} ${props.postalCode}`}</span>
                </div>
                <div className='col-ip'>
                    <span className='title'>timezone</span>
                    <span className='info'>{props.timezone}</span>
                </div>
                <div className='flex flex-col pl-4 gap-2 overflow-hidden md:gap-4 text-center md:text-left'>
                    <span className='title'>isp</span>
                    <span className='info'>{props.isp}</span>
                </div>
            </div>
        </header>
    )
}