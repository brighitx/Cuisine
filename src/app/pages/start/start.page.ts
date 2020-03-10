import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  imagenes: any = [];
  opciones: any;
  slideTexto = [
    '¡Hacemos que cocinar cada día sea una diversión!',
    'Recetas caseras y sencillas con preparación paso a paso',
    'Deliciosas recetas para todos los gustos'];

  constructor(public menuCtrl: MenuController, private imagePicker: ImagePicker, private camera: Camera) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  captureAndUploadToFirebaseStorage() {
    var options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      var base64Str = 'data:image/jpeg;base64,' + imageData;
    }, (Err) => {
      alert(JSON.stringify(Err));
    });
  }

  pickImages() {
    console.log('entra');
    this.opciones = {
      width: 100,
      height: 100
    };
    this.imagePicker.requestReadPermission().then(result => {
      console.log('requestReadPermission: ', result);
      if (result == "OK") {
        this.imagePicker.getPictures(this.opciones).then((results) => {
        });
      }
    });
  }

}
