function Header(props){
    return(
        <div className="sticky">
        <div className="flex shopping-card">
            <div onClick={() => props. handleShow(false)}>Shopping cart App</div>
            <div onClick={() => props. handleShow(true)}> cart 
            
                <sup>{props.count}</sup>
            </div>
        </div>
        </div>
    )
}

export default Header;