"use client"
import React from 'react';
import Home from './Home/Home';
import Description from './Description/Description';
import Problems from './Problems/Problems';
import Introduction from './Home/Introduction/Introduction'
import Rating from './Rating/Rating'
import Test from './Testing/Test'
export default function page() {
  return (
    <>
    <Home></Home>
    <Description/>
    <Problems/>
    <Introduction></Introduction>
    <Rating></Rating>
    <Test></Test>
    </>
  );
}
