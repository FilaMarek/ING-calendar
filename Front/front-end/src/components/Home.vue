<template>
  <div class="Home">
    <div class="Today">Today</div>
    <div class="todaysMeetings">
      {{meeting}}
      <button type="button" class="btn btn-dark" v-on:click="Today">test</button>
    </div>

    <div class="calendar">
      <app-calendar></app-calendar>
    </div>
  </div>
</template>
<style>
.todaysMeetings {
  width: 500px;
  float: left;
}
</style>

<script>
import MonthlyCalendar from "./MonthlyCalendar.vue";
export default {
  components: {
    appCalendar: MonthlyCalendar,
  },
  data: () => {
    return {
      meeting: this.meeting,
    };
  },
  methods: {
    async Today(event) {
      await axios
        .get("http://localhost:3001/today.json")
        //.then((response) => console.log(response.data[0].cdate));

        //promise

        .then((response) => (this.meeting = response.data[0].meeting))
        .catch((err) => (this.meeting = "No meetings today"));

      //console.log(this.meeting);
      return this.meeting;
    },
  },
};
</script>
