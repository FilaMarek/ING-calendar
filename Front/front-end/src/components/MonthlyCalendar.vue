<template>
  <div class="MonthlyCalendar">
    <div class="monthButtons">
      <div class="right">
        <button type="button" class="btn" v-on:click="previouse">
          Previous
        </button>
      </div>
      <div class="middle">
        <h4>{{ this.Month }} {{ calendarYear }}</h4>
      </div>

      <div class="left">
        <button type="button" class="btn" v-on:click="next">
          Next
        </button>
      </div>
    </div>

    <table>
      <tr>
        <th id="Sun">Sun</th>
        <th id="Mon">Mon</th>
        <th id="Tue">Tue</th>
        <th id="Wed">Wed</th>
        <th id="Thu">Thu</th>
        <th id="Fri">Fri</th>
        <th id="Sat">Sat</th>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 1 SUN -->
          <div id="tableTop1-0" class="tableTop">{{ week1d0 }}</div>
          <div id="tableMiddle1-0" class="tableMiddle">

        <div v-if="this.week1d0Meeting == 'undefined'"></div>
        <div v-else if ="this.week1d0Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week1d0Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 

          </div>
          <div id="tableButtom1-0" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 MON -->
          <div id="tableTop1-1" class="tableTop">{{ week1d1 }}</div>
          <div id="tableMiddle1-1" class="tableMiddle"> 


        <div v-if="this.week1d1Meeting == 'undefined'"></div>
        <div v-else if ="this.week1d1Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week1d1Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 

          </div>
          <div id="tableButtom1-1" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 TUE -->
          <div id="tableTop1-2" class="tableTop">{{ week1d2 }}</div>
          <div id="tableMiddle1-2" class="tableMiddle">

        <div v-if="this.week1d2Meeting == 'undefined'"></div>
        <div v-else if ="this.week1d2Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week1d2Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 

          </div>
          <div id="tableButtom1-2" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 WED -->
          <div id="tableTop1-3" class="tableTop">{{ week1d3 }}</div>
          <div id="tableMiddle1-3" class="tableMiddle">
            
   
         <div v-if="this.week1d3Meeting == 'undefined'"></div>
        <div v-else if ="this.week1d3Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week1d3Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 




          </div>
          <div id="tableButtom1-3" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 THU -->
          <div id="tableTop1-4" class="tableTop">{{ week1d4 }}</div>
          <div id="tableMiddle1-4" class="tableMiddle">  

        <div v-if="this.week1d4Meeting == 'undefined'"></div>
        <div v-else if="this.week1d4Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week1d4Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 


</div>
          <div id="tableButtom1-4" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 FRI -->
          <div id="tableTop1-5" class="tableTop">{{ week1d5 }}</div>
          <div id="tableMiddle1-5" class="tableMiddle">            
   
        <div v-if="this.week1d5Meeting == 'undefined'"></div>
        <div v-else if ="this.week1d5Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week1d5Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 

