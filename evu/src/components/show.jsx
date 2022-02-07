const ShowBody = ({item, handleClick}) =>{
    const {id,gamename, gameauthor, gametags,gameprice,forkids,gamedesc,gamerating} = item;

    return (
        <div>
            <div onClick={() => handleClick(item)}>{gamename} {gameprice}ruppes {gameauthor} {gametags} {forkids} {gamedesc} {gamerating}</div>
        </div>
    )
}

export const ShowGame = ({form, handleclick}) =>{

    return (
        <div>
            
                
                {form.map((item)=>{
                    return <ShowBody key={item.id} item={item} handleClick={handleclick}/>
                })}
               
            
        </div>
    )
}