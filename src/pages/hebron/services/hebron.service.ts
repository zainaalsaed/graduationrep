import { Injectable } from '@angular/core';
@Injectable()
export class hebronService {
  constructor() {}
  /** All Categories */
  getAllCategories() {
    return [{
      id: 1,
      name: ' المدرسة والكلية الاهلية لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c1.jpg'
    }, {
      id: 2,
      name: 'مدرسه الاخلاص للسياقة  ',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c2.jpg'
    }, {
      id: 3,
      name: 'مدرسة ابو الحيات لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c3.jpg'
    }, {
      id: 4,
      name: 'مدرسة ابو فخيده لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c4.jpg'
    }, {
      id: 5,
      name: 'مدرسة ابو معلا لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c5.jpg'
    }, {
      id: 6,
      name: 'مدرسة ابو يزن لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c6.jpg'
    }, {
      id: 7,
      name: 'مدرسة الاشاره لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c7.jpg'
    }, {
      id: 8,
      name: 'مدرسة الاقصى لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c8.jpg'
    },
    
  ]
  }
}
