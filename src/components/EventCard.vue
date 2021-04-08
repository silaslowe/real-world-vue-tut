<template>
  <div class="event-card">
    <span>{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      event: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
