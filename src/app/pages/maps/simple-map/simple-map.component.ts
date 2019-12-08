import { AfterViewInit, Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from '../../../../theme/components/upgradable/upgradable.component';

declare const google: any;

@Component({
  selector: 'app-simple-map',
  templateUrl: './simple-map.component.html',
  styleUrls: ['./simple-map.component.scss'],
})
export class SimpleMapComponent extends UpgradableComponent implements AfterViewInit {
  @HostBinding('class.mdl-grid') public readonly mdlGrid = true;

  ngAfterViewInit() {
    const mapOptions = {
      center: { lat: 53.076022, lng: 8.807932 },
      zoomControl: true,
      zoom: 13,
      maxZoom: 20,
      minZoom: 5,
      scrollwheel: false,
      mapMaker: true,
      styles: [
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [
            { color: '#ffffff' },
            { weight: 1.9 },
          ],
        }, {
          featureType: 'road.local',
          elementType: 'geometry.fill',
          stylers: [
            { color: '#f0f0f0' },
            { weight: 1.4 },
          ],
        }, {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [
            { color: '#333333' },
          ],
        }, {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [
            { hue: '#000000' },
            { saturation: -100 },
            { lightness: 0 },
          ],
        }, {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [
            { color: '#d0d0d0' },
          ],
        }, {
          featureType: 'landscape.man_made',
          elementType: 'geometry.stroke',
          stylers: [
            { color: '#888888' },
          ],
        }, {
          featureType: 'landscape.man_made',
          elementType: 'geometry.fill',
          stylers: [
            { color: '#cccccc' },
          ],
        }, {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'poi.attraction',
          elementType: 'geometry',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'poi.business',
          elementType: 'geometry',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'poi.medical',
          elementType: 'geometry',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'poi.school',
          elementType: 'geometry',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'poi.sports_complex',
          elementType: 'geometry.fill',
          stylers: [
            { color: '#bbbbbb' },
          ],
        }, {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            { color: '#999999' },
          ],
        },
      ],
    };
    const map = new google.maps.Map(document.querySelector('.map__window'), mapOptions);
    const markerImage = 'assets/images/marker.png';
    const activeMarkerImage = 'assets/images/active_marker.png';
    const markers = {
      theatre: {
        marker: new google.maps.Marker({
          map,
          position: { lat: 53.076022, lng: 8.807932 },
          animation: google.maps.Animation.DROP,
          icon: activeMarkerImage,
          title: 'Bremer Rathaus',
          location: ' Am Markt 21, 28195 Bremen, Deutschland',
          openingHours: ' 11:00 - 16:00 ',
          description: 'Das Bremer Rathaus ist eines der bedeutendsten Bauwerke der Backsteingotik und der Weserrenaissance in Europa. Seit 1973 steht es unter Denkmalschutz. Im Juli 2004 wurde es zusammen mit dem Bremer Roland von der UNESCO zum Weltkulturerbe der Menschheit erklärt. ',
          moreInfoLink: 'https://de.wikipedia.org/wiki/Bremer_Rathaus',
        }),
      },
      bicyclePath: {
        marker: new google.maps.Marker({
          map,
          position: { lat: 53.0728, lng: 8.813415 },
          animation: google.maps.Animation.DROP,
          icon: markerImage,
          title: 'Kunsthalle Bremen',
          location: 'Am Wall 207, 28195 Bremen, Bremen, Deutschland',
          openingHours: ' 10:00 - 18:00 ',
          description: 'Die Kunsthalle Bremen ist ein bedeutendes deutsches Kunstmuseum, das sich durch wechselnde Ausstellungen ein hohes Ansehen erworben hat. Das Museum liegt in unmittelbarer Nähe zur Bremer Altstadt in den Wallanlagen an der „Kulturmeile“. ',
          moreInfoLink: 'https://de.wikipedia.org/wiki/Kunsthalle_Bremen',
        }),

      },
      uGallery: {
        marker: new google.maps.Marker({
          map,
          position: { lat: 53.06619, lng: 8.83951 },
          animation: google.maps.Animation.DROP,
          icon: markerImage,
          title: 'Weserstadion Bremen',
          location: 'Franz-Böhmert-Straße 1, Bremen, Deutschland',
          openingHours: '10:00 - 18:00',
          description: 'Das Weserstadion ist das Fußballstadion des deutschen Fußball-Bundesligisten Werder Bremen. Es liegt in Bremen direkt am rechten Ufer der Weser in der Pauliner Marsch, einem Überflutungsgebiet vor dem Osterdeich im Stadtteil Östliche Vorstadt, Ortsteil Peterswerder. Die Fans der Heimmannschaft versammeln sich vornehmlich in der Ostkurve. ',
          moreInfoLink: 'https://de.wikipedia.org/wiki/Weserstadion',
        }),
      },
      showInfo(target) {
        document.querySelector('.map__target-picture').classList.toggle('map__target-picture--hide');
        document.querySelector('.map__target-info').classList.toggle('map__target-info--hide');
        setTimeout(
          () => {
            document.querySelector('.map__target-title').innerHTML = target.title;
            document.querySelector('.map__target-location').innerHTML = `<i class=\"material-icons\">room</i>${target.location}`;
            document.querySelector('.map__target-opening-hours').innerHTML = `<i class=\"material-icons\">query_builder</i>${target.openingHours}`;
            document.querySelector('.map__target-description').innerHTML = `${target.description} <a class="map__target-more-info" href="${target.moreInfoLink}" target="_blank">Mehr</a>`;
            (document.querySelector('.map__target-picture') as HTMLElement).style.backgroundPositionX = target.image;
            document.querySelector('.map__target-picture').classList.toggle('map__target-picture--hide');
            document.querySelector('.map__target-info').classList.toggle('map__target-info--hide');
          },
          200,
        );
      },
      setActiveMarker() {
        for (const key in markers) {
          if (typeof(markers[key].marker) === 'object' && markers[key].marker != null) {
            markers[key].marker.setIcon(markerImage);
          }
        }
        if (this === markers) {
          markers.theatre.marker.setIcon(activeMarkerImage);
          markers.showInfo(markers.theatre.marker);
        } else {
          this.setIcon(activeMarkerImage);
          markers.showInfo(this);
        }
      },
    };
    markers.setActiveMarker();
    for (const key in markers) {
      if (typeof(markers[key].marker) === 'object' && markers[key].marker !== null) {
        markers[key].marker.addListener('click', markers.setActiveMarker);
      }
    }
    componentHandler.upgradeDom();
  }

}
