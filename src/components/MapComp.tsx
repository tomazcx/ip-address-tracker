import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import location from '../assets/icon-location.svg'
import { Icon } from 'leaflet'
import { SetView } from './SetView';

interface MapInterface {
    lg?: number;
    lat?: number;
}
const marker = new Icon({
    iconUrl: location,
    iconSize: [50, 60]
})


export const MapComp = (props: MapInterface) => {

    return (
        <MapContainer
            center={[props.lat ?? 37.38605, props.lg ?? -122.08385]}
            zoom={13}
            scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[props.lat ?? 37.38605, props.lg ?? -122.08385]} icon={marker}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <SetView lat={props.lat ?? 37.38605} lg={props.lg ?? -122.08385} />
        </MapContainer>
    )
}