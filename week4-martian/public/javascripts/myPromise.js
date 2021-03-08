class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.cbFuncsChained = [];

    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  then(callback) {
    //promise의 상태를 구분하여 동작한다 를 생각해보자

    if (this.state === "pending") {
      //resolve하고 전한 첫번째 promise가 this가 된다..
      return new MyPromise((resolve) => {
        this.cbFuncsChained.push(() => resolve(callback(this.value)));
      });
      return this;
      //프라미스 그대로 반환. 그럼 다음 this는 같은 플로우로 두번째 프라미스겠지?
    }

    if (this.state === "resolved")
      return new MyPromise((resolve) => resolve(callback(this.value)));
  }
  resolve(value) {
    //비동기로하려면..resolve 내부에서 callback을 실행?
    // then에서 리턴한 새로운 Promise객체가 반환됐을때의 코드
    if (value instanceof MyPromise) {
      value.then((innerPromiseValue) => {
        this.value = innerPromiseValue;
        this.state = "resolved";
        this.cbFuncsChained.forEach((cb) => cb());
      });
    } else {
      this.value = value;
      this.state = "resolved";
      this.cbFuncsChained.forEach((cb) => cb());
    }
  }

  reject(value) {
    //
    this.value = value;
    this.state = "rejected";
    this.cbFuncsChained.forEach((cb) => cb());
  }
}

let pr = new MyPromise();

const delay = () => {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      console.log("hi");
      resolve("Jenny");
    }, 2000);
  });
};

const test1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Success!" });
  }, 2000);
}).then((result) => console.log(result));
