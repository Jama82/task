import React from 'react';

const Ingredients = ({meal}) => {
    return (
        <div>
            {meal==="burger" ?(<img  src="
        https://images.unsplash.com/photo-1548946522-4a313e8972a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlnJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>):('')}

            {meal ==="fish"?(<img src="https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZyaWVkJTIwZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>):('')}

            {meal ==="stake"? ( <img id="stake" src="https://images.unsplash.com/photo-1621858170593-9d380e529df1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhbHMlMjBzdGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
     ):("")}
      </div> 
            
           
    );
};




export default Ingredients;
