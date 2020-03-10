import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Opinionable } from './../../core/model/interfaces/opinionable';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Opinion } from 'src/app/core/model/opinion';

@Injectable({
  providedIn: 'root'
})
export class ManagerOpinionService {
  private opinions: Observable<Opinionable[]>;
  private opinionsColection: AngularFirestoreCollection<Opinionable>;
  private myOpinions: Opinion[];
  constructor(private afs: AngularFirestore, private firebaseAuth: AngularFireAuth, private storage: AngularFireStorage) {
    this.opinionsColection = this.afs.collection<Opinionable>('opinions');
    this.opinions = this.opinionsColection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
    this.opinions.subscribe(
      (res: any) => this.myOpinions = res,
      (err: any) => console.log('It is a error unexpected from firebase subscribe'));
  }

  getAllOpinions(): Array<Opinion> {
    const allOpinion = Array<Opinion>();
    for (const opinion of this.myOpinions) {
      allOpinion.push(opinion);
    }
    return allOpinion;
  }

  getOpinions(rid: string): Array<Opinion> {
    const opinionsRecipe = Array<Opinion>();
    this.getAllOpinions().forEach((opinion) => {
      if (opinion.rid === rid) {
        opinionsRecipe.push(opinion);
      }
    });
    return opinionsRecipe;
  }
  uploadOpinion(file, randomId) {
  }
}
