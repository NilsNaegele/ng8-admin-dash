import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import * as THREE from 'three';

@Component({
  selector: 'app-dodeca-three',
  templateUrl: './dodeca-three.component.html',
  styleUrls: ['./dodeca-three.component.scss'],
})
export class DodecaThreeComponent implements AfterViewInit {
  private renderer;
  private camera;
  private scene;
  private ambientLight;
  private pointLight;

  private mesh;

  constructor() { }

  ngAfterViewInit() {
    this.createRenderer();
    this.createCamera();
    this.createLight();
    this.createScene();
    this.renderCanvas();
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: <HTMLCanvasElement>document.getElementById('canvas'),
      antialias: true
    });
    // this.renderer.setClearColor(0xc75050);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      18, /** Field of view */
      window.innerWidth / window.innerHeight, /** Aspect Ratio */
      0.1, /** Near break point */
      3000 /** Far Break point */
    );
  }

  createLight() {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.pointLight = new THREE.PointLight(0xffffff, 0.5);
  }

  createScene() {
    this.scene = new THREE.Scene();
    this.mesh = this.createMesh();
    this.scene.add(this.ambientLight, this.pointLight, this.mesh);
    this.animateMesh();
  }

  createMesh() {
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshLambertMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -1000);
    return mesh;
  }

  animateMesh() {
    window.requestAnimationFrame(() => this.animateMesh());
    this.mesh.rotation.x += 0.1;
    this.mesh.rotation.y += 0.1;
    this.renderer.render(this.scene, this.camera);
  }

  renderCanvas() {
    this.renderer.render(this.scene, this.camera);
  }
}
