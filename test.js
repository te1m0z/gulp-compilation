let a = {
    name: 'dima',
    id: function () {
        return {
            n: this.name + '-111'
        }
    }
}

console.log(a.id().n)