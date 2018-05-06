import { Injectable } from '@angular/core';
@Injectable()
export class tulkarmService {
  constructor() {}
  /** All Categories */
  getAllCategories() {
    return [{
      id: 1,
      name: ' مدرسه الهدى لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c1.jpg'
    }, {
      id: 2,
      name: 'مدرسة ابو علاء لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c2.jpg'
    }, {
      id: 3,
      name: 'مدرسة الاسراء لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c3.jpg'
    }, {
      id: 4,
      name: 'مدرسة الانوار لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c4.jpg'
    }, {
      id: 5,
      name: 'مدرسة الجابي لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c5.jpg'
    }, {
      id: 6,
      name: 'مدرسة الوزني لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c6.jpg'
    }, {
      id: 7,
      name: 'مدرسة النور لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c7.jpg'
    }, {
      id: 8,
      name: 'مدرسة القدس لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c8.jpg'
    }, 
    
    ]
  }
}
