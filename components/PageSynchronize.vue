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
    },
    setLocalTime() {
      let date = new Date()
      this.timeLocal =
        (date.getHours() < 10 ? "0" : "") +
        date.getHours() +
        ":" +
        (date.getMinutes() < 10 ? "0" : "") +
        date.getMinutes()
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
