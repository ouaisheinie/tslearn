class Zhang {
  static a = 10
  static add() {
    console.log(this.a)
    return 1 + 10
  }
  add2() {
    console.log(Zhang.a)
  }
}

new Zhang().add2()