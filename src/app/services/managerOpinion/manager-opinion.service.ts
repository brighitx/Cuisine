import { Opinion } from './../../core/model/opinion';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { OpinionBuilder } from 'src/app/core/model/builders/opinionBuilder';
import { Opinionable } from 'src/app/core/model/interfaces/opinionable';

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

  createOpinion(rid: string, nameuser: string, image: string, opinionuser: string, mark: string): Promise<string> {
    return new Promise((resolver, rejected) => {
      const opinionBuilder = new OpinionBuilder();
      const noseque = opinionBuilder.restart()
        .image(image)
        .opinion(opinionuser)
        .mark(mark)
        .build(nameuser, rid);
      this.opinionsColection.doc(noseque.id).set({
        rid: noseque.rid,
        nameuser: noseque.nameuser,
        image: noseque.image,
        opinion: noseque.opinion,
        mark: noseque.mark
      })
        .then(() => {
          console.log("Opinion creada");
          console.log(noseque);
          resolver('Okay');
        })
        .catch(() => {
          rejected('Error');
        });
    });
  }
}
