import { useDispatch } from "react-redux";
import { CDN_URL } from "../utills/contents";
import { addItem } from "../utills/cartSlice";

const ItemList = ({ items }) => {



const dispatch=useDispatch();

  const handleAddItem=(item)=>{
    //dispatch an action
    dispatch(addItem(item)); 
  }
  
  return (
   <div>
   {items.map((item)=>(
    <div className=" p-2 m-2 border-gray-200 border-b-2 text-left flex"
    key={item.card.info.id}>
        <div className="w-9/12">
        <div className="py-2">
        <span>{item.card.info.name}</span>
        <span>- ₹{item.card.info.price ? 
              item.card.info.price/100
        :item.card.info.defaultPrice/100}</span>
    </div>
    <p className="text-xs">{item.card.info.description}</p>
   </div> 
     <div className="w-3/12 p-4">
     <div className="absolute">
        <button className="px-2 -mx-8 rounded-lg bg-white shadow-lg"
        onClick={()=>handleAddItem(item)}>Add +</button>
     </div>
    <img className="w-full rounded-sm" src={CDN_URL+item.card.info.imageId}/>
     </div>
    </div>
   ))}
   </div>
  );
};

export default ItemList;
