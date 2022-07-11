import { useEffect, useState } from 'react'
import axios from 'axios'
import { MapComp } from './components/MapComp';
import { Header } from './components/Header';

interface AddressInterface{
    ip: string;
    isp: string;
    location: {
        country: string;
        city: string;
        postalCode: string;
        timezone: string;
        lat: number;
        long: number;
    }
}

export const App = () => {

    const [apiInfo, setInfo] = useState<AddressInterface>()
    const [error, setError] = useState(false)

    async function getAddress(ip : string){
        try{
            if(ip === ""){
                throw new Error
            }
            const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${ip}`
            console.log(url)
            const result = await axios.get(url)
            const data = await result.data
            
            const obj: AddressInterface = {
                ip: ip,
                isp: data.isp,
                location:{
                    country: data.location.country,
                    city: data.location.city,
                    postalCode: data.location.postalCode,
                    timezone: data.location.timezone,
                    lat: data.location.lat,
                    long: data.location.lng
                }
            }
    
            console.log(obj.location.lat)
            setInfo(obj)
        }catch(e){
            setError(true)
        }
       
    }

    useEffect(() => {
        getAddress('8.8.8.8')
    }, [])

    return (
        <div>
            <Header 
            ip={apiInfo?.ip} 
            isp={apiInfo?.isp} 
            city={apiInfo?.location.city} 
            error={error} 
            country={apiInfo?.location.country}
            timezone={apiInfo?.location.timezone}
            postalCode={apiInfo?.location.postalCode}
            getAddress={getAddress} />
            <MapComp lg={apiInfo?.location.long} lat={apiInfo?.location.lat} />
        </div>

    )
}
