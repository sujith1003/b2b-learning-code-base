import { LightningElement, track } from 'lwc';

export default class HelloWorldnew extends LightningElement {
    HelloWorld = 'Hello World';
    Number1 = 1;
    Number2 = 2;

    @track mydata = {
        data1: 'a',
        data2: 'b',
        data3: 'c'

    }

    updateMydata(){
        var test = this.template.querySelector('h1');
        var test1 = this.template.querySelector('.append');
        test1.innerHTML = '<h1>hello</h1>';
        this.mydata.data1 = 'L';
        this.mydata = {...this.mydata, 'data1':'z'};
        console.log(test);
    }

    get addition() {
        return this.Number1 + this.Number2;
    }

    MyArray = ['kumar', 'rahul', 'babu'];
    MyArrayObj = [{name: 'kumar', age: '25'}, {name: 'Rahul', age: '35'}, {name: 'Raj', age: '65'}]

    get getArray() {
        return this.MyArray[0];
    }

    Condition1 = true;
    Condition2 = false;

}