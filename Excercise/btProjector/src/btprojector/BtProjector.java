/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package btprojector;

import java.time.LocalDate;
import java.util.Date;

/**
 *
 * @author Administrator
 */
public class BtProjector {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Projector A=new Projector(10,"Samsung",1000000,12,LocalDate.of(2018, 10, 5));
        A.ngayhethan();//ngay het han bao tri may A
        Projector B=new Projector(12,"Sony",2000000,5,LocalDate.of(2017, 2, 2));
        B.ngayhethan();//xuat thong tin may B
        //so sanh ngay ban
        if(A.compareto(B)==0){
            System.out.println("2 ngay trung nhau");
        }
        else if(A.compareto(B)==1){
            System.out.println("ngay ban may A truoc");
        }
        else{System.out.println("ngay ban may B truoc");
        }
        //tao ngay bao tri
        Date ngaybaotri=new Date(2019, 10, 8);
        //tinh tien bao tri may A
        System.out.println("tien bao tri may A:"+A.tienbaotri(ngaybaotri));
        /*int newId=20;
        double newprice=3000000;
        String newbrand="HP";
        //sua thong tin may A
        A.setId(newId);
        A.setbrand(newbrand);
        A.setprice(newprice);*/
    }   
}

