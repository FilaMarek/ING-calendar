<template>
  <div class="Home">
    <div class="Today">Today's Meetings:</div>

    <div class="todaysMeetings">
      <div v-if="this.meet.length == '0'">No meetings today</div>
      <div v-else>
        <ul>
          <li v-for="meeting in meet" :key="meeting.meeting">
            {{ meeting.meeting }}
          </li>
        </ul>
      </div>

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
          <button type="submit"  class ="btn">Submit</button>
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
        .get("https://floating-peak-36344.herokuapp.com/today.json")
        .then((response) => (this.meet = response.data))
        .catch((err) => (this.meet = "error no databes connection "));
     // console.log(this.meet.length);
      return this.meet;
    },
    onSubmit() {
      const todaysMeeting = {
        date: this.date,
        meetingName: this.meetingName,
        ///meetings
      };
        if(!todaysMeeting.meetingName || !todaysMeeting.date)
        {
          alert("Please fill out the name and date of the meeting")
        }
        else{
              axios
                .post(
                  "https://floating-peak-36344.herokuapp.com/meetings",
                  todaysMeeting
                )
                .then((res) => console.log("done"));
        }
          // clear data
          this.meetingName = "";
          alert("Thank you for testing my website it is currently work in progress as I learn more and more. I am aware of many bugs yett to be fixed.");


    },
  },
};
</script>


<style>
.calendar {
  width: 500px;
}
</style>