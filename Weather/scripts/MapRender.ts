import { IMapRender } from './IMapRender'
export class MapRender implements IMapRender {
    showMap(pos: Position): void {
        let mapCanvas = document.getElementById("map");
        let mapOptions = {
            center: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            zoom: 5
        };
        let map = new google.maps.Map(mapCanvas, mapOptions);
    }
}