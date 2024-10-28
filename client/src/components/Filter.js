export default function FilterButton(props){
    const {name, btnClass, margin, float} = props.options
    function onSearch(e){
        e.preventDefault();
        props.options.getSearchResult();
    }
    return(
        <button className={btnClass} 
        style={{height:"30px", position: "sticky", marginLeft:margin, float}}
        onClick={onSearch}>{name}</button>
    );
}