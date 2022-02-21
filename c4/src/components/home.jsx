export const Home = ()=>{
    return <div>
<img className="logo"   src="https://cdn.vox-cdn.com/thumbor/ULiGDiA4_u4SaK-xexvmJVYUNY0=/0x0:640x427/1400x1050/filters:focal(0x0:640x427):format(jpeg)/cdn.vox-cdn.com/assets/3218223/google.jpg"/>
<br />
<input className="search-box" placeholder="search" type="text"/>
<button className="search">Search</button>
<br />
<button id="sort-alphabetically">ASC</button>
<button id="sort-alphabetically-desc">DESC</button>
<button id="sort-by-date">date ASC</button>
<button id="sort-by-date-desc">date DESC</button>
<button id="sort-by-quality">quality ASC</button>
<button id="sort-by-quality-desc">quality DESC</button>
<button id="filter-explicit">filter</button>


    </div>
}