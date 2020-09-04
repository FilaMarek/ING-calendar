<template>
  <div class="Home">
    <div class="Today">Today</div>
    <div class="todaysMeetings">
      {{meet}}
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="date">Date</label>
          <input type="date" id="date" v-model="date" />
        </div>
        <div class="input">
          <label for="meetingName">Meeting Name</label>
          <input type="text" id="meetingName" v-model.number="meetingName" />
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
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
  async mounted() {
    await this.$nextTick();
    this.Today();
  },
  components: {
    appCalendar: MonthlyCalendar,
  },
  data: () => {
    return {
      meet: this.meeting,
      date: this.date,
      meetingName: this.meeting,
    };
  },
  methods: {
    async Today() {
      await axios
        .get("http://localhost:3001/today.json")
        //.then((response) => console.log(response.data[0].cdate));

        //promise

        .then((response) => (this.meet = response.data[0].meeting))
        .catch((err) => (this.meet = "No meetings today"));

      console.log(this.meet);
      return this.meet;
    },

    onSubmit() {
      const todaysMeeting = {
        date: this.date,
        meetingName: this.meetingName,
        ///meetings
      };
      axios
        .post("http://localhost:3001/meetings", todaysMeeting)
        .then((res) => console.log(res));
    },
  },
};
</script>
