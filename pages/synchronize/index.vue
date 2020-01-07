<template>
  <div class="content">
    <section class="content-synchronize">
      <ul>
        <li>
          <time>{{ timeAMS }}</time>
          <p>/CEST (Amsterdam)</p>
        </li>
        <li>
          <time>{{ timeNY }}</time>
          <p>/EST (New York)</p>
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
        (ams.getHours() < 10 ? "0" : "") +
        ams.getHours() +
        ":" +
        (ams.getMinutes() < 10 ? "0" : "") +
        ams.getMinutes()
      this.timeNY =
        (ny.getHours() < 10 ? "0" : "") +
        ny.getHours() +
        ":" +
        (ny.getMinutes() < 10 ? "0" : "") +
        ny.getMinutes()
    }
  }
}
</script>
