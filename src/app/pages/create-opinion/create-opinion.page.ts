import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IDatabase } from 'src/app/interfaces/database-i';

@Component({
  selector: 'app-create-opinion',
  templateUrl: './create-opinion.page.html',
  styleUrls: ['./create-opinion.page.scss'],
})
export class CreateOpinionPage implements OnInit {
  id: string;
  imagenes: any = [];
  opciones: any;
  puntuacion: string;
  opinionuser: string;
  nombreuser:string;

  constructor(public dataBase: IDatabase, private imagePicker: ImagePicker, private camera: Camera, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.nombreuser = this.obtenerUsuario().name;
  }

  ngOnInit() {
  }

  obtenerUsuario() {
    return this.dataBase.takeCurrentUser();
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
