<template>
  <div>
    <p>{{ timeAMS }}</p>
    <p>/CEST (Amsterdam)</p>
    <p>{{ timeNY }}</p>
    <p>/EST (New York)</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeAMS: "",
      timeNY: ""
    }
  },
  mounted() {
    this.setTime(-5)
  },
  methods: {
    setTime() {
      let d = new Date()
      let utc = d.getTime() + d.getTimezoneOffset() * 60000
      var ny = new Date(utc + 3600000 * -5)
      var ams = new Date(utc + 3600000 * 1)
      this.timeAMS =
        ams.getHours() +
        ":" +
        (ams.getMinutes() < 10 ? "0" : "") +
        ams.getMinutes()
      this.timeNY =
        ny.getHours() +
        ":" +
        (ny.getMinutes() < 10 ? "0" : "") +
        ny.getMinutes()
    }
  }
}
</script>
