const chaos = (function () {
  return {
    // Initialize chaos by finding the canvas on the page
    // and resizing it to the full size of the browser
    init() {
      this.canvas = document.getElementById("canvas");
      this.context = this.canvas.getContext("2d");
      this.setSize(window.innerWidth, window.innerHeight);
    },

    setSize(width, height) {
      this.width = this.canvas.width = width;
      this.height = this.canvas.height = height;
    },

    // Clears the canvas by filling it with the color specified,
    // or erasing all pixels of no color is specified
    clear(color) {
      if (color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
      } else {
        this.context.fillRect(0, 0, this.width, this.height);
      }
    },

    // Pops up a bitmap image representation of the canvas in a new window
    popImage() {
      const win = window.open("", "Canvas Image");
      const src = this.canvas.dataToURL("image/png");

      win.document.write(
        `<img src=${src} width=${this.width} height=${this.height} />`
      );
    },
  };
})();
