<template>
  <div class="MonthlyCalendar">
    <div class="monthButtons">
      <div class="right">
        <button type="button" class="btn btn-dark" v-on:click="previouse">
          Previous
        </button>
      </div>
      <div class="middle">
        <h4>{{ this.Month }} {{ calendarYear }}</h4>
      </div>

      <div class="left">
        <button type="button" class="btn btn-dark" v-on:click="next">
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
          <div id="tableMiddle1-0" class="tableMiddle"></div>
          <div id="tableButtom1-0" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 MON -->
          <div id="tableTop1-1" class="tableTop">{{ week1d1 }}</div>
          <div id="tableMiddle1-1" class="tableMiddle"></div>
          <div id="tableButtom1-1" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 TUE -->
          <div id="tableTop1-2" class="tableTop">{{ week1d2 }}</div>
          <div id="tableMiddle1-2" class="tableMiddle"></div>
          <div id="tableButtom1-2" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 WED -->
          <div id="tableTop1-3" class="tableTop">{{ week1d3 }}</div>
          <div id="tableMiddle1-3" class="tableMiddle"></div>
          <div id="tableButtom1-3" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 THU -->
          <div id="tableTop1-4" class="tableTop">{{ week1d4 }}</div>
          <div id="tableMiddle1-4" class="tableMiddle"></div>
          <div id="tableButtom1-4" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 FRI -->
          <div id="tableTop1-5" class="tableTop">{{ week1d5 }}</div>
          <div id="tableMiddle1-5" class="tableMiddle"></div>
          <div id="tableButtom1-5" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 1 SAT -->
          <div id="tableTop1-6" class="tableTop">{{ week1d6 }}</div>
          <div id="tableMiddle1-6" class="tableMiddle"></div>
          <div id="tableButtom1-6" class="tableButtom"></div>
        </td>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 2 SUN -->
          <div id="tableTop2-0" class="tableTop">{{ week2d0 }}</div>
          <div id="tableMiddle2-0" class="tableMiddle"></div>
          <div id="tableButtom2-0" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 MON -->
          <div id="tableTop2-1" class="tableTop">{{ week2d1 }}</div>
          <div id="tableMiddle2-1" class="tableMiddle"></div>
          <div id="tableButtom2-1" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 TUES -->
          <div id="tableTop2-2" class="tableTop">{{ week2d2 }}</div>
          <div id="tableMiddle2-2" class="tableMiddle"></div>
          <div id="tableButtom2-2" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 WED -->
          <div id="tableTop2-3" class="tableTop">{{ week2d3 }}</div>
          <div id="tableMiddle2-3" class="tableMiddle"></div>
          <div id="tableButtom2-3" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 THU -->
          <div id="tableTop2-4" class="tableTop">{{ week2d4 }}</div>
          <div id="tableMiddle2-4" class="tableMiddle"></div>
          <div id="tableButtom2-4" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 FRI -->
          <div id="tableTop2-5" class="tableTop">{{ week2d5 }}</div>
          <div id="tableMiddle2-5" class="tableMiddle"></div>
          <div id="tableButtom2-5" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 2 SAT -->
          <div id="tableTop2-6" class="tableTop">{{ week2d6 }}</div>
          <div id="tableMiddle2-6" class="tableMiddle"></div>
          <div id="tableButtom2-6" class="tableButtom"></div>
        </td>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 3 SUN -->
          <div id="tableTop3-0" class="tableTop">{{ week3d0 }}</div>
          <div id="tableMiddle3-0" class="tableMiddle"></div>
          <div id="tableButtom3-0" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 MON -->
          <div id="tableTop3-1" class="tableTop">{{ week3d1 }}</div>
          <div id="tableMiddle3-1" class="tableMiddle"></div>
          <div id="tableButtom3-1" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 TUES -->
          <div id="tableTop3-2" class="tableTop">{{ week3d2 }}</div>
          <div id="tableMiddle3-2" class="tableMiddle"></div>
          <div id="tableButtom3-2" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 WED -->
          <div id="tableTop3-3" class="tableTop">{{ week3d3 }}</div>
          <div id="tableMiddle3-3" class="tableMiddle"></div>
          <div id="tableButtom3-3" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 THU -->
          <div id="tableTop3-4" class="tableTop">{{ week3d4 }}</div>
          <div id="tableMiddle3-4" class="tableMiddle"></div>
          <div id="tableButtom3-4" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 FRI -->
          <div id="tableTop3-5" class="tableTop">{{ week3d5 }}</div>
          <div id="tableMiddle3-5" class="tableMiddle"></div>
          <div id="tableButtom3-5" class="tableButtom"></div>
        </td>
        <td>
          <!-- week 3 SAT -->
          <div id="tableTop3-6" class="tableTop">{{ week3d6 }}</div>
          <div id="tableMiddle3-6" class="tableMiddle"></div>
          <div id="tableButtom3-6" class="tableButtom"></div>
        </td>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 4 SUN -->
          <div id="tableTop4-0" class="tableTop">{{ week4d0 }}</div>
          <div id="tableMiddle4-0" class="tableMiddle"></div>
          <div id="tableButtom4-0" class="tableButtom"></div>
        </td>
        <td id="4Mon">
          <!-- week 4 MON -->
          <div id="tableTop4-1" class="tableTop">{{ week4d1 }}</div>
          <div id="tableMiddle4-1" class="tableMiddle"></div>
          <div id="tableButtom4-1" class="tableButtom"></div>
        </td>
        <td id="4Tue">
          <!-- week 4 TUE -->
          <div id="tableTop4-2" class="tableTop">{{ week4d2 }}</div>
          <div id="tableMiddle4-2" class="tableMiddle"></div>
          <div id="tableButtom4-2" class="tableButtom"></div>
        </td>
        <td id="4Wed">
          <!-- week 4 WED -->
          <div id="tableTop4-3" class="tableTop">{{ week4d3 }}</div>
          <div id="tableMiddle4-3" class="tableMiddle"></div>
          <div id="tableButtom4-3" class="tableButtom"></div>
        </td>
        <td id="4Thu">
          <!-- week 4 THU -->
          <div id="tableTop4-4" class="tableTop">{{ week4d4 }}</div>
          <div id="tableMiddle4-4" class="tableMiddle"></div>
          <div id="tableButtom4-4" class="tableButtom"></div>
        </td>
        <td id="Fri">
          <!-- week 4 FRI -->
          <div id="tableTop4-5" class="tableTop">{{ week4d5 }}</div>
          <div id="tableMiddle4-5" class="tableMiddle"></div>
          <div id="tableButtom4-5" class="tableButtom"></div>
        </td>
        <td id="4Sat">
          <!-- week 4 SAT -->
          <div id="tableTop4-6" class="tableTop">{{ week4d6 }}</div>
          <div id="tableMiddle4-6" class="tableMiddle"></div>
          <div id="tableButtom4-6" class="tableButtom"></div>
        </td>
      </tr>
      <tr>
        <td id="Sunday">
          <!-- week 5 SUN -->
          <div id="tableTop5-0" class="tableTop">{{ week5d0 }}</div>
          <div id="tableMiddle5-0" class="tableMiddle"></div>
          <div id="tableButtom5-0" class="tableButtom"></div>
        </td>
        <td id="5Mon">
          <!-- week 5 Mon -->
          <div id="tableTop5-1" class="tableTop">{{ week5d1 }}</div>
          <div id="tableMiddle5-1" class="tableMiddle"></div>
          <div id="tableButtom5-1" class="tableButtom"></div>
        </td>
        <td id="5Tue">
          <!-- week 5 TUE -->
          <div id="tableTop5-2" class="tableTop">{{ week5d2 }}</div>
          <div id="tableMiddle5-2" class="tableMiddle"></div>
          <div id="tableButtom5-2" class="tableButtom"></div>
        </td>
        <td id="5Wed">
          <!-- week 5 WED -->
          <div id="tableTop5-3" class="tableTop">{{ week5d3 }}</div>
          <div id="tableMiddle5-3" class="tableMiddle"></div>
          <div id="tableButtom5-3" class="tableButtom"></div>
        </td>
        <td id="5Thu">
          <!-- week 5 THU -->
          <div id="tableTop5-4" class="tableTop">{{ week5d4 }}</div>
          <div id="tableMiddle5-4" class="tableMiddle"></div>
          <div id="tableButtom5-4" class="tableButtom"></div>
        </td>
        <td id="5Fri">
          <!-- week 5 FRI -->
          <div id="tableTop5-5" class="tableTop">{{ week5d5 }}</div>
          <div id="tableMiddle5-5" class="tableMiddle"></div>
          <div id="tableButtom5-5" class="tableButtom"></div>
        </td>
        <td id="5Sat">
          <!-- week 5 SAT -->
          <div id="tableTop5-6" class="tableTop">{{ week5d6 }}</div>
          <div id="tableMiddle5-6" class="tableMiddle"></div>
          <div id="tableButtom5-6" class="tableButtom"></div>
        </td>
      </tr>
      <td id="Sunday">
        <!-- week 6 SUN -->
        <div id="tableTop6-0" class="tableTop">{{ week6d0 }}</div>
        <div id="tableMiddle6-0" class="tableMiddle"></div>
        <div id="tableButtom6-0" class="tableButtom"></div>
      </td>
      <td id="5Mon">
        <!-- week 6 Mon -->
        <div id="tableTop6-1" class="tableTop">{{ week6d1 }}</div>
        <div id="tableMiddle6-1" class="tableMiddle"></div>
        <div id="tableButtom6-1" class="tableButtom"></div>
      </td>
      <td id="5Tue">
        <!-- week 6 TUE -->
        <div id="tableTop6-2" class="tableTop">{{ week6d2 }}</div>
        <div id="tableMiddle6-2" class="tableMiddle"></div>
        <div id="tableButtom6-2" class="tableButtom"></div>
      </td>
      <td id="5Wed">
        <!-- week 6 WED -->
        <div id="tableTop6-3" class="tableTop">{{ week6d3 }}</div>
        <div id="tableMiddle6-3" class="tableMiddle"></div>
        <div id="tableButtom6-3" class="tableButtom"></div>
      </td>
      <td id="5Thu">
        <!-- week 6 THU -->
        <div id="tableTop6-4" class="tableTop">{{ week6d4 }}</div>
        <div id="tableMiddle6-4" class="tableMiddle"></div>
        <div id="tableButtom6-4" class="tableButtom"></div>
      </td>
      <td id="5Fri">
        <!-- week 6 FRI -->
        <div id="tableTop6-5" class="tableTop">{{ week6d5 }}</div>
        <div id="tableMiddle6-5" class="tableMiddle"></div>
        <div id="tableButtom6-5" class="tableButtom"></div>
      </td>
      <td id="5Sat">
        <!-- week 6 SAT -->
        <div id="tableTop6-6" class="tableTop">{{ week6d6 }}</div>
        <div id="tableMiddle6-6" class="tableMiddle"></div>
        <div id="tableButtom6-6" class="tableButtom"></div>
      </td>
    </table>
  </div>
</template>

<script>
let CurrentDate = new Date();
export default {
  mounted: function () {
    this.loadingFunction();
    this.monthLayout();
  },

  data: () => {
    return {
      meeting: this.meeting,
      Month: this.Month,
      calendarYear: this.calendarYear,
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

      this.Month = CurrentDate.toLocaleString("en", {
        month: "long",
      });
      this.monthLayout();

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
    monthLayout() {
      let tempDate = new Date();
      tempDate.setDate(1);
      let firstMonthDay = tempDate.getDate();
      let weekDay = tempDate.getDay();
      for (let w = 1; w <= 6; w++) {
        for (let d = weekDay; d <= 6; d++) {
          console.log("week" + w + "d" + d);

          this["week" + w + "d" + d] = tempDate.getDate();
          tempDate.setDate(tempDate.getDate() + 1);
          //console.log(tempDate.getDate());
        }
        weekDay = 0;
      }
    },
  },
  computed: {},
  props: {},
};
</script>
<style>
.right {
  float: left;
  height: 45px;
}

.left {
  float: left;
  height: 45px;
}
.middle {
  float: left;
  height: 45px;
}
.monthButtons {
  width: 400px;
  height: 45px;
  border: 2px solid red;
}
</style>
