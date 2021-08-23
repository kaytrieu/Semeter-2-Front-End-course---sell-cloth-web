/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package btprojector;
import java.util.Date;
import java.time.LocalDate;
import java.util.concurrent.TimeUnit;

/**
 *
 * @author Administrator
 */
public class Projector {
    //properties
    int Id;
    String brand;
    double price;
    int warranty;
    LocalDate sellday;
    //method
    Projector(){//default constructor
        Id=11;
        brand="Sony";
        price=10000;
        warranty=12;
        sellday=LocalDate.of(2018, 9, 11);
    }

    Projector(int Id, String brand, double price, int warranty, LocalDate sellday) {
        //constructor with parameter
        this.Id = Id;
        this.brand = brand;
        this.price = price;
        this.warranty = warranty;
        this.sellday = sellday;
    } 
    void Output(){//xuat thong tin projector
        System.out.println("Id="+Id);
        System.out.println("brand="+brand);
        System.out.println("price="+price);
        System.out.println("warranty="+warranty);
        System.out.println("sellday="+sellday);
    }
    void ngayhethan(){
        System.out.println("ngay het han:"+sellday.plusMonths(warranty));
        //System.out.println(""+hethan.getDayOfMonth());
    }
    int compareto(Projector B){//ham so sanh ngay ban 2 may
    int i=this.sellday.compareTo(B.sellday); 
    if(i==1){
            return -1;
        }
        else if(i==0){
            return 0;
        }
        return 1;
    }
    double tienbaotri(Date ngaybaotri){//ham tinh tien bao tri
         //tao bien ngay het han
        LocalDate hethan= this.sellday.plusMonths(this.warranty);
        //chuyen dang LocalDate sang Date
        Date ngayhethan=new Date(hethan.getYear(), hethan.getMonthValue(), hethan.getDayOfMonth());
        //tinh khoang cach 2 ngay o don vi milisecond
        long getDiff=ngaybaotri.getTime()-ngayhethan.getTime();
        //chuyen tu milisecond sang day
        long getDaysDiff = TimeUnit.MILLISECONDS.toDays(getDiff);
        if(getDiff<0||getDiff==0){
            return 0;
        }
        else{
      return this.price*getDaysDiff/100;//tien bao tri=gia goc*so ngay vuot/100
            }
    }
    //ham chinh sua thong tin may
    void setId(int newId){
        if(newId>0){
        Id=newId;
        }
    }
    void setbrand(String newbrand){
        //newu newbrand la sony hoac hp
        if(newbrand.equalsIgnoreCase("Sony")||newbrand.equalsIgnoreCase("HP"))
            brand=newbrand;
    }
    void setprice(double newprice){
        //neu 1000000<newprice<20000000
        if(newprice>1000000&&newprice<20000000){
            price=newprice;
        }
    }
    void setwarranty(int newwarranty){
        if(newwarranty>0){
            warranty=newwarranty;
        }
    }
    void setSellday(LocalDate newsellday){
        //so sanh ngay moi va ngay hien hanh
        int x=this.sellday.compareTo(newsellday);
        //neu ngay hien hanh lon hon ngay moi
        if(x==1){
            sellday=newsellday;
        }
    }
    //ham lay tung properties cua may
    int getId(){
       return Id; 
    }
    String getbrand(){
        return brand;
    }
    double getprice(){
        return price;
    }
    int getwarranty(){
        return warranty;
    }
    LocalDate getsellday(){
        return sellday;
    }
}
