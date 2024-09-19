import './Hello.css'
import React, {useState} from 'react';
export default function Hello({firstname,lastname="Jaidee", age="25"}){
    let name="Sirilux Weangdongbang";
    return (
        <div>
            <h1>Hello World {firstname} {lastname} {age}</h1>
        </div>
    );
}