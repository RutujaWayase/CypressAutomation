/*
/////////// 1

let counter = 0;

for (var i = 1; i <= 10; i++) {

  counter+= i; // 0 = i+counter => c = 1+0 = 1 1+2 3

}

console.log(counter); 1 3 6

console.log(i); 1 
 

//123


////////// 2

class Output
{
    final static short i = 2;
    public static int j = 0;
    public static void main(String [] args)
    {
        for (int k = 0; k < 3; k++)
        {
            switch (k) // 0
            {
                case i: System.out.print(" 0 ");  // 2
                case i-1: System.out.print(" 1 "); //1
                case i-2: System.out.print(" 2 "); //0
            }
        }
    }
}

2
1
2
0
1
2

///// 3
String s1 = "Java";  
String s2 = "Java";  
StringBuilder sb1 = new StringBuilder();  
sb1.append("Ja").append("va");  
System.out.println(s1 == s2);  // true
System.out.println(s1.equals(s2));  //true
System.out.println(sb1.toString() == s1);  //Java ==
System.out.println(sb1.toString().equals(s1));



////////// 4
class Bird {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  class Crow extends Bird{
    speak() {
      super.speak(); //${name} makes a noise
      console.log(`${this.name} sings.`); //${name} sings.
    }
  }
  const crow = new Crow("Tim");
  crow.speak();

*/