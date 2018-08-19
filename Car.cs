using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
 
namespace Main_Method

{
public class Car
{
    public string Color;
    public string Manufacturer;

    public Car( )
    {
        Color = "";                  
        Manufacturer = "";
    }
}

public class SaloonCar : Car
{
    public int NumberOfSeats;

    public SaloonCar( )
    {
        NumberOfSeats = 0;
    }

    public SaloonCar(int Num)
    {
         NumberOfSeats = Num;
    }
        public SaloonCar(int Num, string Col)
    {
         NumberOfSeats = Num;
         Color = Col;

    }
        public SaloonCar(int Num, string Col, string Manu)
    {
         NumberOfSeats = Num;
         Color = Col;  
         Manufacturer = Manu;       
    }
}
   class Program
    {
        static void Main(string[] args)
        {
            // Starting execution
            // Creating object of class check
            check chk = new check();
            chk.accept(); //Invoking accept method
            chk.print(); //Invoking print method
            Console.ReadLine();
        }
    }
}