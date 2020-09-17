import React from 'react';
import { Table,Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';

function RubiAmla()
{
  return(
    <div>
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Amla</td> </tr>
              <tr><th scope="row">2</th>
              <td>Sugar</td> </tr>
              </tbody>
            </Table>
        </div>);
}


function AfterBathBaby()
{
  return(
    <div>
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Neem</td> </tr>
              <tr><th scope="row">2</th>
              <td>Sand</td> </tr>
              <tr><th scope="row">3</th>
              <td>Karikottai</td> </tr>
              <tr><th scope="row">3</th>
              <td>Paruthikottai</td> </tr>
              <tr><th scope="row">3</th>
              <td>Red chilly</td> </tr>
              </tbody>
            </Table>
        </div>);
}

function AfterBath()
{
  return(
    <div>
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Ginger</td> </tr>
              <tr><th scope="row">2</th>
              <td>Turmeric</td> </tr>
              <tr><th scope="row">3</th>
              <td>Marungapattai</td> </tr>
              </tbody>
            </Table>
        </div>);
}

function HerbalBath()
{
  return(
    <div>
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Veppampattai</td> </tr>
              <tr><th scope="row">2</th>
              <td>Poovarasampattai</td> </tr>
              <tr><th scope="row">3</th>
              <td>Nalla milagu kodi</td> </tr>
             
              <tr><th scope="row">4</th>
              <td>Kansirattai</td> </tr>
             
              <tr><th scope="row">5</th>
              <td>Manjal kilangu</td> </tr>
             
              <tr><th scope="row">6</th>
              <td>Irumbu thundu</td> </tr>
             
              <tr><th scope="row">7</th>
              <td>Nalla milagu</td> </tr>
              </tbody>
            </Table>
        </div>);
}

function PalaThailam()
{
  return(
    <div>
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Palaa Moolam</td> </tr>
              <tr><th scope="row">2</th>
              <td>Gingelly oil</td> </tr>
              </tbody>
            </Table>
        </div>);
}


function SittramuttiThailam()
{
  return(
    <div>
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Sittramutti root</td> </tr>
              <tr><th scope="row">2</th>
              <td>Gingelly oil</td> </tr>
              </tbody>
            </Table>
        </div>);
}

function DhristiSapadu()
{
    return(
        <div>
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Arai keerai</td> </tr>
          <tr><th scope="row">2</th>
              <td>Turmeric</td> </tr>
          <tr><th scope="row">3</th>
              <td>Curry leaves</td> </tr>
          <tr><th scope="row">4</th>
              <td>Pepper</td> </tr>
          <tr><th scope="row">5</th>
              <td>Salt</td> </tr>
              </tbody></Table></div>
    );
}

function AvoidFoods() {
  return (
    <div>
      <Table size="bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Foods to avoid</th>
            <th>Why to avoid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Spinach</td>
            <td>Takes time to digest.Although it helps in increasig supply,its better to avoid during the first month.
             </td>
          </tr>
          <tr>          
            <th scope="row">2</th>
            <td>Egg</td>
            <td>Makes mother and baby gassy</td>
          </tr>
          <tr>          
            <th scope="row">3</th>
            <td>Dried fish</td>
            <td>Aggravates itchiness around stutures and unhealed surgical wounds for c section mommies</td>
          </tr>
          <tr>          
            <th scope="row">4</th>
            <td>Potato,Vaalakai</td>
            <td>Makes mother and baby gassy</td>
          </tr>
          <tr>          
            <th scope="row">5</th>
            <td>Hot liquids/foods</td>
            <td>Brings diarrhoea for mother and baby</td>
          </tr>
          <tr>          
            <th scope="row">6</th>
            <td>Cold foods/liquids,even curd rice,lemon rice</td>
            <td>Mother and baby might catch cold </td>
          </tr>
          <tr>          
            <th scope="row">7</th>
            <td>Coconut</td>
            <td>Makes baby inactive</td>
          </tr>
          <tr>          
            <th scope="row">8</th>
            <td>Dosa</td>
            <td>Heats up body.Baby stools will be frothy</td>
          </tr>
          <tr>          
            <th scope="row">9</th>
            <td>Green chilly</td>
            <td>Pepper is preferred.Small amount of red chilly is allowed</td>
          </tr>
          <tr>          
            <th scope="row">10</th>
            <td>Pulses</td>
            <td>Makes mother and baby gassy</td>
          </tr>
          <tr>          
            <th scope="row">11</th>
            <td>Daal</td>
            <td>Only Moong daal is preferred</td>
          </tr>
          <tr>          
            <th scope="row">12</th>
            <td>Oil</td>
            <td>Only ghee and gingelly oil is advisable</td>
          </tr>
          <tr>          
            <th scope="row">13</th>
            <td>Raw vegetables</td>
            <td>Only cooked foods are recommended</td>
          </tr>
          <tr>          
            <th scope="row">14</th>
            <td>Non vegetarian foods</td>
            <td>Recommended to take only after 16days of delivery</td>
          </tr>
          <tr>          
            <th scope="row">15</th>
            <td>Coffee</td>
            <td>Not recommended during lactation</td>
          </tr>
          <tr>          
            <th scope="row">16</th>
            <td>Mustard</td>
            <td>Not recommended to temper any food with mustard as it heats up body</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

function Pugai()
{
    return(
        <div>
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Cup Sambrani</td> </tr>
          <tr><th scope="row">2</th>
              <td>Turmeric</td> </tr>
          <tr><th scope="row">3</th>
              <td>Oregano/Omam</td> </tr>
          <tr><th scope="row">4</th>
              <td>Neem leaf</td> </tr>
          <tr><th scope="row">5</th>
              <td>Garlic outer skin</td> </tr>
              </tbody></Table></div>
    );
}


function PathiyaRasam()
{
  return(
    <div>
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Garlic</td> </tr>
              <tr><th scope="row">2</th>
              <td>Red chilly</td> </tr>
              <tr><th scope="row">3</th>
              <td>Pepper</td> </tr>
              <tr><th scope="row">4</th>
              <td>Oregano</td> </tr>
              <tr><th scope="row">5</th>
              <td>Cumin seeds</td> </tr>
              </tbody>
            </Table>
        </div>);
}

function PoonduKuzhambu()
{
  return(
    <div>
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Garlic</td> </tr>
              <tr><th scope="row">2</th>
              <td>Red chilly</td> </tr>
              <tr><th scope="row">3</th>
              <td>Pepper</td> </tr>
              <tr><th scope="row">4</th>
              <td>Modi kattai</td> </tr>
              <tr><th scope="row">5</th>
              <td>Arisi</td> </tr>
              <tr><th scope="row">6</th>
              <td>Thippili</td> </tr>
              </tbody></Table>
        </div>);
}

function KaruveppilaiPodi()
{
    return(
    <div>
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Curry leaves</td> </tr>
              <tr><th scope="row">2</th>
              <td>Ghee</td> </tr>
              </tbody></Table>
        </div>);
    
}

function MilaguPodiKuzhambu()
{
    return(
    <div>
        <Table size="sm">
      <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Pepper</td> </tr>
              
          <tr><th scope="row">2</th>
              <td>Cumin seeds</td> </tr>
              <tr><th scope="row">3</th>
              <td>Tomato</td> </tr>
              <tr><th scope="row">4</th>
              <td>Ghee</td> </tr>
              </tbody></Table>
        </div>);
    
    }

function ParuppuPodi()
{
    return (
      <div>
        <Table size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
          <tr><th scope="row">1</th>
              <td>Toor daal</td> </tr>
              
          <tr><th scope="row">2</th>
              <td>Pepper</td> </tr>
              
          <tr><th scope="row">3</th>
              <td>Cumin</td> </tr>
              
          <tr><th scope="row">4</th>
              <td>Ghee</td> </tr>
                        </tbody>
        </Table>
      </div>
    );
}

function VendayaKazhi()
{
    return(
        <div>
        <Table size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
              <tr><th scope="row">1</th>
              <td>Fenugreek</td> </tr>
              
              <tr><th scope="row">2</th>
              <td>Raw rice</td> </tr>
              
              <tr><th scope="row">3</th>
              <td>Urad daal</td> </tr>
              
              <tr><th scope="row">4</th>
              <td>Karupatti</td> </tr>
              <tr><th scope="row">5</th>
              <td>Ghee</td> </tr>
              </tbody></Table>
              </div>
    );
}

function PrasavaLegiyam()
{
    return (
      <div>
        <Table size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
              <tr><th scope="row">1</th>
              <td>Turmeric</td> </tr>             
              
              <tr><th scope="row">2</th>
              <td>Dried ginger</td> </tr>                           
              <tr><th scope="row">3</th>
              <td>Pepper</td> </tr>             
              <tr><th scope="row">4</th>
              <td>Thippili</td> </tr>             
              <tr><th scope="row">5</th>
              <td>Oregano/Omam</td> </tr>             
              <tr><th scope="row">6</th>
              <td>Vilva ver</td> </tr>             
              <tr><th scope="row">7</th>
              <td>Jeera/Cumin</td> </tr>             
              <tr><th scope="row">8</th>
              <td>Fennel seeds</td> </tr>             
              <tr><th scope="row">9</th>
              <td>Poppy seeds</td> </tr>             
              <tr><th scope="row">10</th>
              <td>Parpada pul</td> </tr>             
              <tr><th scope="row">11</th>
              <td>Vaivilangam</td> </tr>             
              <tr><th scope="row">12</th>
              <td>Thaalisa patthiri</td> </tr>             
              <tr><th scope="row">13</th>
              <td>adhividayam</td> </tr>             
              <tr><th scope="row">14</th>
              <td>Agrakaasuram</td> </tr>             
              <tr><th scope="row">15</th>
              <td>Sitharathai</td> </tr>             
              <tr><th scope="row">16</th>
              <td>Adhimathuram</td> </tr>             
              <tr><th scope="row">17</th>
              <td>Kadukkai</td> </tr>             
              <tr><th scope="row">18</th>
              <td>Nellikkai</td> </tr>             
              <tr><th scope="row">19</th>
              <td>Thaandrikkai</td> </tr>             
              <tr><th scope="row">20</th>
              <td>Lavangapattai</td> </tr>             
              <tr><th scope="row">21</th>
              <td>Parangipattai</td> </tr>             
              <tr><th scope="row">22</th>
              <td>Karunjeeragam</td> </tr>             
              <tr><th scope="row">23</th>
              <td>Jaathipathiri</td> </tr>             
              <tr><th scope="row">24</th>
              <td>Amukkura ver</td> </tr>             
              <tr><th scope="row">25</th>
              <td>Vaal milagu</td> </tr>             
              <tr><th scope="row">26</th>
              <td>Narukku moolam</td> </tr>             
              <tr><th scope="row">27</th>
              <td>Sadhakuppai</td> </tr>  
                            
              <tr><th scope="row">28</th>
              <td>Kraambu</td> </tr>  
                            
              <tr><th scope="row">29</th>
              <td>Ginger</td> </tr>  
                            
              <tr><th scope="row">30</th>
              <td>Cashew nuts</td> </tr>  
                            
              <tr><th scope="row">31</th>
              <td>Palaya karupatti</td> </tr>  
          </tbody>
        </Table>
      </div>
    );
}

function PoonduLegiyam()
{
    return(
        <div>
        <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Ingredient</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>White Garlic</td>
            <td>12 Large size whole garlic</td>
          </tr> 
          <tr>
            <th scope="row">2</th>
            <td>Palm jagerry/Karupatti</td>
            <td>100gm</td>
          </tr> 
          <tr>
            <th scope="row">3</th>
            <td>Ghee</td>
            <td></td>
          </tr> 
          </tbody>
          </Table>
        </div>
    );
}


function SukkuLegiyam()
{
    return(
        <div>
        <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Ingredient</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Dried ginger</td>
            <td></td>
          </tr> 
          <tr>
            <th scope="row">2</th>
            <td>Palm jagerry/Karupatti</td>
            <td>100gm</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Ghee</td>
            <td></td>
          </tr> 
          </tbody>
          </Table>
        </div>
    );
}

function ThreeDayMarundhu()
{
    return(
        <div>
        <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Ingredient</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mustard</td>
            <td>100gm</td>
          </tr>          
          <tr>
            <th scope="row">2</th>
            <td>Palm jaggery/Karupatti</td>
            <td>1/4 kg</td>
          </tr>
      </tbody>
      </Table>
      </div>  
    );
}


function KuzhiyalPodi()
{
    return(
        <div>
        <Table size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Ingredient</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Oil</td>
            <td></td>
          </tr>          
          <tr>
            <th scope="row">2</th>
            <td>Turmeric</td>
            <td></td>
          </tr>          
          <tr>
            <th scope="row">3</th>
            <td>Turmeric</td>
            <td></td>
          </tr>          
          <tr>
            <th scope="row">4</th>
            <td>Red chilly</td>
            <td></td>
          </tr>          
          <tr>
            <th scope="row">5</th>
            <td>Arisi</td>
            <td></td>
          </tr>          
          <tr>
            <th scope="row">6</th>
            <td>Sambrani</td>
            <td></td>
          </tr>                   
          <tr>
            <th scope="row">7</th>
            <td>Oregano</td>
            <td></td>
          </tr>
      </tbody>
      </Table>
      </div> 
       
    );
}

function IngredientsKuzhambuPodi()
{
  return (
    <div>
     
              
    <Table size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Ingredient</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Coriander seeds</td>
          <td>150gm</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mustard seeds</td>
          <td>200gm</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Modi</td>
          <td>50gm</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Pepper</td>
          <td>10gm</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Lavangam</td>
          <td>5gm</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Oregano</td>
          <td>5gm</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Karunjeeragam</td>
          <td>5gm</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Dried ginger</td>
          <td>25gm</td>
        </tr>
      </tbody>
    </Table>
    </div>
   
  );
 }

 
function HerbalTeaIng()
{
  return (
    <div>
     
              
    <Table size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Ingredient</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Adhimathuram</td>
          <td>10%</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Sitharathai</td>
          <td>10%</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Nelli vattral</td>
          <td>10%</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Dried Ginger</td>
          <td>5%</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Thippili</td>
          <td>5%</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Pepper</td>
          <td>5%</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Aavaaram poo</td>
          <td>10%</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Tulsi</td>
          <td>10%</td>
        </tr>        
        <tr>
          <th scope="row">8</th>
          <td>Arugam pul</td>
          <td>10%</td>
        </tr>                
        <tr>
          <th scope="row">9</th>
          <td>Tea(Green)</td>
          <td>15%</td>
        </tr>                
        <tr>
          <th scope="row">10</th>
          <td>Vasambu</td>
          <td>10%</td>
        </tr>
      </tbody>
    </Table>
    </div>
   
  );
 }

export default IngredientsKuzhambuPodi;
export {ThreeDayMarundhu,PoonduLegiyam,PrasavaLegiyam,VendayaKazhi,KaruveppilaiPodi,AfterBath,
  SittramuttiThailam,ParuppuPodi,MilaguPodiKuzhambu,Pugai,AvoidFoods,HerbalBath,AfterBathBaby,
  PoonduKuzhambu,PathiyaRasam,DhristiSapadu,KuzhiyalPodi,RubiAmla,PalaThailam,SukkuLegiyam,HerbalTeaIng};