import { Injectable } from '@angular/core';
@Injectable()
export class jerichoService {
  constructor() {}
  /** All Categories */
  getAllCategories() {
    return [{
      id: 1,
      name: ' مدرسه السويطي لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c1.jpg'
    }, {
      id: 2,
      name: 'مدرسه العجوري لتعليم للسياقة  ',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c2.jpg'
    }, {
      id: 3,
      name: 'مدرسة ماهر العناتي لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c3.jpg'
    }, {
      id: 4,
      name: 'مدرسة محمد الجوهري لتعليم السياقة',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c4.jpg'
    }, 
  
  ]
  }
}
