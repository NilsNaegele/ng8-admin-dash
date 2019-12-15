import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as THREE from 'three';

// var camera, scene, renderer;
// var geometry, material, mesh;

// init();
// animate();

// function init() {

//     camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
//     camera.position.z = 1;

//     scene = new THREE.Scene();

//     geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
//     material = new THREE.MeshNormalMaterial();

//     mesh = new THREE.Mesh( geometry, material );
//     scene.add( mesh );

//     renderer = new THREE.WebGLRenderer( { antialias: true } );
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     document.body.appendChild( renderer.domElement );

// }

// function animate() {

//     requestAnimationFrame( animate );

//     mesh.rotation.x += 0.01;
//     mesh.rotation.y += 0.02;

//     renderer.render( scene, camera );

// }

@Component({
  selector: 'app-dodeca-three',
  templateUrl: './dodeca-three.component.html',
  styleUrls: ['./dodeca-three.component.scss'],
})
export class DodecaThreeComponent implements OnInit {
  @ViewChild('container', { static: true }) elementRef: ElementRef;
  private container: HTMLElement;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private cube: THREE.Mesh;

  constructor() {
    // console.log(THREE);

  }

  ngOnInit() {
    this.container = this.elementRef.nativeElement;

    // console.log(this.container);

    this.init();
  }

  init() {
    const screen = {
        width  : 800,
        height : 600,
      },
      view = {
      angle  : 45,
      aspect : screen.width / screen.height,
      near   : 0.1,
      far    : 1000,
    };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(view.angle, view.aspect, view. near, view.far);
    this.renderer = new THREE.WebGLRenderer();

    this.scene.add(this.camera);
    this.scene.add(new THREE.AxesHelper(20));

    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.renderer.setSize(screen.width, screen.height);
    this.container.appendChild(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry(5, 5, 5),
      material = new THREE.MeshBasicMaterial({ color : 0xFFFFFF, wireframe: true });

    this.cube = new THREE.Mesh(geometry, material);
    this.cube.position.set(-50, -50, -50);

    this.scene.add(this.cube);

    this.render();
  }

  render() {

    const self: DodecaThreeComponent = this;

    (function render() {
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);

      self.animate();
    }());

  }

  animate() {
    this.cube.rotateX(0.1);
    this.cube.rotateY(0.1);
    this.cube.position.addScalar(0.2);

  }

}
