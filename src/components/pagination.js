import React from 'react';

export default (props)=>{
    const {prevPage, page, numberOfPages, previousPage, nextPage, pages } = props;

return(
<div className='paginationComponent'>
<ul className="pagination">

<li className={prevPage <= 1? "disabled": "waves-effect"}>
    <a href="#!">
    <i 
        className= "material-icons"
        id='prevPage'
        onClick={ previousPage }
    >chevron_left</i>
    </a>
    
</li>
    <li className="active"><a href="#!">{page}</a></li>
    <li><a href="#!"> of </a></li>
    <li><a href="#!">{numberOfPages}</a></li>

<li className={numberOfPages === prevPage? "disabled": "waves-effect"}>
    <a href="#!">
    <i 
        className= "material-icons"
        id='nextPage'
        onClick={ nextPage }
    >chevron_right</i>
    </a>
</li>
</ul> 
</div>
)};
