import { Injectable } from '@angular/core';
@Injectable()
export class nablusService {
  constructor() {}
  /** All Categories */
  getAllCategories() {
    return [{
      id: 1,
      name: ' مدرسه الهدى لتعليم السياقة',
      image: 'https://shobiddak.com/uploads/picture/daleel/name/12566/thumb_101_3119.JPG'
    }, {
      id: 2,
      name: 'مدرسة ابو علاء لتعليم السياقة',
      image: 'https://shobiddak.com/uploads/picture/daleel/name/12696/thumb_101_3359.JPG'
    }, {
      id: 3,
      name: 'مدرسة النجاح لتعليم السياقة',
      image: 'https://shobiddak.com/uploads/picture/daleel/name/12704/thumb_101_3376.JPG'
    }, {
      id: 4,
      name: 'مدرسة الانوار لتعليم السياقة',
      image: 'https://shobiddak.com/uploads/picture/daleel/name/12699/thumb_101_3355.JPG'
    }, {
      id: 5,
      name: 'مدرسة الشروق لتعليم السياقة',
      image: 'https://shobiddak.com/uploads/picture/daleel/name/12702/thumb_101_3352.JPG'
    }, {
      id: 6,
      name: 'مدرسة النصر لتعليم السياقة',
      image: 'https://shobiddak.com/uploads/picture/daleel/name/12602/thumb_101_3281.JPG'
    }, {
      id: 7,
      name: 'مدرسة عامر لتعليم السياقة',
      image: 'https://shobiddak.com/uploads/picture/daleel/name/12708/thumb_101_3362.JPG'
    }, {
      id: 8,
      name: 'مدرسة القدس لتعليم السياقة',
      image: 'https://shobiddak.com/uploads/picture/daleel/name/13280/thumb_101_3988.JPG'
    }, 
    
    ]
  }
}
