const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      x: 0,
      y: 0,
      z: 0,
    };
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.x = 0;
      this.y = 0;
      this.z = 0;
    },
    copy() {
      const el = document.createElement('textarea');

      // Hiding textarea
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';

      el.value = `transform: ${this.box.transform}`;

      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
  },
  computed: {
    box() {
      return {
        transition: 'transform 2s',
        transform: `perspective(${this.perspective}px) rotateX(${this.x}deg) rotateY(${this.y}deg) rotateZ(${this.z}deg)`,
      };
    },
  },
});

vm.mount('#app');
