const Event = ()=>{
    function cl(){
    alert("clicked")
    }
    function my(){
        alert("clicked")
    }
    function th(){
        alert("here to go")
    }
    function by(){
        alert("here")
    }
    function late(){
        alert("call here")
    }

    return(
        <>
        <button onClick={cl} class="but">Click here</button>
        <br/>
        <button onMouseEnter={my}>submit</button>
        <br/>
        <button onMouseLeave={th}>we submitted</button>
        <br/>
        <button onMouseUp={by}>we are submit</button>
        <br/>
        <button onDoubleClick={late}>we are submit</button>
        <button onClick={()=>alert("inline event")}>Inline</button>
        </>
    )
}
export default Event