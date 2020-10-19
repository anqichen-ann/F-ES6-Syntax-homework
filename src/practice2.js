const inject = (items, sections) => {
    let map = new Map();
    let output = [];
    sections.forEach( item => {
        let {content,index} = item;
        map.set(index,content)
    })
    items.forEach( (item,index) => {
        if(map.get(index)){
            output.push(map.get(index))
        }
        output.push(item)
    })
    return output;
}
export { inject };
