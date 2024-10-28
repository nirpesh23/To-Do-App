
export default function ToDoItem(props){
    const {id, name, description, start_date, end_date} = props.data;
    const activeTab = props.activeTab;

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
                <p>{description}</p>
                <div>Due Date: { new Date(end_date).toDateString()}</div>
            </div>
            {(activeTab !== 'tab2') &&
                <>
                <i className="trash alternate outline icon" style={{float: "right"}} onClick={()=>props.handleOnDelete(id)}></i>
                <i className="edit alternate outline icon" style={{float: "right"}} onClick={onEdit}></i>
                <i className="check circle alternate outline icon" style={{float: "right"}} onClick={onComplete}></i>
                </>
            }
        </div>
    )
}