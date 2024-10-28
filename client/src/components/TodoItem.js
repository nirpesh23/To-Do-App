
export default function ToDoItem(props){
    const {id, name, description} = props.data;

    function onEdit(){
        props.modalOptions.setUpdatedId(id);
        props.modalOptions.setOpen(true)
    }

    function onComplete(){
        props.setComplete(id);
    }
    return(
        <div className="item" style={{marginTop: "20px"}}>
            <div className="content" style={{float: "left"}}>
                <div className="header" style={{marginBottom: "5px"}}>{name}</div>
                <div>{description}</div>
            </div>
            <i className="trash alternate outline icon" style={{float: "right"}} onClick={()=>props.handleOnDelete(id)}></i>
            <i className="edit alternate outline icon" style={{float: "right"}} onClick={onEdit}></i>
            <i className="check circle alternate outline icon" style={{float: "right"}} onClick={onComplete}></i>
        </div>
    )
}