</div>
          <div id="tableButtom1-5" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 SAT -->
          <div id="tableTop1-6" class="tableTop">{{ week1d6 }}</div>
          <div id="tableMiddle1-6" class="tableMiddle">
            

        <div v-if="this.week1d6Meeting == 'undefined'"></div>
        <div v-else if ="this.week1d6Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week1d6Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 


          </div>
          <div id="tableButtom1-6" class="tableButtom"></div>
        </td>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 2 SUN -->
          <div id="tableTop2-0" class="tableTop">{{ week2d0 }}</div>
          <div id="tableMiddle2-0" class="tableMiddle">


        <div v-if="this.week2d0Meeting == 'undefined'"></div>
        <div v-else if ="this.week2d0Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week2d0Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 


          </div>
          <div id="tableButtom2-0" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 MON -->
          <div id="tableTop2-1" class="tableTop">{{ week2d1 }}</div>
          <div id="tableMiddle2-1" class="tableMiddle">



        <div v-if="this.week2d1Meeting == 'undefined'"></div>
        <div v-else if ="this.week2d1Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week2d1Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 


          </div>
          <div id="tableButtom2-1" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 TUES -->
          <div id="tableTop2-2" class="tableTop">{{ week2d2 }}</div>
          <div id="tableMiddle2-2" class="tableMiddle">




        <div v-if="this.week2d2Meeting == 'undefined'"></div>
        <div v-else if ="this.week2d2Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week2d2Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 




          </div>
          <div id="tableButtom2-2" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 WED -->
          <div id="tableTop2-3" class="tableTop">{{ week2d3 }}</div>
          <div id="tableMiddle2-3" class="tableMiddle">



        <div v-if="this.week2d3Meeting == 'undefined'"></div>
        <div v-else if ="this.week2d3Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week2d3Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



            
          </div>
          <div id="tableButtom2-3" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 THU -->
          <div id="tableTop2-4" class="tableTop">{{ week2d4 }}</div>
          <div id="tableMiddle2-4" class="tableMiddle">

        <div v-if="this.week2d4Meeting == 'undefined'"></div>
        <div v-else if ="this.week2d4Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week2d4Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom2-4" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 FRI -->
          <div id="tableTop2-5" class="tableTop">{{ week2d5 }}</div>
          <div id="tableMiddle2-5" class="tableMiddle">


        <div v-if="this.week2d5Meeting == 'undefined'"></div>
        <div v-else if ="this.week2d5Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week2d5Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom2-5" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 SAT -->
          <div id="tableTop2-6" class="tableTop">{{ week2d6 }}</div>
          <div id="tableMiddle2-6" class="tableMiddle">


        <div v-if="this.week2d6Meeting == 'undefined'"></div>
        <div v-else if ="this.week2d6Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week2d6Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 


            
          </div>
          <div id="tableButtom2-6" class="tableButtom"></div>
        </td>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 3 SUN -->
          <div id="tableTop3-0" class="tableTop">{{ week3d0 }}</div>
          <div id="tableMiddle3-0" class="tableMiddle">



        <div v-if="this.week3d0Meeting == 'undefined'"></div>
        <div v-else if ="this.week3d0Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week3d0Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 


          </div>
          <div id="tableButtom3-0" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 MON -->
          <div id="tableTop3-1" class="tableTop">{{ week3d1 }}</div>
          <div id="tableMiddle3-1" class="tableMiddle">
            
        <div v-if="this.week3d1Meeting == 'undefined'"></div>
        <div v-else if ="this.week3d1Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week3d1Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 




          </div>
          <div id="tableButtom3-1" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 TUES -->
          <div id="tableTop3-2" class="tableTop">{{ week3d2 }}</div>
          <div id="tableMiddle3-2" class="tableMiddle">
            
            
        <div v-if="this.week3d2Meeting == 'undefined'"></div>
        <div v-else if ="this.week3d2Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week3d2Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom3-2" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 WED -->
          <div id="tableTop3-3" class="tableTop">{{ week3d3 }}</div>
          <div id="tableMiddle3-3" class="tableMiddle">
            
            
            
        <div v-if="this.week3d3Meeting == 'undefined'"></div>
        <div v-else if ="this.week3d3Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week3d3Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 


          </div>
          <div id="tableButtom3-3" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 THU -->
          <div id="tableTop3-4" class="tableTop">{{ week3d4 }}</div>
          <div id="tableMiddle3-4" class="tableMiddle">

            
        <div v-if="this.week3d4Meeting == 'undefined'"></div>
        <div v-else if ="this.week3d4Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week3d4Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 

          </div>
          <div id="tableButtom3-4" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 FRI -->
          <div id="tableTop3-5" class="tableTop">{{ week3d5 }}</div>
          <div id="tableMiddle3-5" class="tableMiddle">

            
        <div v-if="this.week3d5Meeting == 'undefined'"></div>
        <div v-else if ="this.week3d5Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week3d5Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom3-5" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 SAT -->
          <div id="tableTop3-6" class="tableTop">{{ week3d6 }}</div>
          <div id="tableMiddle3-6" class="tableMiddle">
            
            
        <div v-if="this.week3d6Meeting == 'undefined'"></div>
        <div v-else if ="this.week3d6Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week3d6Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom3-6" class="tableButtom"></div>
        </td>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 4 SUN -->
          <div id="tableTop4-0" class="tableTop">{{ week4d0 }}</div>
          <div id="tableMiddle4-0" class="tableMiddle">


            
        <div v-if="this.week4d0Meeting == 'undefined'"></div>
        <div v-else if ="this.week4d0Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week4d0Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 




          </div>
          <div id="tableButtom4-0" class="tableButtom"></div>
        </td>
        <td id="4Mon">
          <!-- week 4 MON -->
          <div id="tableTop4-1" class="tableTop">{{ week4d1 }}</div>
          <div id="tableMiddle4-1" class="tableMiddle">

            
        <div v-if="this.week4d1Meeting == 'undefined'"></div>
        <div v-else if ="this.week4d1Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week4d1Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom4-1" class="tableButtom"></div>
        </td>
        <td id="4Tue">
          <!-- week 4 TUE -->
          <div id="tableTop4-2" class="tableTop">{{ week4d2 }}</div>
          <div id="tableMiddle4-2" class="tableMiddle">

            
        <div v-if="this.week4d2Meeting == 'undefined'"></div>
        <div v-else if ="this.week4d2Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week4d2Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom4-2" class="tableButtom"></div>
        </td>
        <td id="4Wed">
          <!-- week 4 WED -->
          <div id="tableTop4-3" class="tableTop">{{ week4d3 }}</div>
          <div id="tableMiddle4-3" class="tableMiddle">

            
        <div v-if="this.week4d3Meeting == 'undefined'"></div>
        <div v-else if ="this.week4d3Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week4d3Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom4-3" class="tableButtom"></div>
        </td>
        <td id="4Thu">
          <!-- week 4 THU -->
          <div id="tableTop4-4" class="tableTop">{{ week4d4 }}</div>
          <div id="tableMiddle4-4" class="tableMiddle">


            
        <div v-if="this.week4d4Meeting == 'undefined'"></div>
        <div v-else if ="this.week4d4Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week4d4Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom4-4" class="tableButtom"></div>
        </td>
        <td id="Fri">
          <!-- week 4 FRI -->
          <div id="tableTop4-5" class="tableTop">{{ week4d5 }}</div>
          <div id="tableMiddle4-5" class="tableMiddle">


            
        <div v-if="this.week4d5Meeting == 'undefined'"></div>
        <div v-else if ="this.week4d5Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week4d5Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom4-5" class="tableButtom"></div>
        </td>
        <td id="4Sat">
          <!-- week 4 SAT -->
          <div id="tableTop4-6" class="tableTop">{{ week4d6 }}</div>
          <div id="tableMiddle4-6" class="tableMiddle">


            
        <div v-if="this.week4d6Meeting == 'undefined'"></div>
        <div v-else if ="this.week4d6Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week4d6Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 




          </div>
          <div id="tableButtom4-6" class="tableButtom"></div>
        </td>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 5 SUN -->
          <div id="tableTop5-0" class="tableTop">{{ week5d0 }}</div>
          <div id="tableMiddle5-0" class="tableMiddle">


            
        <div v-if="this.week5d0Meeting == 'undefined'"></div>
        <div v-else if ="this.week5d0Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week5d0Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom5-0" class="tableButtom"></div>
        </td>
        <td id="5Mon">
          <!-- week 5 Mon -->
          <div id="tableTop5-1" class="tableTop">{{ week5d1 }}</div>
          <div id="tableMiddle5-1" class="tableMiddle">

           
        <div v-if="this.week5d1Meeting == 'undefined'"></div>
        <div v-else if ="this.week5d1Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week5d1Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom5-1" class="tableButtom"></div>
        </td>
        <td id="5Tue">
          <!-- week 5 TUE -->
          <div id="tableTop5-2" class="tableTop">{{ week5d2 }}</div>
          <div id="tableMiddle5-2" class="tableMiddle">

           
        <div v-if="this.week5d2Meeting == 'undefined'"></div>
        <div v-else if ="this.week5d2Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week5d2Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 




          </div>
          <div id="tableButtom5-2" class="tableButtom"></div>
        </td>
        <td id="5Wed">
          <!-- week 5 WED -->
          <div id="tableTop5-3" class="tableTop">{{ week5d3 }}</div>
          <div id="tableMiddle5-3" class="tableMiddle">

          
        <div v-if="this.week5d3Meeting == 'undefined'"></div>
        <div v-else if ="this.week5d3Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week5d3Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 


            
          </div>
          <div id="tableButtom5-3" class="tableButtom"></div>
        </td>
        <td id="5Thu">
          <!-- week 5 THU -->
          <div id="tableTop5-4" class="tableTop">{{ week5d4 }}</div>
          <div id="tableMiddle5-4" class="tableMiddle">


          
        <div v-if="this.week5d4Meeting == 'undefined'"></div>
        <div v-else if ="this.week5d4Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week5d4Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom5-4" class="tableButtom"></div>
        </td>
        <td id="5Fri">
          <!-- week 5 FRI -->
          <div id="tableTop5-5" class="tableTop">{{ week5d5 }}</div>
          <div id="tableMiddle5-5" class="tableMiddle">

         
        <div v-if="this.week5d5Meeting == 'undefined'"></div>
        <div v-else if ="this.week5d5Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week5d5Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom5-5" class="tableButtom"></div>
        </td>
        <td id="5Sat">
          <!-- week 5 SAT -->
          <div id="tableTop5-6" class="tableTop">{{ week5d6 }}</div>
          <div id="tableMiddle5-6" class="tableMiddle">

         
        <div v-if="this.week5d6Meeting == 'undefined'"></div>
        <div v-else if ="this.week5d6Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week5d6Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



          </div>
          <div id="tableButtom5-6" class="tableButtom"></div>
        </td>
      </tr>
      <td id="Sunday">
        <!-- week 6 SUN -->
        <div id="tableTop6-0" class="tableTop">{{ week6d0 }}</div>
        <div id="tableMiddle6-0" class="tableMiddle">

        <div v-if="this.week6d0Meeting == 'undefined'"></div>
        <div v-else if ="this.week6d0Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week6d0Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



        </div>
        <div id="tableButtom6-0" class="tableButtom"></div>
      </td>
      <td id="5Mon">
        <!-- week 6 Mon -->
        <div id="tableTop6-1" class="tableTop">{{ week6d1 }}</div>
        <div id="tableMiddle6-1" class="tableMiddle">

        <div v-if="this.week6d1Meeting == 'undefined'"></div>
        <div v-else if ="this.week6d1Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week6d1Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 


        </div>
        <div id="tableButtom6-1" class="tableButtom"></div>
      </td>
      <td id="5Tue">
        <!-- week 6 TUE -->
        <div id="tableTop6-2" class="tableTop">{{ week6d2 }}</div>
        <div id="tableMiddle6-2" class="tableMiddle">


        <div v-if="this.week6d2Meeting == 'undefined'"></div>
        <div v-else if ="this.week6d2Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week6d2Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



        </div>
        <div id="tableButtom6-2" class="tableButtom"></div>
      </td>
      <td id="5Wed">
        <!-- week 6 WED -->
        <div id="tableTop6-3" class="tableTop">{{ week6d3 }}</div>
        <div id="tableMiddle6-3" class="tableMiddle">




        <div v-if="this.week6d3Meeting == 'undefined'"></div>
        <div v-else if ="this.week6d3Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week6d3Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



        </div>
        <div id="tableButtom6-3" class="tableButtom"></div>
      </td>
      <td id="5Thu">
        <!-- week 6 THU -->
        <div id="tableTop6-4" class="tableTop">{{ week6d4 }}</div>
        <div id="tableMiddle6-4" class="tableMiddle">



        <div v-if="this.week6d4Meeting == 'undefined'"></div>
        <div v-else if ="this.week6d4Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week6d4Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 




        </div>
        <div id="tableButtom6-4" class="tableButtom"></div>
      </td>
      <td id="5Fri">
        <!-- week 6 FRI -->
        <div id="tableTop6-5" class="tableTop">{{ week6d5 }}</div>
        <div id="tableMiddle6-5" class="tableMiddle">




        <div v-if="this.week6d5Meeting == 'undefined'"></div>
        <div v-else if ="this.week6d5Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week6d5Meeting" :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



        </div>
        <div id="tableButtom6-5" class="tableButtom"></div>
      </td>
      <td id="5Sat">
        <!-- week 6 SAT -->
        <div id="tableTop6-6" class="tableTop">{{ week6d6 }}</div>
        <div id="tableMiddle6-6" class="tableMiddle">




        <div v-if="this.week6d6Meeting == 'undefined'"></div>
        <div v-else if ="this.week6d6Meeting.length == '0'"></div>
        <div else>
        <ul>
          <li v-for="meetings in week6d6Meeting"  :key=meetings >
            {{ meetings }}
          </li>
        </ul>
      </div> 



        </div>
        <div id="tableButtom6-6" class="tableButtom"></div>
      </td>
    </table>
  </div>
