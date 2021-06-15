const vm = Vue.createApp({
  data() {
    return {
      perspective: 0,
      x: 0,
      y: 0,
      z: 0,
    };
  },
  methods: {
    setPerspective(e) {
      this.perspective = parseInt(e.target.value);
      console.log(this.perspective);
    },
    setX(e) {
      this.x = parseInt(e.target.value);
      console.log(this.x);
    },
    setY(e) {
      this.y = parseInt(e.target.value);
      console.log(this.y);
    },
    setZ(e) {
      this.z = parseInt(e.target.value);
      console.log(this.z);
    },
    reset(e) {
      this.perspective = 0;
      this.x = 0;
      this.y = 0;
      this.z = 0;
    },
  },
  computed: {
    box_styles() {
      return [
        {
          transition: 'transform 2s',
        },
        {
          transform: `perspective(${this.perspective}px) rotateX(${this.x}deg) rotateY(${this.y}deg) rotateZ(${this.z}deg)`,
        },
      ];
    },
    copy() {
      const copied = [this.perspective, this.x, this.y, this.z];

      return copied;
    },
  },
});

vm.mount('#app');
