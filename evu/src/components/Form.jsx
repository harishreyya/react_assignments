export const Form=()=>{
    return(
        <div>
            <form id="addgame">
            <input name="gamename" />
            <input name="gameauthor" /> 
             <input name="gametags" /> 
              <input name="gameprice" />
               <input name="forkids" type="checkbox" value="forkids" />
                <textarea name="gamedesc" ></textarea> 
                 <select name="gamerating" >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
     <input type="submit" value="submit" />
            </form>
        </div>
    )
}