"use strict";
class Zhang {
    static add() {
        console.log(this.a);
        return 1 + 10;
    }
    add2() {
        console.log(Zhang.a);
    }
}
Zhang.a = 10;
new Zhang().add2();
