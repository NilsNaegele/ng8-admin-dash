import { Component, HostListener, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-dodecahedron',
  templateUrl: './dodecahedron.component.html',
  styleUrls: ['./dodecahedron.component.scss'],
})
export class DodecahedronComponent implements OnInit {
  lastEventX = null;
  lastEventY = null;
  velocityX = 0;
  velocityY = 0;
  movementTimer = null;

  @HostListener('mousemove', ['$event'])
  mousemove(event: MouseEvent) {
    if (this.movementTimer != null) {
      clearTimeout(this.movementTimer);
    }

    $('#dodecahedron').addClass('closed');

    this.movementTimer = setTimeout(() => {
      $('#dodecahedron').removeClass('closed');
    },                              1600);

    if (this.lastEventX != null) {
      const velocityX = (event.clientX - this.lastEventX) * 0.025;
      const velocityY = (event.clientY - this.lastEventY) * 0.025;
      let maxVelocity = this.velocityX;

      if (Math.abs(velocityX) < Math.abs(velocityY)) {
        maxVelocity = velocityY;
      }

      this.velocityX += velocityX;
      this.velocityY += velocityY;
    }

    this.lastEventX = event.clientX;
    this.lastEventY = event.clientY;
    // this.draw();
  }
  constructor() { }

  ngOnInit() {

  }

  draw() {
    const FRICTION = 0.96;
    const MIN_VELOCITY = 0.01;

    const dodecahedron = $('#dodecahedron');

    if (dodecahedron.data('angleX') == null) {
      dodecahedron.data('angleX', 0);
      dodecahedron.data('angleY', 0);
    }

    let angleX = dodecahedron.data('angleX');
    let angleY = dodecahedron.data('angleY');

    angleX = (angleX + this.velocityX) % 360;
    dodecahedron.data('angleX', angleX);
    this.velocityX *= FRICTION;
    if (Math.abs(this.velocityX) < MIN_VELOCITY) {
      this.velocityX = 0;
    }
    angleY = (angleY + this.velocityY) % 360;
    dodecahedron.data('angleY', angleY);
    this.velocityY *= FRICTION;
    if (Math.abs(this.velocityY) < MIN_VELOCITY) {
      this.velocityY = 0;
    }
    // console.log(angleX);
    // console.log(angleY);
    dodecahedron
      .css('-webkit-transform', 'rotateX(' + angleY + 'deg) rotateY(' + -angleX + 'deg)')
      .css('-moz-transform', 'rotateX(' + angleY + 'deg) rotateY(' + -angleX + 'deg)')
      .css('transform', 'rotateX(' + angleY + 'deg) rotateY(' + -angleX + 'deg)');
    setTimeout(this.draw, 25);
  }

}
