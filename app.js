const vm = Vue.createApp({
  data() {
    return {
      range: 0,
    };
  },
  methods: {
    setRange(e) {
      e.preventDefault;

      this.range += parseInt(e.target.value);
      console.log(this.range);
    },
  },
  computed: {},
});

vm.mount('#app');
