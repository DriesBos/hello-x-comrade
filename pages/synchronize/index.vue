<template>
  <div class="content">
    <section class="content-Synchronize">
      <ul>
        <li>
          <time>{{ timeAMS }}</time>
          <p>/Amsterdam</p>
        </li>
        <li>
          <time>{{ timeLocal }}</time>
          <p>/Local Time</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeAMS: "",
      timeLocal: ""
    }
  },
  mounted() {
    this.setTime()
  },
  methods: {
    setTime() {
      let today = new Date()
      let amsTimeZone = 2
      var amsTime = new Date(today + 3600000 * amsTimeZone)
      let userTimeZone = today.getTimezoneOffset() * 60000
      var userTime = new Date(today + 3600000 * userTimeZone)
      console.log(today)
      console.log(amsTimeZone)
      console.log(amsTime)
      console.log(userTimeZone)
      console.log(userTime)
      this.timeAMS =
        (amsTime.getHours() < 10 ? "0" : "") +
        amsTime.getHours() +
        ":" +
        (amsTime.getMinutes() < 10 ? "0" : "") +
        amsTime.getMinutes()
      this.timeLocal =
        (userTime.getHours() < 10 ? "0" : "") +
        userTime.getHours() +
        ":" +
        (userTime.getMinutes() < 10 ? "0" : "") +
        userTime.getMinutes()
    }
  }
}
</script>
