import React from 'react';
import { observable, action, decorate } from 'mobx';

class StudentStore {
    name        = React.createRef();
    last_name   = React.createRef();
    address     = React.createRef();
    phone       = React.createRef();
    gpa         = React.createRef();
    students    = [
        {
            'name':'Julio',
            'last_name':'Carrillo',
            'address':'Avenida Emperadores',
            'phone':'5534916514',
            'gpa':10
        }
    ];
    
    addStudent = event => {
        const studentName       = this.name.current.value;
        const studentLastName   = this.last_name.current.value;
        const studentAddress    = this.address.current.value;
        const studentPhone      = this.phone.current.value;
        const studentGpa        = this.gpa.current.value;
        
        if (studentName.trim().length === 0 || studentLastName.trim().length === 0) {
            return 
        }

        this.students.push({
            name: studentName,
            last_name: studentLastName,
            address: studentAddress,
            phone: studentPhone,
            gpa:studentGpa 
        })

        this.name.current.value = '';
        this.last_name.current.value = '';
        this.address.current.value = '';
        this.phone.current.value = '';
        this.gpa.current.value = '';

        alert('Cool');
        
    }

}

decorate(StudentStore, {
    students: observable,
    name: observable,
    addStudent: action
})

const store = new StudentStore();
export default store;