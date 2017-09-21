export const lengthAwareMixIn = {
  computed: {
    length() {
      return this.secondText + " (" + this.secondText.length + ")";
    }
  }
};
