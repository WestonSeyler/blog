(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{719:function(n,s,a){"use strict";a.r(s);var t=a(30),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("material datepicker 需要用到模板变量，如果需要在循环出来datepicker可以这么干")]),n._v(" "),a("ol",[a("li",[n._v("直接把 *ngFor 中的index传给[matDatepicker]，用来引用组件")]),n._v(" "),a("li",[a("code",[n._v('*ngFor="let editItem of budget.edits; index as j;index as k;"')]),n._v(" j是组件的引用，k是循环索引。支持这种写法，把k传到方法里，方便操作哪一个日期组件。\n"),a("a",{attrs:{href:"https://stackblitz.com/edit/angular-material-multi-datepicker",target:"_blank",rel:"noopener noreferrer"}},[n._v("实例"),a("OutboundLink")],1),n._v("\n看代码")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-muldatepicker',\n  templateUrl: './muldatepicker.component.html',\n  styleUrls: ['./muldatepicker.component.styl']\n})\nexport class MuldatepickerComponent implements OnInit {\n  result = {\n    budgets: []\n  };\n\n  constructor() {\n  }\n\n  ngOnInit() {\n    this.result = {\n      'budgets': [{\n        id: 1,\n        edits: [\n          {\n            'id': 10,\n            'date': new Date('2019-01-01 00:00:00'),\n            amount: 100,\n          },\n          {\n            'id': 11,\n            'date': new Date('2019-01-18 00:00:00'),\n            amount: 150,\n          }\n        ]\n        },\n        {\n          id: 2,\n          edits: [\n            {\n              'id': 21,\n              'date': new Date('2019-02-10 00:00:00'),\n              amount: 0,\n            }\n          ]\n        }\n      ]\n    }\n  }\n\n  onAddOrUpdate() {\n    console.log(arguments);\n  }\n\n}\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br")])]),a("p",[n._v("模板")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('<pre>{{result.budgets|json}}</pre>\n<mat-list *ngFor="let budget of result.budgets;index as i;">\n  <div *ngFor="let editItem of budget.edits; index as j;index as k;">\n    <mat-form-field>\n      <input matInput [matDatepicker]="j" [(ngModel)]="editItem.date" placeholder="Choose a date">\n      <mat-datepicker-toggle matSuffix [for]="j"></mat-datepicker-toggle>\n      <mat-datepicker #j></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field>\n      <input type="number" min="0" matInput placeholder="amount" [(ngModel)]="editItem.amount">\n    </mat-form-field>\n    <button mat-icon-button color="primary" (click)="onAddOrUpdate(budget.id, editItem, i, k)">\n      <mat-icon>edit</mat-icon>\n    </button>\n  </div>\n</mat-list>\n\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);