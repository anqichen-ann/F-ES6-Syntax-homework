const parseData = function(input){
    let {data, column} = input;
    const keys = column.map( item => item.name )
    
    let output = data.map( item => {
        return item.reduce( (pre,cur,index) => {
            pre[keys[index]] = cur
            return pre
        },{} )
    })
    return output;

}
export { parseData };
