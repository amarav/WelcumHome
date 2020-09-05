import React from 'react';
import { Table } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem, } from 'reactstrap';   
import { Link } from 'react-router-dom';

const DietChart = (props) => {
  return (
    <div className="container align-items-center justify-content-center ">
    
    <section className="page-section bg-light" >
    <div className="row">
          <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>              
              <BreadcrumbItem><Link to="/Lactation">Lactation</Link></BreadcrumbItem>
              <BreadcrumbItem active> Diet Chart</BreadcrumbItem>
          </Breadcrumb>          
      </div>
    <div className="container-fluid">
    <div className="text-center">
      <h3 className="section-heading text-uppercase">Lactation Diet Chart</h3>
      <h3 className="section-subheading text-muted">Routine diet throughout breastfeeding
      </h3>
    </div>
    <div className = "align-items-center justify-content-center">
       A daily healthy routine during breastfeeding is important to sustain milk flow and production. Having known what foods
       increase secretion,you can include them as part of your regular diet.I've drafted a diet chart  to 
       incorporate foods that boost lactation in the table below. Its important to stay healthy when you have a baby to feed.So keeping 
       the health of baby and mother in mind this chart is drafted.<br /><br/>
       Some of the below foods mentioned maybe allergic to you,so chose which is best for you and your baby.
       Paal sura and tender brinjal increases itchiness around your unhealed wounds.Its better to avoid them during the initial weeks and later 
       include it as part of your diet.<br /><br/>
       This routine should be only followed 28 days after delivery. For the first month, it is advised to be in patthiyam.
       To know more about the post-partum diet to be taken for one month after delivery, refer to  Post partum diet for first month
       <br /><br/>
    </div>
    <div className="row justify-content-center">  
    <div className="col-auto">   
    <Table hover responsive bordered>
      <thead className="bg-header text-white">
        <tr>
          <th>TIME</th>
          <th>VEGETARIAN DIET</th>
          <th>NON-VEGETARIAN DIET</th>
          <th>HOW THIS HELPS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>6 am</td>
          <td>Ginger chaaru with honey</td>
          <td>Ginger chaaru with honey</td>
          <td>Improves digetion.Relieves constipation.</td>
        </tr>
        <tr>
          <td>6:30 am</td>
          <td>2 glasses of milk with Lactare granules</td>
          <td>2 glasses of milk with Lactare granules</td>
          <td>Main ingredient in this is Shatavari which greatly enhances milk secretion</td>
        </tr>
        <tr>
          <td>7 am</td>
          <td>Soaked Dry grapes/Soaked vendhayam</td>
          <td>Soaked Dry grapes/Soaked vendhayam</td>          
          <td>Boosts immunity.Increases milk production and flow</td>
        </tr>
        <tr>
          <td>9 am</td>
          <td>Idly/Idiappam with milk/Wheat Puttu</td>
          <td>Idly with Mutton Maarkandam Kuzhambu/Sura Puttu</td>                   
          <td>Steamed foods are good for new mothers as they are easily digested</td>
        </tr>     
        <tr>
          <td>9:30 am</td>
          <td>Sowbhagya sundi legiyam</td>
          <td>Sowbhagya sundi legiyam</td>
          <td>All needed nutrients for breastfeeding mothers</td>
        </tr>   
        <tr>
          <td>11 am</td>
          <td>Vegetable soup</td>
          <td>Naatukozhi soup/Aatukkal soup/Mutton Rib bone soup</td>
          <td>Plenty of liquids intake is important during breastfeeding</td>
        </tr>        
        <tr>
          <td>1 pm</td>
          <td>Marundhu Kuzhambu with vegetable fried in ghee or Spinach</td>
          <td>Sardines/Dry fish/Mutton liver or spleen with marundhu podi</td>
          <td>Marundhu kuzhambu is a traditional tamilnadu recipie needed for the good health of mother and baby </td>
        </tr>                
        <tr>
          <td>2 pm</td>
          <td>Vetrilai chunnambu/Jeera Water</td>
          <td>Vetrilai chunnambu/Jeera Water</td>
          <td>Improves digestion</td>
        </tr>                      
        <tr>
          <td>4 pm</td>
          <td>Nuts/Dates/Apricots/Figs/Pomegranate/Papaya</td>
          <td>Nuts/Dates/Apricots/Figs/Pomegranate/Papaya</td>
          <td>Iron rich fruits is vital for both mother and baby</td>
        </tr>
        <tr>
          <td>5 pm</td>
          <td>Sago payasam/Sugarcane juice/Arugampul juice</td>
          <td>Sago payasam/Sugarcane juice/Arugampul juice</td>
          <td>These are game changer foods during breastfeeding.</td>
        </tr>        
        <tr>
          <td>6 pm</td>
          <td>Mothers horlicks/Boiled tapioca/Khus khus balls/Ellu urundai/Groundnuts</td>
          <td>Mothers horlicks/Boiled tapioca/Khus khus balls/Ellu urundai/Groundnuts</td>
          <td>These are good sources of calcium and help in improving bone strength</td>
        </tr>                
        <tr>
          <td>7 pm</td>
          <td>Oats/Oatmeal cookies/Bread/Bun/Milk rusk</td>
          <td>Oats/Oatmeal cookies/Bread/Bun/Milk rusk</td>
          <td>Instantly increase prolactin levels needed for feeding mothers</td>
        </tr>
        <tr>
          <td>9 pm</td>
          <td>Wheat dosa/Rava/Broken wheat rava</td>
          <td>Chapathi with chicken/mutton kurma</td>
          <td>Wheat is a magic food to increase milk production</td>
        </tr>        
        <tr>
          <td>10 pm</td>
          <td>Garlic with karupatti</td>
          <td>Garlic with karupatti</td>
          <td>Detoxify body,relieve gas and maintain cholestrol levels</td>
        </tr>              
        <tr>
          <td>10:30 pm</td>
          <td>Prasava legiyam/Iron and folic acid supplements</td>
          <td>Prasava legiyam/Sowbhagya sundi legiyam/Iron and folic acid supplements</td>
          <td>Important to regain strength after delivery</td>
        </tr>
      </tbody>
    </Table>
    </div>  
    </div>
    </div>
    </section>
    </div>
  );
}

export default DietChart;