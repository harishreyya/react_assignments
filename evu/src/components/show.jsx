const ShowBody = ({item, handleClick}) =>{
    const {id,gamename, gameauthor, gametags,gameprice,forkids,gamedesc,gamerating} = item;

    return (
        <div>
            <div onClick={() => handleClick(item)}>{id} - "game name":{gamename},
            "game price": {gameprice} ₹ ,   
            "game author":{gameauthor}  ,  
            "game tags": {gametags}  ,   
            "for kids":{forkids}  ,   
            "game desc":{gamedesc}  ,  
            "game rating": {gamerating}</div>
        </div>
    )
}

export const ShowGame = ({form, handleclick}) =>{

    return (
        <div>
            <table id="table">
                    <thead>
               
                   
                {form.map((item)=>{
                    return <tr><ShowBody key={item.id} item={item} handleClick={handleclick}/><br /></tr>
                })}
               
                
               
               </thead>
                </table>
            
        </div>
    )
}