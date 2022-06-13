import React,{useState} from 'react'
import { IState as Props } from "../App";


interface IProps {
    setItems: React.Dispatch<React.SetStateAction<Props["items"]>>
    items: Props["items"]
}

const AddItem: React.FC<IProps> = ({setItems, items}) => {


    const [input, setInput] = useState({
        name: "",
        price: "",
        description: "",
        img: ""
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.name || !input.price) return

        setItems([
            ...items,
            {
                name: input.name,
                price: parseInt(input.price),
                url: input.img,
                description: input.description
            }
        ]);

        setInput({
            name: "",
            price: "",
            img: "",
            description: ""
        })
    }


  return (
    <div className="AddItem">
            <input 
                type="text"
                onChange={handleChange}
                className="AddItemInput"
                name="name"
                value={input.name}
                placeholder="Name"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddItemInput"
                name="price"
                value={input.price}
                placeholder="Price"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddItemInput"
                name="img"
                value={input.img}
                placeholder="Image Url"
            />
            <textarea
                onChange={handleChange}
                className="AddItemInput"
                name="description"
                value={input.description}
                placeholder="Note"
            />
            <button
                onClick={handleClick}
                className="AddItemButton"
            >
                Add to List
            </button>
        </div>
    
  )
}

export default AddItem
