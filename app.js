import {Polygon} from './polygon.js'

class App {
  constructor(){
    //canvas요소 생성
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    //devicePixelRatio디스플레이의 픽셀 밀도
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    
    window.addEventListener('resize',this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize(){
    //body요소의 padding을 포함한 넓이와 높이를 설정
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.polygon = new Polygon(
      this.stageWidth / 2,
      this.stageHeight / 2,
      this.stageHeight / 3,
      3
    );
  }
  animate(){
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.polygon.animate(this.ctx)
  }
}
window.onload = () => {
  new App();
}