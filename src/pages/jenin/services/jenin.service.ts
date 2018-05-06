import { Injectable } from '@angular/core';
@Injectable()
export class jeninService {
  constructor() {}
  /** All Categories */
  getAllCategories() {
    return [{
      id: 1,
      name: ' مدرسة الفريد لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c1.jpg'
    }, {
      id: 2,
      name: ' مدرسة الولاء لتعليم للسياقة  ',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c2.jpg'
    }, {
      id: 3,
      name: 'مدرسة جرار لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c3.jpg'
    }, {
      id: 4,
      name: 'مدرسة جعفر الاسمر لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c4.jpg'
    }, {
      id: 5,
      name: 'مدرسة ومعهر لاسمر لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c5.jpg'
    }, 
  
  ]
  }
}
