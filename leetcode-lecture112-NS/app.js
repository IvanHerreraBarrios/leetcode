var minReorder = function(n, connections) {
   
    connections.sort(function(a,b){
    return a[1] - b[1]
})

console.log(connections)
let count = 0
let memo = new Set()
memo.add(0)
for(const path of connections){
    [a,b] = path
    if(!memo.has(b)){
        console.log(a,b)
        count = count + 1
    }
    memo.add(b)
    memo.add(a)
}
return count
};
