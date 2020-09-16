import React from 'react'

const SearchForm = (props) => {

    let {handleChange} = props

    return(
       <div className='container' style={{paddingTop: '100px'}}>
           <div className='row'>
                <section className='col s9 offset-s2'>
                    <form action='' >
                        <div className='input-field'>
                            <input type='search'
                            name='searchTerms'
                            placeholder='Search Movie Here...' 
                            onChange={handleChange} 
                            />
                           
                        </div>
                    </form>
                </section>
           </div>
       </div>
    )
}

export default SearchForm