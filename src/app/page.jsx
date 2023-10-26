"use client"
import React from 'react';
import Home from './Home';
import Description from './Description';
import Problems from './Problems';
import Introduction from './Introduction'
import Rating from './Rating'
import Test from './Test'
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