</template>

<script>
let CurrentDate = new Date();
let arrayMeeting = [];
export default {
    async mounted() {
    await this.$nextTick();
    this.thisMonths();

    

    },
  mounted: function () {
    this.loadingFunction();
    this.monthLayout();
    this.meetingtocal();
  },

  data: () => {
    return {
      meet: this.meeting,
      meetingName: this.meeting,

      meeting: this.meeting,
      Month: this.Month,
      calendarYear: this.calendarYear,
      arrayMeeting: this.arrayMeeting,
      week1d0Meeting: this.week1d0Meeting,
      week1d1Meeting: this.week1d1Meeting,
      week1d2Meeting: this.week1d2Meeting,
      week1d3Meeting: this.week1d3Meeting,
      week1d4Meeting: this.week1d4Meeting,
      week1d5Meeting: this.week1d5Meeting,
      week1d6Meeting: this.week1d6Meeting,
      week1d0Meeting: this.week2d0Meeting,
      week1d1Meeting: this.week2d1Meeting,
      week1d2Meeting: this.week2d2Meeting,
      week1d3Meeting: this.week2d3Meeting,
      week1d4Meeting: this.week2d4Meeting,
      week1d5Meeting: this.week2d5Meeting,
      week1d6Meeting: this.week2d6Meeting,
      week3d0Meeting: this.week3d0Meeting,
      week3d1Meeting: this.week3d1Meeting,
      week3d2Meeting: this.week3d2Meeting,
      week3d3Meeting: this.week3d3Meeting,
      week3d4Meeting: this.week3d4Meeting,
      week3d5Meeting: this.week3d5Meeting,
      week3d6Meeting: this.week3d6Meeting,
      week3d0Meeting: this.week4d0Meeting,
      week3d1Meeting: this.week4d1Meeting,
      week3d2Meeting: this.week4d2Meeting,
      week3d3Meeting: this.week4d3Meeting,
      week3d4Meeting: this.week4d4Meeting,
      week3d5Meeting: this.week4d5Meeting,
      week3d6Meeting: this.week4d6Meeting,
      week3d0Meeting: this.week5d0Meeting,
      week3d1Meeting: this.week5d1Meeting,
      week3d2Meeting: this.week5d2Meeting,
      week3d3Meeting: this.week5d3Meeting,
      week3d4Meeting: this.week5d4Meeting,
      week3d5Meeting: this.week5d5Meeting,
      week3d6Meeting: this.week5d6Meeting,
      week3d0Meeting: this.week6d0Meeting,
      week3d1Meeting: this.week6d1Meeting,
      week3d2Meeting: this.week6d2Meeting,
      week3d3Meeting: this.week6d3Meeting,
      week3d4Meeting: this.week6d4Meeting,
      week3d5Meeting: this.week6d5Meeting,
      week3d6Meeting: this.week6d6Meeting,
      week1d0: this.week1d0,
      week1d1: this.week1d1,
      week1d2: this.week1d2,
      week1d3: this.week1d3,
      week1d4: this.week1d4,
      week1d5: this.week1d5,
      week1d6: this.week1d6,
      week2d0: this.week2d0,
      week2d1: this.week2d1,
      week2d2: this.week2d2,
      week2d3: this.week2d3,
      week2d3: this.week2d4,
      week2d3: this.week2d5,
      week2d3: this.week2d6,
      week2d3: this.week3d0,
      week2d3: this.week3d1,
      week2d3: this.week3d2,
      week2d3: this.week3d3,
      week2d3: this.week3d4,
      week2d3: this.week3d5,
      week2d3: this.week3d6,
      week2d3: this.week4d0,
      week2d3: this.week4d1,
      week2d3: this.week4d2,
      week2d3: this.week4d3,
      week2d3: this.week4d4,
      week2d3: this.week4d5,
      week2d3: this.week4d6,
      week2d3: this.week5d0,
      week2d3: this.week5d1,
      week2d3: this.week5d2,
      week2d3: this.week5d3,
      week2d3: this.week5d4,
      week2d3: this.week5d5,
      week2d3: this.week5d6,
      week2d3: this.week6d0,
      week2d3: this.week6d1,
      week2d3: this.week6d2,
      week2d3: this.week6d3,
      week2d3: this.week6d4,
      week2d3: this.week6d5,
      week2d3: this.week6d6,
    };
  },
  methods: {
// today's meeting
   async thisMonths() {
      await axios
    
        .get("https://floating-peak-36344.herokuapp.com/monthMeetings")
        .then((response) => (this.meet = response.data))
        .catch((err) => (this.meet = "error no databes connection "));
      // console.log(this.meet.length);
     // console.log(this.meet[0].meeting);
       arrayMeeting = [];
    for(let i = 0; i <this.meet.length; i++) {
     arrayMeeting.push(this.meet[i].date.slice(8, 10));
     arrayMeeting.push(this.meet[i].meeting);
    // 
    this.meetingtocal();
    }
//console.log(arrayMeeting)
return arrayMeeting;
   },

meetingtocal(){
//      week3d4Meeting: this.week3d4Meeting,
arrayMeeting
  
      let tempDate = CurrentDate;
      const actualMonth = CurrentDate.getMonth();
      tempDate.setDate(1);
      let firstMonthDay = tempDate.getDate();
      let weekDay = tempDate.getDay();
      
      for (let w = 1; w <= 6; w++) {
        for (let d = weekDay; d <= 6; d++) {
          this["week" + w + "d" + d+ "Meeting"] = [];
          if (actualMonth == tempDate.getMonth()) {
              // to wypluwa aray tyle razy ile jest dni w miesiącu
              for(let x=0; x<arrayMeeting.length;x++){
                if(tempDate.getDate() == arrayMeeting[x] &&  tempDate.getDate() == this["week" + w + "d" + d])
                {            
                  
                            this["week" + w + "d" + d+ "Meeting"].push(arrayMeeting[x+1])
                            //console.log(tempDate.getDate())
                           // console.log( "week" + w + "d" + d+ "Meeting " + this["week" + w + "d" + d+ "Meeting"])
                           // console.log(this["week" + w + "d" + d+ "Meeting"])
                }
                
              }


            //this["week" + w + "d" + d + 'Meeting'] = tempDate.getDate();
            tempDate.setDate(tempDate.getDate() + 1);
          } else {
            console.log("not working")
            //console.log(arrayMeeting  )
            break;
          }
        }
     
        weekDay = 0;
      }
      tempDate.setMonth(tempDate.getMonth() - 1);
      tempDate.setDate(1);
    

},



    previouse() {
      CurrentDate.setMonth(CurrentDate.getMonth() - 1);
      this.calendarYear = CurrentDate.getFullYear();

      this.Month = CurrentDate.toLocaleString("en", {
        month: "long",
      });
      this.monthLayout();

      return this.Month;
    },
    next() {
      CurrentDate.setMonth(CurrentDate.getMonth() + 1);
      this.calendarYear = CurrentDate.getFullYear();
      this.tempMonth = CurrentDate.getMonth();
      this.Month = CurrentDate.toLocaleString("en", {
        month: "long",
      });
      this.monthLayout();
      //console.log(CurrentDate);
      return this.Month;
    },
    /// on LOAD!!!!
    loadingFunction() {
      this.calendarYear = CurrentDate.getFullYear();

      CurrentDate.setMonth(CurrentDate.getMonth());
      this.Month = CurrentDate.toLocaleString("en", {
        month: "long",
      });

      return this.Month;
    },

    Monthclear() {
      for (let w = 1; w <= 6; w++) {
        for (let d = 0; d <= 6; d++) {
          this["week" + w + "d" + d] = "";
          this["week" + w + "d" + d+ "Meeting"] = "";
        }
      }
    },

    monthLayout() {
      this.Monthclear();
      this.thisMonths();
      let tempDate = CurrentDate;
      const actualMonth = CurrentDate.getMonth();
      tempDate.setDate(1);
      let firstMonthDay = tempDate.getDate();
      let weekDay = tempDate.getDay();
      for (let w = 1; w <= 6; w++) {
        for (let d = weekDay; d <= 6; d++) {
          if (actualMonth == tempDate.getMonth()) {
            this["week" + w + "d" + d] = tempDate.getDate();
            tempDate.setDate(tempDate.getDate() + 1);
          } else {
            break;
          }
        }
        weekDay = 0;
      }
      tempDate.setMonth(tempDate.getMonth() - 1);
      tempDate.setDate(1);
    },
  },
  computed: {},
  props: {},
};
</script>
<style>
.right {
  float: left;
  width: 100px;
  height: 5px;
  margin: 0;
  padding-top: 0px;

}

.left {
  width: 100px;
  height: 5px;
  margin: 0;
  padding-top: 0px;
  margin-left: 330px;
 

}
.middle {
  float: left;
  padding-left: 40px;
  height: 45px;
  
  
}
.monthButtons {
  width: 400px;
  height: 45px;
  padding: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;

}

ul {
  list-style-type: none; /* Remove bullets */

}

.btn:hover{
  background: rgb(194, 75, 1);
  color:white;

}

.btn{
  background: rgba(255, 98, 0);
  color:white;

}

</style>
