//: Playground - noun: a place where people can play
//import UIKit
import Cocoa

var str = "Hello, playground"

for i in -20 ... 20
{
    var j = i * i;
    var k = i * i * i;
    var n = j + k;
    var nn = j * k;
}



var j = -6.28
while j < 6.28 {
    var s1 = 4 * sin(j) / 3.14
    var s2 = 4 * sin(3 * j) / (3 * 3.14)
    var s3 = 4 * sin(3 * j) / (5 * 3.14)
    var s4 = 4 * sin(7 * j) / (7 * 3.14)
    
    s1
    s1 + s2
    s1 + s2 + s3
    s1 + s2 + s3 + s4
    
    j += 0.1
    
    
}