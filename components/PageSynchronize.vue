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
  props: {
    blok: Object
  },
  data() {
    return {
      timeAMS: "",
      timeLocal: ""
    }
  },
  mounted() {
    this.setAmsterdamTime()
    this.setLocalTime()
  },
  methods: {
    setAmsterdamTime() {
      let date = new Date()
      let offset = date.getTime() + date.getTimezoneOffset() * 60000
      let amsTime = new Date(offset + 3600000 * 1)
      this.timeAMS =
        (amsTime.getHours() < 10 ? "0" : "") +
        amsTime.getHours() +
        ":" +
        (amsTime.getMinutes() < 10 ? "0" : "") +
        amsTime.getMinutes()
      // Check date object options: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Using_options
      // console.log(date)
      // console.log(offset)
      // console.log(amsTime)
      // console.log(this.timeAMS)
    },
    setLocalTime() {
      let date = new Date()
      let offset = date.getTimezoneOffset() * 60000
      let userTime = new Date(date + 3600000 * offset)
      this.timeLocal =
        (userTime.getHours() < 10 ? "0" : "") +
        userTime.getHours() +
        ":" +
        (userTime.getMinutes() < 10 ? "0" : "") +
        userTime.getMinutes()
      // console.log(date)
      // console.log(offset)
      // console.log(userTime)
      // console.log(this.timeLocal)
    }
  },
  head() {
    return {
      title: this.blok.metadata.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.blok.metadata.description
        }
      ]
    }
  }
}
</script>
