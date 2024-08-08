'use client';
import {
    GoogleMap,
    LoadScript,
    Marker,
    useJsApiLoader,
} from '@react-google-maps/api';
import { useState, useEffect, Suspense } from 'react';

const containerStyle = {
    width: '100%',
    height: '100%',
};

interface MapInterface {
    position?: google.maps.LatLngLiteral;
    center?: google.maps.LatLngLiteral;
    draggable?: boolean;
    onDragMarker?: (e: any) => void;
    onHoverMarker?: (e: any) => void;
}

const options = {
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
};

const Map = ({
    position = {
        lat: 14.599512,
        lng: 120.984222,
    },
    center = {
        lat: 14.599512,
        lng: 120.984222,
    },
    draggable = false,
    onDragMarker,
    onHoverMarker,
}: MapInterface) => {
    const [currentPosition, setCurrentPosition] =
        useState<google.maps.LatLngLiteral>(position);
    const [currentCenter, setCurrentCenter] =
        useState<google.maps.LatLngLiteral>(center);

    useEffect(() => {
        setCurrentPosition(position);
        setCurrentCenter(center);
    }, [position, center]);

    return (
        <LoadScript
            googleMapsApiKey={String(
                process.env.NEXT_PUBLIC_GOOGLE_CLOUD_SERVICES_API_KEY
            )}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentCenter}
                zoom={15}
                options={options}
            >
                <Marker
                    position={currentPosition}
                    draggable={draggable}
                    icon={{
                        url: '/images/location-marker.svg',
                    }}
                    onDragEnd={(e) => {
                        onDragMarker && onDragMarker(e);
                    }}
                    onMouseOver={(e) => {
                        onHoverMarker && onHoverMarker(e);
                    }}
                />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
