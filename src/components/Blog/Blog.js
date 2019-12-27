import React, { Component } from "react";

import Header from "../Header/Header";

class Blog extends Component {
  render() {
    return (
      <div className="thr-blog">
        <div className="thr-container">
          <Header />

          <div className="blog-1">
            <h4>What is thisArg parameter</h4>
            <p>As I was checking the specifications of Javascript array map method, I found out that there is a second parameter that can be passed to the method and I wondered what it does.</p>

            <p>And I found out that it is not only for the map method, but other Javascript array methods also has this argument as signature. The list of the methods are listed below</p>

            <ul>
              <li>Array.from</li>
              <li>Array.prototyp.filter</li>
              <li>Array.prototype.every</li>
              <li>Array.prototype.find</li>
              <li>Array.prototype.findIndex</li>
              <li>Array.prototype.forEach</li>
              <li>Array.prototype.some</li>
            </ul>

            <p>The MDN docs explains it as this</p>
            <p>Value to use as this when executing callback.</p>

            <p>Basically what it does is that, if a thisArgs is provided, it will be used as the this value for each invocation of the callback function. If it is not provided, undefined is used instead</p>

            <p>Also note that if ES6 fat arrow function is used, this was lexically bound when the function was created. So the thisArgs will have no effect. The other alternative to change the execution context is by the usage of call , bind and apply</p>

            <p>for example: </p>

            <code>
              {`let person  = {
                name: 'john',
                age: 24,
                location: 'Bangalore'
              }`}
            </code>

            <p>Let's compare the differences</p>

            <p>without thisArgs</p>

            <code>
              {`
                {
                  Object.keys(person).forEach(function(key) {
                    console.log(person[key]);
                  })
                }`}
            </code>

            <p>With thisArgs</p>

            <code>
              {`
                Object.keys(person).forEach(function(key) {
                  // this now refers to person

                  console.log(this[key])
                }, person)
                `}
            </code>

            <p>The same can be acheived with bind</p>

            <code>
              {
                `
                Object.keys(person).forEach(function(key) {
                  console.log(this[key])
                }.bind(person));
                `
              }
            </code>
          </div>

          <div className="blog-2">
            <h4>Implementing our own Array.map() method in javascript</h4>

            <p>
              Array.map is a built in javascript function of Arrays. This mehtod iterates over each individual elements of the arrays and returns a new array.
            </p>

            <p>For example</p>

            <code>
              {
                `
                const myArr = [1, 2, 3];
                const mapResult = myArr.map(fumction(item, index, array) {
                  return item * 2;
                })

                console.log(mapResult);
                `
              }
            </code>

            <p>The output of the code above will be</p>

            <code>
              {
                `
                [2, 4, 6]
                `
              }
            </code>

            <p>The map method accepts 3 parameters</p>

            <ul>
              <li>The current element that is processed</li>
              <li>The index of the element</li>
              <li>The  actual array</li>
            </ul>

            <p>So, how do we create our own map method ?</p>

            <p>Every object in javascript has prototype and arrays also has. We attach our custom map method to the prototype object of the array</p>

            <code>
              {
                `{
                  Array.prototyp.myMap = function (callback) {

                  }
                }`
              }
            </code>

            <p>Next step we have to do is loop through each elements in the array and do some operations, which will be passed to by the callback function which we execute</p>

            <code>
              {
                `Array.prototype.myMap = function(callback) {
                  const resultArr = [];

                  for (var i = 0; i < this.legth; i++) {
                    resultArr.push(callback(this[i], i, this));
                  }

                  return resultArr;
                }`
              }
            </code>

            <p>Now, lets test our custom map method</p>

            <code>
              {
                `
                myArr.myMap(funciton(item) {
                  return item * 2;
                })
                `
              }
            </code>

            <p>The output of the code would be :</p>

            <code>
              {`// [2, 4, 6]`}
            </code>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
