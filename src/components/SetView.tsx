import { useMap } from "react-leaflet";

interface ViewProps{
    lat?: number;
    lg?: number;
}

export const SetView = (props : ViewProps) => {
    const map = useMap();
    map.setView([props.lat ?? 37.38605, props.lg ?? -122.08385], map.getZoom());

    return null;
}