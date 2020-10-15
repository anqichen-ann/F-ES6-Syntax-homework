const inject = (items, sections) => {
    let map = new Map();
    let output = [];
    sections.map( item => {
        let {content,index} = item;
        map.set(index,content)
    })
    items.map( (item,index) => {
        if(map.get(index)){
            output.push(map.get(index))
        }
        output.push(item)
    })
    return output;
}
export { inject };
