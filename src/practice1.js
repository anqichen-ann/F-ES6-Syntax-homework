const parseData = function(input){
    let {data, column} = input;
    let keys = [];
    column.map( item => {
        keys.push(item.name)
    })
    let output = [];
    data.map( item => {
        let tmp = {};
        item.map( (value,index) => {
            tmp[keys[index]] = value
        } )
        output.push(tmp)
    })
    return output;

}
export { parseData };
