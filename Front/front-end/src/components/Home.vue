<template>
  <div class="Home">
    <div class="Today">Today</div>

    <div class="calendar">
      <app-calendar></app-calendar>
    </div>
  </div>
</template>

<script>
import MonthlyCalendar from "./MonthlyCalendar.vue";
export default {
  components: {
    appCalendar: MonthlyCalendar
  }
};
</script>
