//Nested Interface
package com.tns.ifet.day5.interfaces.nestedinterfaces;

public interface MyInterface {
	 void calculateArea();
	    interface MyInnerInterface {
	       int  id = 20;
	       void print();     
	    }
}