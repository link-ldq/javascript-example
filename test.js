function Person() {
    console.log(new.target);
}
new Person()
Person()