import React from 'react'


interface IProps {
    items: {
      name: string,
      price: number,
      url: string,
      description?: string
    }[]
  }


const ItemList: React.FC<IProps> = ({items}) => {


    const renderItemList = (): JSX.Element[] => {
         
        return  items.map((item) => {
                return(
                    <li className='itemList' key={item.name}>
                    <div className='itemListHeader'>
                            <img className='itemListImage' src={item.url}/>
                            <h2>{item.name}</h2>                           
                    </div>
                    <p>${item.price}</p>
                    <p className='itemDescription'>{item.description}</p>
                </li>
                )
            })

        
    }

  return (
    <ul>
        {renderItemList()}
    </ul>
  )
}

export default ItemList